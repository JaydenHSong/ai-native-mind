// ==========================================================================
// ai-native-mind SPA core engine
// ==========================================================================

let wikiData = [];
let currentDoc = null;
let graphSimulation = null;

// 챕터 데이터 정의 (campaign-map.md 기준)
const CHAPTERS = [
  {
    num: 0,
    title: "튜토리얼 (Tutorial)",
    desc: "개인 지식 위키의 운영 규칙과 기본 도구 이해",
    docs: ["patterns/llm-wiki", "tools/obsidian", "tools/claude-code"],
    quest: "ingest/query/lint 흐름을 3문장으로 설명하기",
    reward: "개인 위키 사용 규칙 메모 작성"
  },
  {
    num: 1,
    title: "세계관 이해 (Worldview)",
    desc: "AI 네이티브 개발의 3대 핵심 역량 이해",
    docs: ["concepts/ai-native-programmer", "concepts/ai-native-architecture"],
    quest: "AI 네이티브 방식이 필요한 이유 5문장 정리",
    reward: "내 개발 방식 Before/After 노트"
  },
  {
    num: 2,
    title: "기본 전투 (Basic Combat)",
    desc: "컨텍스트와 프롬프트 엔지니어링의 차이와 실습",
    docs: ["concepts/context-engineering", "concepts/prompt-engineering", "concepts/context-vs-prompt-practice"],
    quest: "직면한 개발 문제를 prompt vs context로 분류하기",
    reward: "내 컨텍스트 소스 목록 도출"
  },
  {
    num: 3,
    title: "파티 운영 (Orchestration)",
    desc: "여러 AI 에이전트 조율 및 워크플로우 설계",
    docs: ["concepts/ai-orchestration", "patterns/orchestration-patterns-practice"],
    quest: "현재 개발 작업을 6대 패턴으로 직접 분류해보기",
    reward: "개인 최적 작업 흐름도 작성"
  },
  {
    num: 4,
    title: "제작소 (Plan & Build)",
    desc: "Subagents 위임을 통한 기능 분해 및 TDD 구현",
    docs: ["patterns/agent-planning-to-implementation", "patterns/subagents-delegation"],
    quest: "기능 1개를 기획->스펙->구현->검증으로 세분화",
    reward: "실제 구현 기능 1개 체크리스트"
  },
  {
    num: 5,
    title: "안전 던전 (Sandbox & Harness)",
    desc: "샌드박스 보안 설계 및 에이전트 가드레일 하네스 구축",
    docs: ["patterns/agent-server-harness", "patterns/safe-tool-calling-sandbox", "patterns/owasp-llm-typescript-mitigations"],
    quest: "서버의 권한/검증/로깅/재시도 누락 지점 1개 발견",
    reward: "보안 가이드라인 체크리스트 v1"
  },
  {
    num: 6,
    title: "운영 보스전 (Eval & Observability)",
    desc: "품질 평가 방법론(Evals) 및 OTel 오픈 표준 계측",
    docs: ["concepts/llm-evaluation", "concepts/gen-ai-observability"],
    quest: "현재 제품의 품질 지표 2개 + 관측 지표 2개 설정",
    reward: "대시보드 설계 초안 지표 카드"
  },
  {
    num: 7,
    title: "엔드게임 (Playbook)",
    desc: "PR/커밋 자동화 및 비용 최적화(95% 절감)",
    docs: ["patterns/git-ai-workflow", "patterns/ai-code-review", "patterns/ai-cost-management"],
    quest: "반복적인 개발 루틴 중 1개를 완전 자동화",
    reward: "나만의 AI 개발 플레이북 1페이지"
  }
];

// 초기화
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  fetchWikiData();
  setupEventListeners();
});

// ==========================================================================
// 1. 테마 관리 (Theme Manager)
// ==========================================================================
function initTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("theme") || "dark";
  
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);

  themeToggle.addEventListener("click", () => {
    const nextTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.querySelector('meta[name="color-scheme"]').content = nextTheme === "dark" ? "dark" : "light dark";
    updateThemeIcon(nextTheme);
    
    // 그래프가 있는 경우 색상 리셋
    if (graphSimulation) {
      graphSimulation.draw();
    }
  });
}

function updateThemeIcon(theme) {
  const icon = document.querySelector("#theme-toggle i");
  if (theme === "dark") {
    icon.className = "fa-solid fa-sun";
  } else {
    icon.className = "fa-solid fa-moon";
  }
}

// ==========================================================================
// 2. 데이터 페칭 및 렌더링 (Data Fetching)
// ==========================================================================
async function fetchWikiData() {
  try {
    const response = await fetch("wiki-data.json");
    if (!response.ok) throw new Error("데이터 파일을 불러올 수 없습니다.");
    wikiData = await response.json();
    
    // 로드 통계 업데이트
    document.getElementById("quick-stats").textContent = `${wikiData.length} Pages loaded`;
    document.getElementById("doc-count").textContent = wikiData.length;

    // UI 렌더링
    renderDocumentList(wikiData);
    renderLibraryIndex();
    renderCampaignMap();
    initGraph();
    
    // 해시 라우팅 처리
    handleRouting();
    window.addEventListener("hashchange", handleRouting);
    
  } catch (error) {
    console.error("데이터 로드 실패:", error);
    document.getElementById("document-list").innerHTML = `<li class="error-item">데이터 로드 실패: ${error.message}</li>`;
  }
}

