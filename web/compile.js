const fs = require('fs');
const path = require('path');

// 경로 정의
const WIKI_DIR = path.resolve(__dirname, '../wiki');
const OUT_FILE = path.resolve(__dirname, 'wiki-data.json');

console.log('🚀 ai-native-mind Wiki 데이터 컴파일 시작...');
console.log(`📂 Wiki 경로: ${WIKI_DIR}`);

// 재귀적으로 특정 폴더 내의 마크다운 파일 수집
function getMarkdownFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // .obsidian, .git 등 숨김 폴더 제외
      if (!file.startsWith('.')) {
        getMarkdownFiles(filePath, fileList);
      }
    } else if (file.endsWith('.md')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// 자체 YAML Frontmatter 파서 (무의존성)
function parseFrontmatter(frontmatterStr) {
  const lines = frontmatterStr.split(/\r?\n/);
  const metadata = {};
  let currentKey = null;
  let currentArray = null;

  for (let line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    // 리스트 아이템 처리 (- "item")
    if (trimmed.startsWith('-')) {
      if (currentKey && currentArray) {
        let val = trimmed.slice(1).trim().replace(/^["']|["']$/g, '');
        currentArray.push(val);
      }
      continue;
    }

    const colonIndex = line.indexOf(':');
    if (colonIndex !== -1) {
      const key = line.slice(0, colonIndex).trim();
      let val = line.slice(colonIndex + 1).trim();

      // 리스트 시작 판단
      if (val === '' || val === '[]') {
        currentKey = key;
        currentArray = [];
        metadata[key] = currentArray;
      } else {
        // 단일 행 리스트 [a, b, c] 또는 일반 값
        if (val.startsWith('[') && val.endsWith(']')) {
          metadata[key] = val.slice(1, -1).split(',').map(v => v.trim().replace(/^["']|["']$/g, ''));
        } else {
          metadata[key] = val.replace(/^["']|["']$/g, '');
        }
        currentKey = key;
        currentArray = null;
      }
    }
  }
  return metadata;
}

// 마크다운 파싱 핵심 로직
function parseMarkdownFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const relPath = path.relative(WIKI_DIR, filePath);
  
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---/;
  const fmMatch = content.match(frontmatterRegex);
  
  let metadata = {};
  let body = content;
  
  if (fmMatch) {
    metadata = parseFrontmatter(fmMatch[1]);
    body = content.slice(fmMatch[0].length).trim();
  }
  
  // 쉽게 읽기 섹션 추출
  const easyReadMatch = body.match(/(?:#|##)\s*쉽게\s*읽기([\s\S]*?)(?=\n(?:#|##)\s|$)/i);
  const easyRead = easyReadMatch ? easyReadMatch[1].trim() : '';

  // 기본 메타데이터 보강
  const filename = path.basename(relPath, '.md');
  const defaultCategory = path.dirname(relPath) === '.' ? 'meta' : path.dirname(relPath);

  // Wikilink 파싱하여 연결망(Edge) 추출 (예: [[concepts/ai-native-programmer|AI 네이티브]])
  const relatedLinks = [];
  const wikilinkRegex = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;
  let match;
  while ((match = wikilinkRegex.exec(body)) !== null) {
    const linkPath = match[1].trim();
    // 중복 제거 및 유효한 링크만 추가
    if (!relatedLinks.includes(linkPath)) {
      relatedLinks.push(linkPath);
    }
  }
  
  return {
    id: relPath.replace('.md', ''),
    filename: filename,
    path: relPath,
    title: metadata.title || filename,
    category: metadata.category || defaultCategory,
    tags: metadata.tags || [],
    created: metadata.created || '',
    updated: metadata.updated || '',
    sources: metadata.sources || [],
    status: metadata.status || 'draft',
    confidence: metadata.confidence || 'medium',
    related: metadata.related || [],
    extractedRelated: relatedLinks, // 본문 검색으로 얻은 실제 연결망
    easyRead: easyRead,
    body: body
  };
}

try {
  const mdFiles = getMarkdownFiles(WIKI_DIR);
  console.log(`🔍 총 ${mdFiles.length}개의 마크다운 파일 탐색 완료.`);
  
  const wikiData = mdFiles.map(filePath => {
    try {
      return parseMarkdownFile(filePath);
    } catch (err) {
      console.error(`❌ 파일 파싱 실패: ${filePath}`, err);
      return null;
    }
  }).filter(Boolean);
  
  // JSON 파일로 저장
  fs.writeFileSync(OUT_FILE, JSON.stringify(wikiData, null, 2), 'utf-8');
  console.log(`✨ 컴파일 성공! 데이터 파일이 저장되었습니다: ${OUT_FILE}`);
  console.log(`📊 빌드 완료 통계:
  - 총 페이지 수: ${wikiData.length}
  - Concepts: ${wikiData.filter(d => d.category === 'concepts').length}개
  - Tools: ${wikiData.filter(d => d.category === 'tools').length}개
  - Patterns: ${wikiData.filter(d => d.category === 'patterns').length}개
  - Comparisons: ${wikiData.filter(d => d.category === 'comparisons').length}개
  - Journal: ${wikiData.filter(d => d.category === 'journal').length}개
  - Meta: ${wikiData.filter(d => d.category === 'meta' || d.category === 'wiki').length}개
  `);
} catch (error) {
  console.error('❌ 컴파일 에러 발생:', error);
  process.exit(1);
}