// 왼쪽 문서 사이드바 리스트 렌더링
function renderDocumentList(data) {
  const listElement = document.getElementById("document-list");
  listElement.innerHTML = "";
  
  if (data.length === 0) {
    listElement.innerHTML = '<li class="no-results">검색 결과가 없습니다.</li>';
    return;
  }

  data.forEach(doc => {
    const li = document.createElement("li");
    li.className = `doc-item ${currentDoc && currentDoc.id === doc.id ? 'active' : ''}`;
    li.setAttribute("data-id", doc.id);
    li.setAttribute("data-category", doc.category);
    
    li.innerHTML = `
      <div class="doc-item-title">${doc.title}</div>
      <div class="doc-item-meta">
        <span class="doc-item-category">${doc.category}</span>
        <span>${doc.updated || doc.created}</span>
      </div>
    `;
    
    li.addEventListener("click", () => {
      window.location.hash = doc.id;
    });
    listElement.appendChild(li);
  });
}

// Library Index 탭 렌더링
function renderLibraryIndex() {
  const grid = document.getElementById("library-grid");
  grid.innerHTML = "";

  const categories = {
    concepts: { title: "Concepts", icon: "fa-brain", color: "var(--concepts-color)" },
    tools: { title: "Tools", icon: "fa-wrench", color: "var(--tools-color)" },
    patterns: { title: "Patterns", icon: "fa-chess-knight", color: "var(--patterns-color)" },
    comparisons: { title: "Comparisons", icon: "fa-scale-balanced", color: "var(--comparisons-color)" },
    journal: { title: "Journal", icon: "fa-calendar-days", color: "var(--journal-color)" },
    meta: { title: "Meta", icon: "fa-compass", color: "var(--meta-color)" }
  };

  Object.entries(categories).forEach(([key, cat]) => {
    const pages = wikiData.filter(d => d.category === key || (key === 'meta' && d.category === 'wiki'));
    if (pages.length === 0) return;

    const card = document.createElement("div");
    card.className = "library-section-card glass-panel";
    card.style.borderTop = `4px solid ${cat.color}`;

    let pageListHTML = pages.map(p => `
      <li class="lib-page-item" data-id="${p.id}" title="${p.title}">
        <i class="fa-regular fa-file-lines" style="color: ${cat.color}; margin-right: 6px;"></i> ${p.title}
      </li>
    `).join("");

    card.innerHTML = `
      <div class="lib-card-header">
        <h3 style="color: ${cat.color}"><i class="fa-solid ${cat.icon}"></i> ${cat.title}</h3>
        <span class="count-badge">${pages.length}</span>
      </div>
      <ul class="lib-page-list">
        ${pageListHTML}
      </ul>
    `;

    // 클릭 이벤트 바인딩
    card.querySelectorAll(".lib-page-item").forEach(item => {
      item.addEventListener("click", () => {
        window.location.hash = item.getAttribute("data-id");
      });
    });

    grid.appendChild(card);
  });
}

// Campaign Map 탭 렌더링
function renderCampaignMap() {
  const container = document.getElementById("campaign-flow");
  container.innerHTML = "";
  
  const completedChapters = JSON.parse(localStorage.getItem("completed-chapters") || "[]");

  CHAPTERS.forEach(ch => {
    const isCompleted = completedChapters.includes(ch.num);
    const row = document.createElement("div");
    row.className = `chapter-row ${isCompleted ? 'completed' : ''}`;
    row.id = `chapter-row-${ch.num}`;

    // 연관된 문서들 칩 마크업 생성
    const docsHTML = ch.docs.map(docId => {
      const doc = wikiData.find(d => d.id === docId || d.filename === docId.split('/').pop());
      const title = doc ? doc.title : docId.split('/').pop();
      return `
        <a class="ch-doc-link" data-id="${doc ? doc.id : docId}">
          <i class="fa-regular fa-file-text"></i> ${title}
        </a>
      `;
    }).join("");

    row.innerHTML = `
      <div class="chapter-marker" title="챕터 ${ch.num} 상세">
        <span class="ch-num">CH</span>
        <span class="ch-id">${ch.num}</span>
      </div>
      
      <div class="chapter-card glass-panel">
        <div class="chapter-header-info">
          <div>
            <h3>${ch.title}</h3>
            <div class="ch-desc">${ch.desc}</div>
          </div>
          <button class="chapter-check-btn" data-num="${ch.num}">
            <i class="fa-solid ${isCompleted ? 'fa-circle-check' : 'fa-circle'}"></i> 
            <span>${isCompleted ? 'Clear!' : '클리어하기'}</span>
          </button>
        </div>

        <div class="chapter-docs-section">
          <span class="section-lbl">필수 수행 문서</span>
          <div class="chapter-links">
            ${docsHTML}
          </div>
        </div>

        <div class="quest-reward-board">
          <div class="quest-item">
            <span class="board-lbl"><i class="fa-solid fa-bullseye"></i> 클리어 조건</span>
            <span>${ch.quest}</span>
          </div>
          <div class="reward-item">
            <span class="board-lbl"><i class="fa-solid fa-gift"></i> 퀘스트 보상</span>
            <span>${ch.reward}</span>
          </div>
        </div>
      </div>
    `;

    // 칩 클릭 시 문서 이동
    row.querySelectorAll(".ch-doc-link").forEach(link => {
      link.addEventListener("click", () => {
        window.location.hash = link.getAttribute("data-id");
      });
    });

    // 클리어 토글 버튼
    const checkBtn = row.querySelector(".chapter-check-btn");
    checkBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleChapterCompletion(ch.num);
    });

    container.appendChild(row);
  });
}

function toggleChapterCompletion(num) {
  let completed = JSON.parse(localStorage.getItem("completed-chapters") || "[]");
  const index = completed.indexOf(num);
  const row = document.getElementById(`chapter-row-${num}`);
  const btn = row.querySelector(".chapter-check-btn");

  if (index === -1) {
    // 클리어 처리
    completed.push(num);
    localStorage.setItem("completed-chapters", JSON.stringify(completed));
    row.classList.add("completed");
    btn.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>Clear!</span>`;
    
    // 폭죽 효과 (canvas-confetti)
    if (typeof confetti === "function") {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  } else {
    // 취소 처리
    completed.splice(index, 1);
    localStorage.setItem("completed-chapters", JSON.stringify(completed));
    row.classList.remove("completed");
    btn.innerHTML = `<i class="fa-solid fa-circle"></i> <span>클리어하기</span>`;
  }
}

// ==========================================================================
// 3. 마크다운 문서 렌더링 및 해시 라우팅 (Routing & Rendering)
// ==========================================================================
function handleRouting() {
  const hash = window.location.hash.slice(1);
  
  if (!hash) {
    // 기본 화면: 플레이 맵 표시
    showTab("campaign");
    closeReadingPanel();
    return;
  }

  // 문서 찾기 (id 일치 또는 filename 일치)
  const doc = wikiData.find(d => d.id === hash || d.filename === hash || d.path === hash);
  
  if (doc) {
    loadDocument(doc);
  } else {
    console.warn("문서를 찾을 수 없습니다:", hash);
    // 깨진 링크이거나 찾지 못한 경우
    document.getElementById("reading-placeholder").innerHTML = `
      <div class="placeholder-icon"><i class="fa-solid fa-triangle-exclamation"></i></div>
      <h3>문서를 찾을 수 없음</h3>
      <p>"${hash}" 경로는 위키에 존재하지 않거나 잘못된 링킹입니다.</p>
    `;
    openReadingPanel();
  }
}

function loadDocument(doc) {
  currentDoc = doc;
  
  // 사이드바 활성 아이템 강조
  document.querySelectorAll(".doc-item").forEach(item => {
    if (item.getAttribute("data-id") === doc.id) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  // 우측 리더 뷰 채우기
  document.getElementById("reading-placeholder").classList.add("hidden");
  const reader = document.getElementById("reading-content");
  reader.classList.remove("hidden");

  // 메타 정보
  document.getElementById("doc-category").textContent = doc.category;
  document.getElementById("reading-panel").setAttribute("data-category", doc.category);
  document.getElementById("doc-title").textContent = doc.title;
  document.getElementById("doc-confidence").querySelector("span").textContent = doc.confidence.toUpperCase();
  document.getElementById("doc-status").querySelector("span").textContent = doc.status.toUpperCase();
  document.getElementById("doc-created").textContent = doc.created;
  document.getElementById("doc-updated").textContent = doc.updated || doc.created;

  // 태그 렌더링
  const tagsContainer = document.getElementById("doc-tags");
  tagsContainer.innerHTML = doc.tags.map(t => `<span class="doc-tag">#${t}</span>`).join("");

  // 쉽게 읽기 렌더링
  const easyReadPanel = document.getElementById("easy-read-panel");
  if (doc.easyRead) {
    easyReadPanel.classList.remove("hidden");
    document.getElementById("easy-read-body").innerHTML = resolveWikilinks(marked.parse(doc.easyRead));
  } else {
    easyReadPanel.classList.add("hidden");
  }

  // 본문 마크다운 렌더링
  const bodyViewer = document.getElementById("markdown-viewer");
  let bodyHTML = marked.parse(doc.body);
  bodyViewer.innerHTML = resolveWikilinks(bodyHTML);

  // 연관 지식 링킹 버튼 생성
  const relContainer = document.getElementById("doc-related-links");
  const allRelated = [...new Set([...doc.related, ...doc.extractedRelated])];
  
  // 자기 자신 링크 제외
  const filteredRelated = allRelated.filter(r => r !== doc.id && r !== doc.filename);

  if (filteredRelated.length > 0) {
    relContainer.parentElement.classList.remove("hidden");
    relContainer.innerHTML = filteredRelated.map(linkPath => {
      // 카테고리 추출 및 타이틀 찾기
      const cleanPath = linkPath.replace(/^\[\[|\]\]$/g, '');
      const relatedDoc = wikiData.find(d => d.id === cleanPath || d.filename === cleanPath || d.id.endsWith(cleanPath));
      const title = relatedDoc ? relatedDoc.title : cleanPath.split('/').pop();
      return `<a class="related-link-btn" data-id="${relatedDoc ? relatedDoc.id : cleanPath}">${title}</a>`;
    }).join("");

    relContainer.querySelectorAll(".related-link-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        window.location.hash = btn.getAttribute("data-id");
      });
    });
  } else {
    relContainer.parentElement.classList.add("hidden");
  }

  // 원천 소스 리스트
  const sourcesContainer = document.getElementById("doc-sources-list");
  if (doc.sources && doc.sources.length > 0) {
    sourcesContainer.parentElement.classList.remove("hidden");
    sourcesContainer.innerHTML = doc.sources.map(s => `<li>${s}</li>`).join("");
  } else {
    sourcesContainer.parentElement.classList.add("hidden");
  }

  // 코드 하이라이팅 적용
  if (typeof Prism !== "undefined") {
    Prism.highlightAllUnder(bodyViewer);
  }

  // 스크롤 탑
  document.getElementById("reading-panel").scrollTop = 0;
  
  openReadingPanel();
}

// Obsidian 위키링크 파싱 및 해시 링크로 변환
function resolveWikilinks(htmlContent) {
  // [[category/page-name|보여질 이름]] 또는 [[category/page-name]] 형태 매칭
  return htmlContent.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (match, linkPath, linkText) => {
    const cleanPath = linkPath.trim();
    const text = linkText ? linkText.trim() : cleanPath.split('/').pop();
    
    // 파일명 또는 ID 매칭 확인
    const exists = wikiData.some(d => d.id === cleanPath || d.filename === cleanPath || d.id.endsWith(cleanPath));
    const classList = exists ? 'wikilink' : 'wikilink broken-link';
    
    // 위키 데이터에서 실제 매칭되는 ID 획득
    const matchedDoc = wikiData.find(d => d.id === cleanPath || d.filename === cleanPath || d.id.endsWith(cleanPath));
    const finalHash = matchedDoc ? matchedDoc.id : cleanPath;
    
    return `<a href="#${finalHash}" class="${classList}">${text}</a>`;
  });
}

function openReadingPanel() {
  // 모바일/태블릿 등에서 레이아웃 조정 시 활용 가능
}
function closeReadingPanel() {
  document.getElementById("reading-placeholder").classList.remove("hidden");
  document.getElementById("reading-content").classList.add("hidden");
}

// ==========================================================================
// 4. 이벤트 핸들러 및 뷰 탭 세팅 (Event Listeners & Tabs)
// ==========================================================================
function setupEventListeners() {
  // 탭 클릭 이벤트
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      showTab(btn.getAttribute("data-tab"));
    });
  });

  // 실시간 퍼지 검색 바
  const searchInput = document.getElementById("search-input");
  const clearBtn = document.getElementById("search-clear-btn");
  
  searchInput.addEventListener("input", (e) => {
    const q = e.target.value.toLowerCase().trim();
    if (q) {
      clearBtn.classList.remove("hidden");
    } else {
      clearBtn.classList.add("hidden");
    }
    filterWiki();
  });

  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    clearBtn.classList.add("hidden");
    filterWiki();
    searchInput.focus();
  });

  // 카테고리 빠른 필터 칩
  document.querySelectorAll(".filter-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      filterWiki();
    });
  });
}

function showTab(tabId) {
  document.querySelectorAll(".tab-btn").forEach(btn => {
    if (btn.getAttribute("data-tab") === tabId) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  document.querySelectorAll(".tab-panel").forEach(panel => {
    if (panel.id === `${tabId}-tab`) {
      panel.classList.add("active");
    } else {
      panel.classList.remove("active");
    }
  });

  // 그래프 탭 전환 시 시뮬레이션 동작 트리거
  if (tabId === "graph" && graphSimulation) {
    graphSimulation.restart();
  }
}

// 카테고리 칩 및 검색 통합 필터링
function filterWiki() {
  const query = document.getElementById("search-input").value.toLowerCase().trim();
  const activeChip = document.querySelector(".filter-chip.active");
  const category = activeChip ? activeChip.getAttribute("data-category") : "all";

  let filtered = wikiData;

  // 1. 카테고리 필터링
  if (category !== "all") {
    filtered = filtered.filter(doc => doc.category === category || (category === 'meta' && doc.category === 'wiki'));
  }

  // 2. 퍼지/검색어 필터링
  if (query) {
    filtered = filtered.filter(doc => {
      const titleMatch = doc.title.toLowerCase().includes(query);
      const tagMatch = doc.tags.some(t => t.toLowerCase().includes(query));
      const contentMatch = doc.body.toLowerCase().includes(query);
      const summaryMatch = doc.easyRead.toLowerCase().includes(query);
      return titleMatch || tagMatch || contentMatch || summaryMatch;
    });
  }

  renderDocumentList(filtered);
}

// ==========================================================================
// 5. 인터랙티브 지식 관계망 그래프 (Custom Physics Canvas Graph)
// ==========================================================================
function initGraph() {
  const canvas = document.getElementById("knowledge-graph-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const container = canvas.parentElement;

  let width = container.clientWidth || 800;
  let height = container.clientHeight || 600;
  let hasValidSize = container.clientWidth > 0 && container.clientHeight > 0;
  canvas.width = width;
  canvas.height = height;

  // 가상 물리 월드 평원 크기 정의 (76개 노드가 140px 거리를 두고 겹침 없이 퍼질 수 있는 넉넉한 2400x1800 공간 제공)
  const worldWidth = 2400;
  const worldHeight = 1800;

  // 창 크기 변경 감지
  window.addEventListener("resize", () => {
    if (container.clientWidth > 0) {
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width;
      canvas.height = height;
      hasValidSize = true;
      draw();
    }
  });

  // 노드 및 링크 데이터 매핑
  const nodes = wikiData.map((doc, i) => {
    const angle = (i / wikiData.length) * Math.PI * 2;
    // 가상 월드의 중심을 기준으로 고르게 흩뿌림
    const r = Math.min(worldWidth, worldHeight) * 0.3 * Math.random() + 100;
    return {
      id: doc.id,
      title: doc.title,
      category: doc.category,
      easyRead: doc.easyRead,
      x: worldWidth / 2 + Math.cos(angle) * r,
      y: worldHeight / 2 + Math.sin(angle) * r,
      vx: 0,
      vy: 0,
      radius: doc.category === 'meta' ? 12 : 7,
      color: getCategoryColor(doc.category)
    };
  });

  const links = [];
  wikiData.forEach(doc => {
    const allRelated = [...new Set([...doc.related, ...doc.extractedRelated])];
    allRelated.forEach(rel => {
      const cleanRel = rel.replace(/^\[\[|\]\]$/g, '');
      const targetNode = nodes.find(n => n.id === cleanRel || n.id.endsWith(cleanRel));
      const sourceNode = nodes.find(n => n.id === doc.id);
      
      if (sourceNode && targetNode && sourceNode !== targetNode) {
        // 중복 방지
        const exists = links.some(l => 
          (l.source.id === sourceNode.id && l.target.id === targetNode.id) ||
          (l.source.id === targetNode.id && l.target.id === sourceNode.id)
        );
        if (!exists) {
          links.push({ source: sourceNode, target: targetNode });
        }
      }
    });
  });

  // 76개 노드가 흩어진 가상 월드 전체를 조망할 수 있는 최적의 초기 줌 비율 계산
  const initScale = Math.min(width / worldWidth, height / worldHeight) * 1.35 || 0.4;
  let transform = { 
    x: width / 2 - (worldWidth / 2) * initScale, 
    y: height / 2 - (worldHeight / 2) * initScale, 
    scale: initScale 
  };
  let draggedNode = null;
  let hoveredNode = null;
  let isPanning = false;
  let panStart = { x: 0, y: 0 };
  let activeAnimation = true;
  let isLooping = false;
  let animationFrameId = null;
  let alpha = 1.0; // 물리 시뮬레이션 에너지 냉각수 (d3-force cooling 모델 도입)

  function wakeSimulation() {
    alpha = 1.0; // 깨울 때 물리계를 다시 뜨겁게 가열
    activeAnimation = true;
    if (!isLooping) {
      isLooping = true;
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      animationFrameId = requestAnimationFrame(tick);
    }
  }

  // 카테고리 색상 리턴
  function getCategoryColor(cat) {
    const rootStyle = getComputedStyle(document.documentElement);
    switch (cat) {
      case 'concepts': return rootStyle.getPropertyValue('--concepts-color').trim() || '#a78bfa';
      case 'tools': return rootStyle.getPropertyValue('--tools-color').trim() || '#34d399';
      case 'patterns': return rootStyle.getPropertyValue('--patterns-color').trim() || '#fb923c';
      case 'comparisons': return rootStyle.getPropertyValue('--comparisons-color').trim() || '#f472b6';
      case 'journal': return rootStyle.getPropertyValue('--journal-color').trim() || '#22d3ee';
      case 'meta':
      case 'wiki': return rootStyle.getPropertyValue('--meta-color').trim() || '#facc15';
      default: return rootStyle.getPropertyValue('--accent-primary').trim() || '#6366f1';
    }
  }

  // 간단한 물리 시뮬레이션 한 프레임
  function tick() {
    if (!activeAnimation) {
      isLooping = false;
      return;
    }
    isLooping = true;

    // d3-force 방식의 냉각 수렴 모델 (에너지를 7%씩 우아하고 부드럽게 감쇠)
    if (draggedNode) {
      alpha = 1.0; // 드래그 중에는 식지 않도록 에너지 가득 공급
    } else {
      alpha *= 0.93; // 60프레임 내외로 시간을 늘려 아주 은은하고 매끄러운 감속을 유도
    }

    const decay = 0.80; // 은은하게 미끄러지듯 부드럽게 흐르는 관성력 조정
    const gravity = 0.0012; // 가상 평원 은은한 중심 중력
    const coulombConstant = 10000; // 척력 강도를 적정히 낮추어 과격한 튕김 방지
    const hookeConstant = 0.016; // 스프링 장력을 부드럽게 완화하여 출렁임 소거
    const desiredLength = 180; // 목표 결합선 거리

    // 1. 노드 간 척력 (Coulomb's Law) - alpha를 곱해 시간이 지날수록 약화시킴
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const n1 = nodes[i];
        const n2 = nodes[j];
        const dx = n2.x - n1.x;
        const dy = n2.y - n1.y;
        const distSq = dx * dx + dy * dy + 0.1;
        const dist = Math.sqrt(distSq);
        
        if (dist < 600) {
          const force = (coulombConstant / distSq) * alpha; // 냉각수 적용
          const fx = (dx / dist) * force;
          const fy = (dy / dist) * force;
          
          if (n1 !== draggedNode) { n1.vx -= fx; n1.vy -= fy; }
          if (n2 !== draggedNode) { n2.vx += fx; n2.vy += fy; }
        }
      }
    }

    // 2. Links 간 인력 (Hooke's Law) - alpha를 곱해 시간이 지날수록 약화시킴
    links.forEach(link => {
      const n1 = link.source;
      const n2 = link.target;
      const dx = n2.x - n1.x;
      const dy = n2.y - n1.y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 0.1;
      
      const force = (dist - desiredLength) * hookeConstant * alpha; // 냉각수 적용
      const fx = (dx / dist) * force;
      const fy = (dy / dist) * force;

      if (n1 !== draggedNode) { n1.vx += fx; n1.vy += fy; }
      if (n2 !== draggedNode) { n2.vx -= fx; n2.vy -= fy; }
    });

    // 2.5 노드 간 강제 겹침 방지 (Hard Collision Resolution)
    // 물리 수렴 완료 시점에 겹침 보정으로 인한 무한 덜덜 떨림 현상을 완전히 박멸하기 위해,
    // 이 겹침 보정의 힘에도 alpha 온도를 똑같이 곱해줍니다. 
    // 이렇게 하면 물리 온도가 식어감에 따라 밀쳐내기 보정 거리 또한 0에 수렴하여 완벽히 정지합니다.
    const minDistance = 140; 
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const n1 = nodes[i];
        const n2 = nodes[j];
        const dx = n2.x - n1.x;
        const dy = n2.y - n1.y;
        const dist = Math.hypot(dx, dy) || 0.1;
        
        if (dist < minDistance) {
          const overlap = minDistance - dist;
          // 보정 이동 폭에도 alpha 온도를 곱해 극후반 진동 소거
          const mx = (dx / dist) * overlap * 0.5 * alpha;
          const my = (dy / dist) * overlap * 0.5 * alpha;
          
          if (n1 !== draggedNode) { n1.x -= mx; n1.y -= my; }
          if (n2 !== draggedNode) { n2.x += mx; n2.y += my; }
        }
      }
    }

    // 3. 중력 및 상태 업데이트 (속도 제한 Clamping)
    let totalVelocity = 0;
    // 움직임을 묵직하고 매끄럽게 만들기 위해 최대 속도를 3.5픽셀로 엄격히 하향 (은하수 유영 연출)
    const maxVelocity = 3.5;
    
    nodes.forEach(node => {
      if (node === draggedNode) return;

      // 중앙 쏠림 중력 (월드 중심 기준) - alpha 적용
      const dx = worldWidth / 2 - node.x;
      const dy = worldHeight / 2 - node.y;
      node.vx += dx * gravity * alpha; // 냉각수 적용
      node.vy += dy * gravity * alpha; // 냉각수 적용

      // 속도 제한 (Velocity Clamping)
      const speed = Math.hypot(node.vx, node.vy);
      if (speed > maxVelocity) {
        node.vx = (node.vx / speed) * maxVelocity;
        node.vy = (node.vy / speed) * maxVelocity;
      }

      // 우아한 Soft Landing 구현: 실제 좌표 이동 폭에도 물리 온도(alpha)를 녹여내어
      // 마지막 순간에 속도가 자연스럽게 스르륵 사그라지며 감속 충격 없이 착륙하도록 함
      node.x += node.vx * alpha;
      node.y += node.vy * alpha;
      node.vx *= decay;
      node.vy *= decay;

      // 가상 월드 평원 경계 제약조건 (패딩 80px)
      const padding = 80;
      if (node.x < padding) { node.x = padding; node.vx *= -0.5; }
      if (node.x > worldWidth - padding) { node.x = worldWidth - padding; node.vx *= -0.5; }
      if (node.y < padding) { node.y = padding; node.vy *= -0.5; }
      if (node.y > worldHeight - padding) { node.y = worldHeight - padding; node.vy *= -0.5; }

      totalVelocity += Math.hypot(node.vx * alpha, node.vy * alpha);
    });

    draw();

    // 완전히 멈춰 설 때까지 정지 조건을 매우 타이트하게 조율 (진짜 정지했을 때 애니메이션 루프 컷)
    if ((alpha < 0.015 || totalVelocity < 0.15) && !draggedNode) {
      nodes.forEach(node => {
        node.vx = 0;
        node.vy = 0;
      });
      alpha = 0;
      activeAnimation = false;
      isLooping = false;
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
      return;
    }

    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
    animationFrameId = requestAnimationFrame(tick);
  }

  // 렌더러
  function draw() {
    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.translate(transform.x, transform.y);
    ctx.scale(transform.scale, transform.scale);

    const isLightTheme = document.documentElement.getAttribute("data-theme") === "light";

    // 1. 엣지 연결선 렌더링
    ctx.strokeStyle = isLightTheme ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.05)';
    ctx.lineWidth = 1.2;
    links.forEach(link => {
      ctx.beginPath();
      ctx.moveTo(link.source.x, link.source.y);
      ctx.lineTo(link.target.x, link.target.y);
      
      // 하이라이트 노드 링킹은 더 밝고 두껍게
      if (hoveredNode && (link.source === hoveredNode || link.target === hoveredNode)) {
        ctx.strokeStyle = hoveredNode.color;
        ctx.lineWidth = 2.2;
        ctx.stroke();
        ctx.strokeStyle = isLightTheme ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.05)';
        ctx.lineWidth = 1.2;
      } else {
        ctx.stroke();
      }
    });

    // 2. 노드 렌더링
    nodes.forEach(node => {
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      
      // 베이스 노드 채우기
      ctx.fillStyle = node.color;
      ctx.shadowBlur = 0;
      
      // 마우스 오버 상태 하이라이트 네온 글로우
      if (node === hoveredNode) {
        ctx.shadowColor = node.color;
        ctx.shadowBlur = isLightTheme ? 8 : 16;
        ctx.arc(node.x, node.y, node.radius + 3, 0, Math.PI * 2);
      }
      ctx.fill();
      ctx.shadowBlur = 0; // 섀도우 복원
      
      // 노드 테두리
      ctx.strokeStyle = isLightTheme ? '#ffffff' : '#09090b';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // 노드 라벨 텍스트
      if (transform.scale > 0.6 || node === hoveredNode) {
        ctx.fillStyle = isLightTheme ? '#334155' : '#e4e4e7';
        ctx.font = node === hoveredNode 
          ? `bold ${11 / transform.scale}px var(--font-title)`
          : `${9 / transform.scale}px var(--font-title)`;
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        ctx.fillText(node.title, node.x, node.y + node.radius + 5);
      }
    });

    ctx.restore();
  }

  // 마우스 상호작용
  function getMouseCoords(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: (clientX - rect.left - transform.x) / transform.scale,
      y: (clientY - rect.top - transform.y) / transform.scale,
      rawX: clientX - rect.left,
      rawY: clientY - rect.top
    };
  }

  function handleMouseDown(e) {
    const coords = getMouseCoords(e);
    const clickTarget = nodes.find(n => {
      const dist = Math.hypot(n.x - coords.x, n.y - coords.y);
      return dist < n.radius + 10;
    });

    if (clickTarget) {
      draggedNode = clickTarget;
      wakeSimulation();
    } else {
      isPanning = true;
      const rawX = e.touches ? e.touches[0].clientX : e.clientX;
      const rawY = e.touches ? e.touches[0].clientY : e.clientY;
      panStart = { x: rawX - transform.x, y: rawY - transform.y };
      wakeSimulation();
    }
  }

  function handleMouseMove(e) {
    const coords = getMouseCoords(e);
    
    // 드래그 중인 경우
    if (draggedNode) {
      draggedNode.x = coords.x;
      draggedNode.y = coords.y;
      draggedNode.vx = 0;
      draggedNode.vy = 0;
      draw();
      return;
    }

    // 드래그가 아니고 패닝 중인 경우
    if (isPanning) {
      const rawX = e.touches ? e.touches[0].clientX : e.clientX;
      const rawY = e.touches ? e.touches[0].clientY : e.clientY;
      transform.x = rawX - panStart.x;
      transform.y = rawY - panStart.y;
      draw();
      return;
    }

    // 단순 마우스 무브 - 호버 체크
    const prevHovered = hoveredNode;
    hoveredNode = nodes.find(n => {
      const dist = Math.hypot(n.x - coords.x, n.y - coords.y);
      return dist < n.radius + 8;
    });

    if (hoveredNode !== prevHovered) {
      draw();
      updateTooltip(coords.rawX, coords.rawY);
    }
  }

  function handleMouseUp(e) {
    if (draggedNode) {
      // 드래그가 끈난 위치에서 단순 탭 여부 판단 (클릭)
      const coords = getMouseCoords(e);
      const dist = Math.hypot(draggedNode.x - coords.x, draggedNode.y - coords.y);
      if (dist < 4) {
        // 노드 탭 처리 -> 해당 문서 로드
        window.location.hash = draggedNode.id;
      }
    }
    draggedNode = null;
    isPanning = false;
    wakeSimulation();
  }

  // 툴팁 팝업 업데이트
  const tooltip = document.getElementById("graph-tooltip");
  function updateTooltip(x, y) {
    if (hoveredNode) {
      tooltip.classList.remove("hidden");
      tooltip.style.left = `${x + 16}px`;
      tooltip.style.top = `${y + 16}px`;
      
      const summary = hoveredNode.easyRead 
        ? hoveredNode.easyRead.split('\n')[0].replace(/[#*`|]/g, '').slice(0, 70) + '...'
        : '연관 지식 문서';

      tooltip.innerHTML = `
        <span class="tooltip-category" style="color: ${hoveredNode.color}">${hoveredNode.category}</span>
        <div class="tooltip-title">${hoveredNode.title}</div>
        <div style="color: var(--text-secondary); margin-top: 4px; font-size: 0.68rem; line-height: 1.3">${summary}</div>
      `;
    } else {
      tooltip.classList.add("hidden");
    }
  }

  // 줌 조절 버튼 핸들러
  document.getElementById("zoom-in-btn").addEventListener("click", () => {
    transform.scale = Math.min(transform.scale * 1.25, 4);
    draw();
  });
  document.getElementById("zoom-out-btn").addEventListener("click", () => {
    transform.scale = Math.max(transform.scale * 0.8, 0.2);
    draw();
  });
  document.getElementById("reset-graph-btn").addEventListener("click", () => {
    const nextScale = Math.min(width / worldWidth, height / worldHeight) * 1.35 || 0.4;
    transform = { 
      x: width / 2 - (worldWidth / 2) * nextScale, 
      y: height / 2 - (worldHeight / 2) * nextScale, 
      scale: nextScale 
    };
    // 노드들 고르게 재정렬 (가상 월드 기준)
    nodes.forEach((n, i) => {
      const angle = (i / nodes.length) * Math.PI * 2;
      const r = Math.min(worldWidth, worldHeight) * 0.3 * Math.random() + 100;
      n.x = worldWidth / 2 + Math.cos(angle) * r;
      n.y = worldHeight / 2 + Math.sin(angle) * r;
      n.vx = 0;
      n.vy = 0;
    });
    wakeSimulation();
    draw();
  });

  // 이벤트 바인딩
  canvas.addEventListener("mousedown", handleMouseDown);
  canvas.addEventListener("mousemove", handleMouseMove);
  canvas.addEventListener("mouseup", handleMouseUp);
  canvas.addEventListener("mouseleave", () => {
    draggedNode = null;
    isPanning = false;
    hoveredNode = null;
    tooltip.classList.add("hidden");
    draw();
  });

  // 마우스 휠 줌 기능 추가 (마우스 포인터 중심 스케일링으로 프리미엄 UX 구현)
  canvas.addEventListener("wheel", (e) => {
    e.preventDefault();
    const zoomFactor = 1.08;
    const coords = getMouseCoords(e);
    
    let nextScale;
    if (e.deltaY < 0) {
      // 휠 위로: 줌인
      nextScale = Math.min(transform.scale * zoomFactor, 4);
    } else {
      // 휠 아래로: 줌아웃
      nextScale = Math.max(transform.scale / zoomFactor, 0.2);
    }
    
    const scaleRatio = nextScale / transform.scale;
    transform.x = coords.rawX - (coords.rawX - transform.x) * scaleRatio;
    transform.y = coords.rawY - (coords.rawY - transform.y) * scaleRatio;
    transform.scale = nextScale;
    
    draw();
  }, { passive: false });

  // 모바일 터치 이벤트 대응
  canvas.addEventListener("touchstart", handleMouseDown);
  canvas.addEventListener("touchmove", handleMouseMove);
  canvas.addEventListener("touchend", handleMouseUp);

  // 물리 루프 구동
  tick();

  // 리스타트 컨트롤 리턴
  graphSimulation = {
    restart: () => {
      if (container.clientWidth > 0) {
        const sizeUpdated = !hasValidSize || width !== container.clientWidth || height !== container.clientHeight;
        
        width = container.clientWidth;
        height = container.clientHeight;
        canvas.width = width;
        canvas.height = height;
        
        if (!hasValidSize || sizeUpdated) {
          const nextScale = Math.min(width / worldWidth, height / worldHeight) * 1.35 || 0.4;
          transform = { 
            x: width / 2 - (worldWidth / 2) * nextScale, 
            y: height / 2 - (worldHeight / 2) * nextScale, 
            scale: nextScale 
          };
          nodes.forEach((n, i) => {
            const angle = (i / nodes.length) * Math.PI * 2;
            const r = Math.min(worldWidth, worldHeight) * 0.3 * Math.random() + 100;
            n.x = worldWidth / 2 + Math.cos(angle) * r;
            n.y = worldHeight / 2 + Math.sin(angle) * r;
            n.vx = 0;
            n.vy = 0;
          });
          hasValidSize = true;
        }
      }
      wakeSimulation();
    },
    stop: () => {
      activeAnimation = false;
    },
    draw: () => {
      // 실시간 바뀐 CSS 토큰 다시 적용 후 리드로우
      nodes.forEach(n => {
        n.color = getCategoryColor(n.category);
      });
      draw();
    }
  };
}
