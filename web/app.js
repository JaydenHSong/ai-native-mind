// ==========================================================================
// ai-native-mind SPA core engine
// ==========================================================================

let wikiData = [];
let currentDoc = null;
let graphSimulation = null;

// 3단계: 분리 로딩 상태 (인덱스 선행 로드, 본문/검색 코퍼스 지연 로드)
let fullDataLoaded = false;
let searchCorpusPromise = null;
let searchDebounceTimer = null;
let currentQuery = "";

let currentLanguage = localStorage.getItem("lang") || "ko";

// 다국어 (i18n) 사전 정의
const i18n = {
  ko: {
    quickStats: "개 문서 로드됨",
    searchPlaceholder: "제목, 태그, 내용 검색...",
    docCountLabel: "문서 목록",
    tabHome: "홈",
    tabLibrary: "지식 인덱스",
    tabGraph: "지식 관계망",
    fallbackNotice: "영어 번역 준비 중 - 국문 본문 제공",
    noResults: "검색 결과가 없습니다.",
    relatedDocs: "연관 지식 링크",
    originalSources: "참고 및 출처 소스",
    recentTitle: "최근에 들어온 이야기",
    startHere: "처음 오셨나요? 징검다리 첫 돌부터 시작하기",
    // 홈(도서관 로비) — 리벰프 1단계
    heroTitle: "오늘은 뭐가 궁금해요?",
    heroSub: "모르는 말을 만나도 괜찮아요. 쉬운 이야기부터 차근차근 있어요.",
    homeSearchPlaceholder: "검색어를 입력하세요 — 초성만 쳐도 돼요",
    homeHint: (n) => `지금 서가에 이야기 ${n}개 · 매일 아침 새 이야기가 들어와요`,
    questionLabel: "오늘의 질문",
    questionWallet: "\"AI가 내 카드 번호도 모른 채, 나 대신 결제할 수 있을까?\"",
    questionFallback: "\"오늘은 어떤 이야기가 새로 들어왔을까요?\"",
    questionLinkPrefix: "궁금하면 이 이야기부터 →",
    stonesTitle: "🪨 처음 왔어요? 징검다리 따라오기",
    stonesSub: "모르는 게 당연해요. 돌을 하나씩 밟으면 어느새 건너편이에요. 급하면 건너뛰어도 돼요.",
    stonesNote: "챕터 이름(기본 전투·보스전 같은 게임 말)을 쉬운 말로 바꿨어요. 퀘스트·보상·클리어 버튼은 빼고, 읽은 돌에 색이 칠해지는 것까지만 남겼어요. 돌을 누르면 그 구간의 첫 이야기가 열려요.",
    stoneLabel: "돌",
    nowBadge: "지금 여기",
    storyCount: (n) => `이야기 ${n}개`,
    readProgress: (r, n) => `읽은 이야기 ${r}/${n}개`,
    nextStone: "다음 돌",
    nextChapter: "다음 구간",
    nextStoneOf: (i, n) => `이야기 ${i}/${n}번째`,
    nextChapterSub: (name) => `“${name}” 구간의 첫 이야기`,
    nextStoneAllDone: "징검다리 완주!",
    nextStoneBackHome: "처음으로 돌아가기",
    homeRecentTitle: "📖 새로 들어온 이야기",
    homeRecentSub: "최근에 들어온 이야기예요.",
    shelvesTitle: "🗄️ 서가 안내",
    shelvesSub: "주제별로 꽂아 뒀어요. 서가를 누르면 왼쪽 목록이 그 주제로 걸러져요.",
    shelfNames: { concepts: "개념 서가", tools: "도구 서가", patterns: "패턴 서가", comparisons: "비교 서가", journal: "기록 서가", meta: "메타 서가" },
    shelfDescs: {
      concepts: "낯선 말을 쉬운 말로 풀어 둔 곳",
      tools: "써먹을 수 있는 AI 도구들",
      patterns: "\"이렇게 하면 된다\" 검증된 방법들",
      comparisons: "둘 중 뭐가 나은지 나란히 놓고 보기",
      journal: "그날그날의 뉴스와 일지",
      meta: "이 도서관 자체에 대한 이야기"
    },
    mapRoomTitle: "이야기들이 어떻게 이어져 있는지 보고 싶으면",
    mapRoomDesc: "지식 관계망 지도 — 평소엔 서가와 검색으로 충분해요. 지도는 가끔 전체 그림이 궁금할 때만.",
    mapRoomGo: "지도 열기 →"
  },
  en: {
    quickStats: "pages loaded",
    searchPlaceholder: "Search titles, tags, content...",
    docCountLabel: "Documents",
    tabHome: "Home",
    tabLibrary: "Knowledge Index",
    tabGraph: "Knowledge Graph",
    fallbackNotice: "Translation in progress. Showing Korean version.",
    noResults: "No results found.",
    relatedDocs: "Related Knowledge Links",
    originalSources: "Sources & References",
    recentTitle: "Recently added stories",
    startHere: "New here? Start with the first stepping stone",
    // Home (library lobby) — revamp phase 1
    heroTitle: "What are you curious about today?",
    heroSub: "Unfamiliar words are fine. Easy stories first, one step at a time.",
    homeSearchPlaceholder: "Type to search — Korean initial consonants work too",
    homeHint: (n) => `${n} stories on the shelves · New stories arrive every morning`,
    questionLabel: "Today's Question",
    questionWallet: "\"Can an AI pay for me without ever seeing my card number?\"",
    questionFallback: "\"What new story arrived today?\"",
    questionLinkPrefix: "Start with this story →",
    stonesTitle: "🪨 New here? Follow the stepping stones",
    stonesSub: "Not knowing is normal. Step on one stone at a time and you'll be across before you know it. Skipping ahead is fine too.",
    stonesNote: "Chapter names (game words like Basic Combat or Boss Fight) were renamed into plain words. Quests, rewards and clear buttons are gone — read stones simply fill with color. Click a stone to open the first story of that stretch.",
    stoneLabel: "Stone",
    nowBadge: "You are here",
    storyCount: (n) => `${n} stories`,
    readProgress: (r, n) => `${r}/${n} stories read`,
    nextStone: "Next stone",
    nextChapter: "Next stretch",
    nextStoneOf: (i, n) => `story ${i} of ${n}`,
    nextChapterSub: (name) => `First story of “${name}”`,
    nextStoneAllDone: "You crossed all the stones!",
    nextStoneBackHome: "Back to the start",
    homeRecentTitle: "📖 New arrivals",
    homeRecentSub: "Stories that arrived most recently.",
    shelvesTitle: "🗄️ Shelf guide",
    shelvesSub: "Everything is shelved by topic. Click a shelf to filter the list on the left.",
    shelfNames: { concepts: "Concepts", tools: "Tools", patterns: "Patterns", comparisons: "Comparisons", journal: "Journal", meta: "Meta" },
    shelfDescs: {
      concepts: "Unfamiliar words explained in plain language",
      tools: "AI tools you can actually use",
      patterns: "Proven ways that work",
      comparisons: "Side-by-side, which one is better",
      journal: "Daily news and logs",
      meta: "Stories about this library itself"
    },
    mapRoomTitle: "Want to see how the stories connect?",
    mapRoomDesc: "The knowledge graph map — shelves and search are enough day to day. The map is for when you want the whole picture.",
    mapRoomGo: "Open the map →"
  }
};

// 챕터 데이터 정의 (campaign-map.md 기준, 다국어 지원)
let CHAPTERS = [
  {
    num: 0,
    title: { ko: "튜토리얼 (Tutorial)", en: "Tutorial" },
    desc: { ko: "개인 지식 위키의 운영 규칙 and 기본 도구 이해", en: "Understand the operating rules and basic tools of your personal knowledge wiki" },
    docs: ["patterns/llm-wiki", "tools/obsidian", "tools/claude-code"],
    quest: { ko: "ingest/query/lint 흐름을 3문장으로 설명하기", en: "Explain the ingest/query/lint flow in 3 sentences" },
    reward: { ko: "개인 위키 사용 규칙 메모 작성", en: "Create a memo of personal wiki usage rules" }
  },
  {
    num: 1,
    title: { ko: "세계관 이해 (Worldview)", en: "Worldview" },
    desc: { ko: "AI 네이티브 개발의 3대 핵심 역량 이해", en: "Understand the three core competencies of AI-native development" },
    docs: ["concepts/ai-native-programmer", "concepts/ai-native-architecture"],
    quest: { ko: "AI 네이티브 방식이 필요한 이유 5문장 정리", en: "Summarize in 5 sentences why the AI-native approach is needed" },
    reward: { ko: "내 개발 방식 Before/After 노트", en: "Before/After notes on my development methodology" }
  },
  {
    num: 2,
    title: { ko: "기본 전투 (Basic Combat)", en: "Basic Combat" },
    desc: { ko: "컨텍스트와 프롬프트 엔지니어링의 차이와 실습", en: "Differences and practices of context vs prompt engineering" },
    docs: ["concepts/context-engineering", "concepts/prompt-engineering", "concepts/context-vs-prompt-practice"],
    quest: { ko: "직면한 개발 문제를 prompt vs context로 분류하기", en: "Classify a development issue as prompt vs context-driven" },
    reward: { ko: "내 컨텍스트 소스 목록 도출", en: "Define my own context sources inventory" }
  },
  {
    num: 3,
    title: { ko: "파티 운영 (Orchestration)", en: "Orchestration" },
    desc: { ko: "여러 AI 에이전트 조율 및 워크플로우 설계", en: "Orchestrate multiple AI agents and design workflows" },
    docs: ["concepts/ai-orchestration", "patterns/orchestration-patterns-practice"],
    quest: { ko: "현재 개발 작업을 6대 패턴으로 직접 분류해보기", en: "Classify your current development tasks into the 6 core patterns" },
    reward: { ko: "개인 최적 작업 흐름도 작성", en: "Draft your own optimized workflow diagram" }
  },
  {
    num: 4,
    title: { ko: "제작소 (Plan & Build)", en: "Plan & Build" },
    desc: { ko: "Subagents 위임을 통한 기능 분해 및 TDD 구현", en: "Decompose features via subagents delegation and execute TDD loops" },
    docs: ["patterns/agent-planning-to-implementation", "patterns/subagents-delegation"],
    quest: { ko: "기능 1개를 기획->스펙->구현->검증으로 세분화", en: "Decompose one feature into Plan -> Specs -> Implementation -> Verification" },
    reward: { ko: "실제 구현 기능 1개 체크리스트", en: "Create a checklist for a single implemented feature" }
  },
  {
    num: 5,
    title: { ko: "안전 던전 (Sandbox & Harness)", en: "Sandbox & Harness" },
    desc: { ko: "샌드박스 보안 설계 및 에이전트 가드레일 하네스 구축", en: "Design sandbox security and establish agent guardrail harnesses" },
    docs: ["patterns/agent-server-harness", "patterns/safe-tool-calling-sandbox", "patterns/owasp-llm-typescript-mitigations"],
    quest: { ko: "서버의 권한/검증/로깅/재시도 누락 지점 1개 발견", en: "Find one missing permission/validation/logging/retry spot in your server" },
    reward: { ko: "보안 가이드라인 체크리스트 v1", en: "Draft the security guidelines checklist v1" }
  },
  {
    num: 6,
    title: { ko: "운영 보스전 (Eval & Observability)", en: "Eval & Observability" },
    desc: { ko: "품질 평가 방법론(Evals) 및 OTel 오픈 표준 계측", en: "Understand Evals methodology and OTel open standard observability" },
    docs: ["concepts/llm-evaluation", "concepts/gen-ai-observability"],
    quest: { ko: "현재 제품의 품질 지표 2개 + 관측 지표 2개 설정", en: "Set up 2 quality metrics + 2 observability metrics for your app" },
    reward: { ko: "대시보드 설계 초안 지표 카드", en: "Mock up a metrics card dashboard draft" }
  },
  {
    num: 7,
    title: { ko: "엔드게임 (Playbook)", en: "Playbook" },
    desc: { ko: "PR/커밋 자동화 및 비용 최적화(95% 절감)", en: "Automate PR/commits and optimize AI API costs (95% savings)" },
    docs: ["patterns/git-ai-workflow", "patterns/ai-code-review", "patterns/ai-cost-management"],
    quest: { ko: "반복적인 개발 루틴 중 1개를 완전 자동화", en: "Fully automate one repetitive development routine" },
    reward: { ko: "나만의 AI 개발 플레이북 1페이지", en: "Create your own 1-page AI development playbook" }
  }
];

// 징검다리 표시 이름 (리벰프 1단계): CHAPTERS 데이터를 그대로 쓰되, 홈에서는 쉬운 말 이름으로만 보여준다
const CHAPTER_STONES = {
  0: { name: { ko: "시작하기", en: "Getting Started" }, desc: { ko: "이 도서관 쓰는 법부터", en: "How to use this library" }, icon: "🌱" },
  1: { name: { ko: "세상 이해하기", en: "Understanding the World" }, desc: { ko: "AI 세상이 어떻게 돌아가는지", en: "How the AI world works" }, icon: "🌍" },
  2: { name: { ko: "기본기 익히기", en: "Building the Basics" }, desc: { ko: "자주 쓰는 기본 기술", en: "Core skills you will use often" }, icon: "🛠️" },
  3: { name: { ko: "같이 일하기", en: "Working Together" }, desc: { ko: "AI와 팀으로 일하는 법", en: "Working as a team with AI" }, icon: "🤝" },
  4: { name: { ko: "작업실 열기", en: "Opening the Workshop" }, desc: { ko: "직접 만들어 보는 곳", en: "Where you build things yourself" }, icon: "🔨" },
  5: { name: { ko: "안전 지키기", en: "Staying Safe" }, desc: { ko: "사고 없이, 속지 않고 쓰는 법", en: "Using AI safely, without getting fooled" }, icon: "🛡️" },
  6: { name: { ko: "실전 운영하기", en: "Running in Practice" }, desc: { ko: "매일 굴러가게 돌보는 법", en: "Keeping things running every day" }, icon: "⚙️" },
  7: { name: { ko: "그다음 단계", en: "The Next Step" }, desc: { ko: "더 깊이 가고 싶을 때", en: "For when you want to go deeper" }, icon: "🌌" }
};

// 서가 안내 카테고리 정의 (renderLibraryIndex와 동일한 색상 토큰 사용)
const SHELF_CATEGORIES = [
  { key: "concepts", color: "var(--concepts-color)" },
  { key: "tools", color: "var(--tools-color)" },
  { key: "patterns", color: "var(--patterns-color)" },
  { key: "comparisons", color: "var(--comparisons-color)" },
  { key: "journal", color: "var(--journal-color)" },
  { key: "meta", color: "var(--meta-color)" }
];

// 초기화
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLanguage();
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

  // FOUC 방지용 인라인 !important 스타일 즉각 제거하여 CSS transition 및 변수 실시간 구동 허용
  const removeFoucStyle = () => {
    const foucStyle = document.getElementById("fouc-background-prevention");
    if (foucStyle) {
      foucStyle.remove();
    }
  };

  // 초기 구동 시 즉각 락 해제
  removeFoucStyle();

  themeToggle.addEventListener("click", () => {
    const nextTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.querySelector('meta[name="color-scheme"]').content = nextTheme === "dark" ? "dark" : "light dark";
    updateThemeIcon(nextTheme);
    
    // 혹시라도 남아있을 FOUC 스타일 락 완전 격파
    removeFoucStyle();
    
    // 그래프가 있는 경우 색상 리셋 및 시뮬레이션 깨우기
    if (graphSimulation) {
      graphSimulation.draw();
      graphSimulation.wake();
    }
  });
}

// ==========================================================================
// 1.1. 언어 관리 (Language Manager)
// ==========================================================================
function initLanguage() {
  const langToggle = document.getElementById("lang-toggle");
  if (!langToggle) return;

  updateUILanguage();

  langToggle.addEventListener("click", () => {
    currentLanguage = currentLanguage === "ko" ? "en" : "ko";
    localStorage.setItem("lang", currentLanguage);
    
    // UI 전체 리렌더링
    updateUILanguage();
    filterWiki();
    renderLibraryIndex();
    renderHome();
    renderHomePlaceholder();
    
    // 물리 그래프 재생성 (이미 초기화된 경우만 — 3단계 지연 초기화)
    if (graphSimulation) initGraph();
    
    // 현재 읽던 문서가 있다면 대칭 라우팅 실행
    if (currentDoc) {
      handleRouting();
    }
  });
}

function updateUILanguage() {
  const t = i18n[currentLanguage];
  if (!t) return;

  // 1. 탭 버튼 번역
  const tabHome = document.querySelector('.tab-btn[data-tab="home"]');
  if (tabHome) tabHome.innerHTML = `<i class="fa-solid fa-house"></i> ${t.tabHome}`;
  
  const tabLibrary = document.querySelector('.tab-btn[data-tab="library"]');
  if (tabLibrary) tabLibrary.innerHTML = `<i class="fa-solid fa-list-check"></i> ${t.tabLibrary}`;
  
  const tabGraph = document.querySelector('.tab-btn[data-tab="graph"]');
  if (tabGraph) tabGraph.innerHTML = `<i class="fa-solid fa-circle-nodes"></i> ${t.tabGraph}`;
  
  // 2. 검색 플레이스홀더 번역
  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.placeholder = t.searchPlaceholder;

  // 2.1. 홈(도서관 로비) 정적 텍스트 번역 — 동적 영역(돌·신간·서가·질문)은 renderHome이 다시 그린다
  const homeTexts = {
    "home-hero-title": t.heroTitle,
    "home-hero-sub": t.heroSub,
    "home-question-lbl": t.questionLabel,
    "home-stones-title": t.stonesTitle,
    "home-stones-sub": t.stonesSub,
    "home-stones-note": t.stonesNote,
    "home-recent-title": t.homeRecentTitle,
    "home-recent-sub": t.homeRecentSub,
    "home-shelves-title": t.shelvesTitle,
    "home-shelves-sub": t.shelvesSub,
    "home-maproom-t": t.mapRoomTitle,
    "home-maproom-d": t.mapRoomDesc,
    "home-maproom-go": t.mapRoomGo
  };
  Object.entries(homeTexts).forEach(([id, text]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  });
  const homeSearchInput = document.getElementById("home-search-input");
  if (homeSearchInput) homeSearchInput.placeholder = t.homeSearchPlaceholder;
  
  // 3. 문서 목록 헤더 번역
  const listHeader = document.querySelector(".nav-section-title span:first-child");
  if (listHeader) listHeader.textContent = t.docCountLabel;
  
  // 4. 모바일 위로 가기 버튼 번역
  const mobileBackBtn = document.getElementById("mobile-back-btn");
  if (mobileBackBtn) mobileBackBtn.innerHTML = `<i class="fa-solid fa-chevron-up"></i> ${currentLanguage === 'ko' ? '위로 가기' : 'Go Top'}`;

  // 5. 로고 서브텍스트 번역
  const logoSubtext = document.querySelector(".logo-text .subtext");
  if (logoSubtext) logoSubtext.textContent = currentLanguage === 'ko' ? "지식 위키" : "Knowledge Hub";
  
  // 6. 언어 토글 칩 액티브 상태 반영
  document.querySelectorAll(".lang-label").forEach(lbl => {
    if (lbl.getAttribute("data-lang") === currentLanguage) {
      lbl.classList.add("active");
    } else {
      lbl.classList.remove("active");
    }
  });
}

function updateThemeIcon(theme) {
  const icon = document.querySelector("#theme-toggle i");
  if (!icon) return;
  if (theme === "dark") {
    icon.className = "fa-solid fa-sun";
  } else {
    icon.className = "fa-solid fa-moon";
  }
}

function showNonBlockingError(message) {
  const listElement = document.getElementById("document-list");
  if (!listElement) return;
  const existing = listElement.querySelector(".error-item");
  if (existing) {
    existing.textContent = message;
    return;
  }
  const li = document.createElement("li");
  li.className = "error-item";
  li.textContent = message;
  listElement.prepend(li);
}

// ==========================================================================
// 2. 데이터 페칭 및 렌더링 (Data Fetching)
// ==========================================================================
// 징검다리 챕터 구성을 chapters.json으로 교체 (챕터 번호로 매칭, 문서 목록만 데이터가 정본)
async function applyChapterData() {
  try {
    const res = await fetch("chapters.json");
    if (!res.ok) return;
    const data = await res.json();
    if (!data || !Array.isArray(data.chapters)) return;
    data.chapters.forEach(chData => {
      if (!chData || !Array.isArray(chData.docs) || chData.docs.length === 0) return;
      const target = CHAPTERS.find(c => c.num === chData.num);
      if (target) target.docs = chData.docs.slice();
    });
  } catch (e) {
    // chapters.json이 없거나 깨졌으면 정적 기본값으로 계속 진행
  }
}

async function fetchWikiData() {
  try {
    // 3단계: 메타데이터 인덱스만 먼저 받아 첫 화면을 가볍게 띄운다
    let response = await fetch("wiki-index.json");
    if (!response.ok) {
      // 구 배포 호환: 인덱스가 없으면 전체 데이터로 폴백
      response = await fetch("wiki-data.json");
      if (!response.ok) throw new Error("데이터 파일을 불러올 수 없습니다.");
      fullDataLoaded = true;
    }
    wikiData = await response.json();
    // 징검다리 챕터 구성은 chapters.json(빌드 시 campaign-map에서 생성)이 정본 — 실패하면 정적 기본값 유지
    await applyChapterData();
  } catch (error) {
    console.error("데이터 로드 실패:", error);
    const listElement = document.getElementById("document-list");
    if (listElement) {
      listElement.innerHTML = `<li class="error-item">데이터 로드 실패: ${error.message}</li>`;
    }
    return;
  }

  try {
    // UI 다국어 번역 즉시 동기화
    updateUILanguage();
    
    // UI 필터링 렌더링
    filterWiki();
    renderLibraryIndex();
    renderHome();
    renderHomePlaceholder();
    // 그래프는 탭을 처음 열 때 지연 초기화한다 (3단계)
    
    // 해시 라우팅 처리
    handleRouting();
    window.addEventListener("hashchange", handleRouting);
  } catch (error) {
    console.error("위키 렌더링 실패:", error);
    showNonBlockingError(`렌더링 오류: ${error.message}`);
  }
}

// 3단계: 문서 본문 지연 로드 (wiki-docs/<lang>/<id>.json)
async function ensureDocBody(doc) {
  if (!doc || doc.body !== undefined) return doc;
  if (doc._bodyPromise) return doc._bodyPromise;
  doc._bodyPromise = (async () => {
    try {
      const r = await fetch(`wiki-docs/${doc.lang}/${doc.id}.json`);
      if (!r.ok) throw new Error(`본문 로드 실패: ${r.status}`);
      const data = await r.json();
      doc.easyRead = data.easyRead || "";
      doc.body = data.body || "";
    } catch (e) {
      // 분리 파일이 없으면 전체 데이터 병합으로 폴백
      await ensureSearchCorpus();
      if (doc.body === undefined) {
        doc.easyRead = doc.easyRead || "";
        doc.body = "";
      }
    }
    return doc;
  })();
  return doc._bodyPromise;
}

// 3단계: 검색용 전체 본문 코퍼스 지연 로드 (최초 검색 시 1회)
function ensureSearchCorpus() {
  if (fullDataLoaded) return Promise.resolve();
  if (searchCorpusPromise) return searchCorpusPromise;
  searchCorpusPromise = (async () => {
    try {
      const r = await fetch("wiki-data.json");
      if (!r.ok) return;
      const full = await r.json();
      const byKey = new Map(full.map(d => [`${d.lang}/${d.id}`, d]));
      wikiData.forEach(doc => {
        const f = byKey.get(`${doc.lang}/${doc.id}`);
        if (f) {
          doc.easyRead = f.easyRead || "";
          doc.body = f.body || "";
        }
      });
      fullDataLoaded = true;
      // 검색 중이었다면 본문 매칭까지 반영해 다시 필터링
      if (currentQuery) filterWiki();
    } catch (e) {
      searchCorpusPromise = null;
    }
  })();
  return searchCorpusPromise;
}

// 0-2: 문서 미선택 시 빈 읽기 패널에 최근 문서 목록을 채운다
function renderHomePlaceholder() {
  const t = i18n[currentLanguage];
  const titleElement = document.getElementById("placeholder-recent-title");
  if (titleElement) titleElement.textContent = t.recentTitle;
  const startLink = document.getElementById("placeholder-start-link");
  if (startLink) startLink.textContent = t.startHere;
  const listElement = document.getElementById("placeholder-recent-list");
  if (!listElement) return;
  // 메타 문서(캠페인 맵·인덱스·로그 등)는 매일 갱신돼 목록을 차지하므로 제외
  const recent = wikiData
    .filter(d => d.lang === currentLanguage && d.category !== "meta")
    .sort((a, b) => (b.updated || b.created || "").localeCompare(a.updated || a.created || ""))
    .slice(0, 5);
  listElement.innerHTML = recent.map(doc => `
    <li>
      <a href="#${doc.id}">
        <span class="ph-recent-title">${doc.title}</span>
        <span class="ph-recent-date">${doc.updated || doc.created || ""}</span>
      </a>
    </li>`).join("");
}

// 왼쪽 문서 사이드바 리스트 렌더링
function renderDocumentList(data) {
  const listElement = document.getElementById("document-list");
  if (!listElement) return;
  listElement.innerHTML = "";
  const t = i18n[currentLanguage];
  
  if (data.length === 0) {
    listElement.innerHTML = `<li class="no-results">${t.noResults}</li>`;
    return;
  }

  data.forEach(doc => {
    const li = document.createElement("li");
    li.className = `doc-item ${currentDoc && currentDoc.id === doc.id ? 'active' : ''}`;
    li.setAttribute("data-id", doc.id);
    li.setAttribute("data-category", doc.category);
    // 포커스 순서 점검 (2026-11-24): 목록 항목이 클릭 전용 <li>라 키보드로는 문서를
    // 열 수 없었다. 징검다리 돌·신간 카드와 같은 패턴으로 키보드 접근을 추가한다.
    li.setAttribute("role", "button");
    li.setAttribute("tabindex", "0");
    
    // 3단계: 본문/요약 매칭 시 스니펫 + 하이라이트
    let snippetHTML = "";
    if (currentQuery && doc.body !== undefined) {
      snippetHTML = buildSnippet(doc, currentQuery);
    }

    li.innerHTML = `
      <div class="doc-item-title">${doc.title}</div>
      <div class="doc-item-meta">
        <span class="doc-item-category">${doc.category}</span>
        <span>${doc.updated || doc.created}</span>
      </div>
      ${snippetHTML}
    `;
    
    li.addEventListener("click", () => {
      window.location.hash = doc.id;
    });
    li.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        window.location.hash = doc.id;
      }
    });
    listElement.appendChild(li);
  });
}

// Library Index 탭 렌더링
function renderLibraryIndex() {
  const grid = document.getElementById("library-grid");
  if (!grid) return;
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
    const pages = wikiData.filter(d => d.lang === currentLanguage && (d.category === key || (key === 'meta' && d.category === 'wiki')));
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
      // 포커스 순서 점검 (2026-11-24): 사이드바 목록과 같은 이유로 키보드 접근 추가.
      item.setAttribute("role", "button");
      item.setAttribute("tabindex", "0");
      const openDoc = () => {
        window.location.hash = item.getAttribute("data-id");
      };
      item.addEventListener("click", openDoc);
      item.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openDoc();
        }
      });
    });

    grid.appendChild(card);
  });
}

// ==========================================================================
// 2.5. 홈 탭 (도서관 로비) 렌더링 — 리벰프 1단계 (2026-11-17)
// 기존 캠페인 탭을 대체한다. 챕터 데이터(CHAPTERS)와 클리어 기록
// (localStorage "completed-chapters")은 그대로 재사용하고, 표시만
// "징검다리"로 바꾼다. 퀘스트·보상·클리어 버튼은 로비에 없다.
// ==========================================================================

// 챕터 문서 ID를 실제 문서 객체로 매칭 (구 renderCampaignMap의 매칭 규칙 재사용: 현재 언어 우선, 없으면 국문 폴백)
function findChapterDoc(docId) {
  let doc = wikiData.find(d => (d.id === docId || d.filename === docId.split('/').pop()) && d.lang === currentLanguage);
  if (!doc) {
    doc = wikiData.find(d => (d.id === docId || d.filename === docId.split('/').pop()) && d.lang === 'ko');
  }
  return doc || null;
}

// ==========================================================================
// 2.6. 읽음 기록 + 다음 돌 — 리벰프 2단계 (2026-11-18)
// 예전 "completed-chapters"는 손으로 누르는 클리어 버튼이 사라지면서 더 이상
// 아무도 안 쓰는 멈춘 기록이다. 이제 문서를 실제로 열면 "read-docs"에 남기고,
// 돌의 완료·진행은 그 기록으로 가린다. 예전 기록은 있는 그대로 인정한다
// (이미 클리어한 챕터는 완료로 계속 보여준다).
// ==========================================================================

// 읽은 문서 ID 목록 읽기 (없거나 깨졌으면 빈 목록)
function getReadDocs() {
  try {
    const raw = JSON.parse(localStorage.getItem("read-docs") || "[]");
    return Array.isArray(raw) ? raw.filter(id => typeof id === "string") : [];
  } catch (e) {
    return [];
  }
}

// 문서를 열면 읽은 기록에 남기기 (중복 없이, 최신 순으로 앞에)
function markDocAsRead(docId) {
  if (!docId) return;
  const read = getReadDocs().filter(id => id !== docId);
  read.unshift(docId);
  try {
    localStorage.setItem("read-docs", JSON.stringify(read.slice(0, 2000)));
  } catch (e) {
    // 저장 공간이 꽉 찼으면 오래된 기록부터 덜어내고 다시 시도
    try { localStorage.setItem("read-docs", JSON.stringify(read.slice(0, 500))); } catch (e2) {}
  }
}

// 문서가 속한 챕터와 그 안에서의 위치 찾기 (없으면 null)
function findChapterOfDoc(doc) {
  if (!doc) return null;
  for (const ch of CHAPTERS) {
    const index = ch.docs.findIndex(docId => doc.id === docId || doc.filename === docId.split('/').pop());
    if (index !== -1) return { chapter: ch, index };
  }
  return null;
}

// 챕터 안에서 실제로 읽은 이야기 수
function countChapterRead(ch) {
  const read = getReadDocs();
  return ch.docs.filter(docId => {
    const d = findChapterDoc(docId);
    return d && read.includes(d.id);
  }).length;
}

// 챕터 완료: 핵심 이야기를 다 읽었거나, 예전 클리어 기록이 있는 경우
function isChapterDone(ch) {
  try {
    const legacy = JSON.parse(localStorage.getItem("completed-chapters") || "[]");
    if (Array.isArray(legacy) && legacy.includes(ch.num)) return true;
  } catch (e) {}
  return ch.docs.length > 0 && countChapterRead(ch) >= ch.docs.length;
}

// 다음 돌 찾기: 같은 구간 다음 이야기 → 다음 구간 첫 이야기 → 전부 다 읽음
function getNextStone(doc) {
  const found = findChapterOfDoc(doc);
  if (!found) return null;
  const { chapter, index } = found;
  for (let i = index + 1; i < chapter.docs.length; i++) {
    const nextDoc = findChapterDoc(chapter.docs[i]);
    if (nextDoc) return { kind: "next", chapter, index: i, target: nextDoc };
  }
  for (let n = chapter.num + 1; n < CHAPTERS.length; n++) {
    const nextChapter = CHAPTERS[n];
    for (let i = 0; i < nextChapter.docs.length; i++) {
      const firstDoc = findChapterDoc(nextChapter.docs[i]);
      if (firstDoc) return { kind: "chapter", chapter: nextChapter, index: i, target: firstDoc };
    }
  }
  return { kind: "done", chapter, index: -1, target: null };
}

// 최근 문서 선별 (renderHomePlaceholder와 동일 규칙: 현재 언어, 메타 제외, 수정일 내림차순)
function pickRecentDocs(count) {
  return wikiData
    .filter(d => d.lang === currentLanguage && d.category !== "meta")
    .sort((a, b) => (b.updated || b.created || "").localeCompare(a.updated || a.created || ""))
    .slice(0, count);
}

function renderHome() {
  renderHomeHint();
  renderHomeQuestion();
  renderSteppingStones();
  renderHomeRecent();
  renderHomeShelves();
}

// 히어로 아래 안내줄: 현재 언어 문서 수
function renderHomeHint() {
  const hint = document.getElementById("home-hint");
  if (!hint) return;
  const t = i18n[currentLanguage];
  const count = wikiData.filter(d => d.lang === currentLanguage).length;
  hint.textContent = t.homeHint(count);
}

// 오늘의 질문 카드: ChatGPT Wallet 문서가 있으면 그 문서로, 없으면 가장 최근 문서로
function renderHomeQuestion() {
  const card = document.getElementById("home-question-card");
  if (!card) return;
  const t = i18n[currentLanguage];

  let doc = wikiData.find(d => d.id === "concepts/openai-chatgpt-wallet" && d.lang === currentLanguage)
    || wikiData.find(d => d.id === "concepts/openai-chatgpt-wallet");
  const isWallet = !!doc;
  if (!doc) {
    doc = pickRecentDocs(1)[0] || null;
  }
  if (!doc) {
    card.classList.add("hidden");
    return;
  }
  card.classList.remove("hidden");
  card.setAttribute("data-id", doc.id);

  const qEl = document.getElementById("home-question-q");
  if (qEl) qEl.textContent = isWallet ? t.questionWallet : t.questionFallback;
  const aEl = document.getElementById("home-question-a");
  if (aEl) aEl.innerHTML = `${escapeHTML(t.questionLinkPrefix)} <b>${escapeHTML(doc.title)}</b>`;
}

// 징검다리: CHAPTERS를 쉬운 말 이름(CHAPTER_STONES)으로 표시. 돌 클릭 시 그 챕터의 첫 문서를 연다.
// 완료·진행 표시는 실제 읽음 기록("read-docs") 기준이다. 예전 클리어 기록이 있는
// 챕터는 완료로 계속 인정한다. "지금 여기"는 아직 다 읽지 않은 첫 챕터에 붙인다.
function renderSteppingStones() {
  const container = document.getElementById("home-stones");
  if (!container) return;
  container.innerHTML = "";
  const t = i18n[currentLanguage];

  // "지금 여기"는 아직 다 읽지 않은 첫 구간. 완료 여부는 실제 읽음 기록 기준.
  const nowNum = (CHAPTERS.find(ch => !isChapterDone(ch)) || {}).num;

  CHAPTERS.forEach((ch, idx) => {
    const stone = CHAPTER_STONES[ch.num] || { name: ch.title, desc: ch.desc, icon: "🪨" };
    const isDone = isChapterDone(ch);
    const isNow = ch.num === nowNum;
    const name = stone.name[currentLanguage] || stone.name.ko;
    const desc = stone.desc[currentLanguage] || stone.desc.ko;
    const icon = isDone ? "✓" : stone.icon;
    const nowBadge = isNow ? `<span class="now-badge">${t.nowBadge}</span>` : "";
    const readCount = countChapterRead(ch);

    const infoHTML = `
      <div class="stone-info ${idx % 2 === 0 ? "right" : ""}">
        <div class="t">${escapeHTML(name)}${nowBadge}</div>
        <div class="d">${escapeHTML(desc)} · ${t.readProgress(readCount, ch.docs.length)}</div>
      </div>`;
    const stoneHTML = `
      <div class="stone ${isDone ? "done" : ""} ${isNow ? "now" : ""}">
        <span class="n">${t.stoneLabel} ${ch.num + 1}</span>
        <span class="ic">${icon}</span>
      </div>`;

    const row = document.createElement("div");
    row.className = "stone-row";
    row.setAttribute("role", "button");
    row.setAttribute("tabindex", "0");
    row.innerHTML = idx % 2 === 0
      ? `${infoHTML}${stoneHTML}<div></div>`
      : `<div></div>${stoneHTML}${infoHTML}`;

    const openFirstDoc = () => {
      const firstDoc = ch.docs.length > 0 ? findChapterDoc(ch.docs[0]) : null;
      window.location.hash = firstDoc ? firstDoc.id : (ch.docs[0] || "");
    };
    row.addEventListener("click", openFirstDoc);
    row.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openFirstDoc();
      }
    });

    container.appendChild(row);
  });
}

// 신간 카드: 최근 문서 5개 (제목 + 카테고리 칩 + 날짜 + 태그)
function renderHomeRecent() {
  const list = document.getElementById("home-recent-list");
  if (!list) return;
  list.innerHTML = "";

  pickRecentDocs(5).forEach(doc => {
    const card = document.createElement("div");
    card.className = "home-card";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    const tags = (doc.tags || []).slice(0, 2).map(tag => `<span>#${escapeHTML(tag)}</span>`).join("");
    card.innerHTML = `
      <div class="t">${escapeHTML(doc.title)}</div>
      <div class="meta">
        <span class="home-chip" style="color: var(--${doc.category}-color)">${doc.category}</span>
        <span>${doc.updated || doc.created || ""}</span>
        ${tags}
      </div>`;
    const open = () => { window.location.hash = doc.id; };
    card.addEventListener("click", open);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
      }
    });
    list.appendChild(card);
  });
}

// 서가 안내: 카테고리별 문서 수. 클릭하면 사이드바 카테고리 칩 필터를 그대로 발동한다.
// 칩이 없는 meta 서가는 Library Index 탭으로 보낸다.
function renderHomeShelves() {
  const container = document.getElementById("home-shelves");
  if (!container) return;
  container.innerHTML = "";
  const t = i18n[currentLanguage];

  SHELF_CATEGORIES.forEach(({ key, color }) => {
    const count = wikiData.filter(d => d.lang === currentLanguage && (d.category === key || (key === "meta" && d.category === "wiki"))).length;
    const row = document.createElement("div");
    row.className = "home-shelf";
    row.setAttribute("role", "button");
    row.setAttribute("tabindex", "0");
    row.innerHTML = `
      <span class="dot" style="background: ${color}"></span>
      <span class="nm">${escapeHTML(t.shelfNames[key] || key)}</span>
      <span class="ds">${escapeHTML(t.shelfDescs[key] || "")}</span>
      <span class="ct">${count}<small>${currentLanguage === "ko" ? "개" : ""}</small></span>`;
    const activate = () => {
      const chip = document.querySelector(`.filter-chip[data-category="${key}"]`);
      if (chip) {
        document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        filterWiki();
      } else {
        showTab("index");
      }
    };
    row.addEventListener("click", activate);
    row.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        activate();
      }
    });
    container.appendChild(row);
  });
}

// ==========================================================================
// 3. 마크다운 문서 렌더링 및 해시 라우팅 (Routing & Rendering)
// ==========================================================================
async function handleRouting() {
  const hash = window.location.hash.slice(1);
  
  if (!hash) {
    // 기본 화면: 홈(도서관 로비) 표시 — 읽음 기록이 바뀌었을 수 있으니 징검다리 진행도 다시 그린다
    showTab("home");
    renderHome();
    closeReadingPanel();
    return;
  }

  // 1. 현재 선택된 언어에서 매칭되는 문서 찾기
  let doc = wikiData.find(d => (d.id === hash || d.filename === hash || d.path === hash) && d.lang === currentLanguage);
  let isFallback = false;
  
  // 2. 만약 현재 언어가 영어인데 찾지 못했다면 국문 파일로 자동 폴백 매핑
  if (!doc && currentLanguage === 'en') {
    doc = wikiData.find(d => (d.id === hash || d.filename === hash || d.path === hash) && d.lang === 'ko');
    if (doc) isFallback = true;
  }
  
  if (doc) {
    await ensureDocBody(doc);
    // 본문을 받는 사이 해시가 바뀌었으면 최신 라우팅에 양보
    if (window.location.hash.slice(1) !== hash) return;
    loadDocument(doc, isFallback);
  } else {
    console.warn("문서를 찾을 수 없습니다:", hash);
    // 깨진 링크이거나 찾지 못한 경우
    const placeholder = document.getElementById("reading-placeholder");
    if (!placeholder) return;
    placeholder.innerHTML = `
      <div class="placeholder-icon"><i class="fa-solid fa-triangle-exclamation"></i></div>
      <h3>${currentLanguage === 'ko' ? '문서를 찾을 수 없음' : 'Document Not Found'}</h3>
      <p>"${hash}" ${currentLanguage === 'ko' ? '경로는 위키에 존재하지 않거나 잘못된 링킹입니다.' : 'path does not exist in the wiki or contains an invalid link.'}</p>
    `;
    openReadingPanel();
  }
}

function loadDocument(doc, isFallback = false) {
  currentDoc = doc;
  const t = i18n[currentLanguage];

  // 문서를 열면 읽은 기록에 남긴다 (리벰프 2단계: 실제 읽음 기반)
  markDocAsRead(doc.id);
  
  // 사이드바 활성 아이템 강조
  document.querySelectorAll(".doc-item").forEach(item => {
    if (item.getAttribute("data-id") === doc.id) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  // 우측 리더 뷰 채우기
  const placeholder = document.getElementById("reading-placeholder");
  const reader = document.getElementById("reading-content");
  if (placeholder) placeholder.classList.add("hidden");
  if (!reader) return;
  reader.classList.remove("hidden");

  // 메타 정보
  document.getElementById("doc-category").textContent = doc.category.toUpperCase();
  document.getElementById("reading-panel").setAttribute("data-category", doc.category);
  document.getElementById("doc-title").textContent = doc.title;
  document.getElementById("doc-confidence").querySelector("span").textContent = doc.confidence.toUpperCase();
  document.getElementById("doc-status").querySelector("span").textContent = doc.status.toUpperCase();
  document.getElementById("doc-created").textContent = doc.created;
  document.getElementById("doc-updated").textContent = doc.updated || doc.created;

  // 태그 렌더링
  const tagsContainer = document.getElementById("doc-tags");
  if (tagsContainer) tagsContainer.innerHTML = (doc.tags || []).map(t => `<span class="doc-tag">#${t}</span>`).join("");

  // 쉽게 읽기 렌더링
  const easyReadPanel = document.getElementById("easy-read-panel");
  if (easyReadPanel && doc.easyRead) {
    easyReadPanel.classList.remove("hidden");
    const easyReadLabel = easyReadPanel.querySelector(".section-lbl");
    if (easyReadLabel) easyReadLabel.innerHTML = `<i class="fa-solid fa-book-open"></i> ${currentLanguage === 'ko' ? '쉽게 읽기 요약' : 'Easy Read Summary'}`;
    const easyReadBody = document.getElementById("easy-read-body");
    if (easyReadBody) easyReadBody.innerHTML = resolveWikilinks(marked.parse(doc.easyRead));
  } else if (easyReadPanel) {
    easyReadPanel.classList.add("hidden");
  }

  // 본문 마크다운 렌더링
  const bodyViewer = document.getElementById("markdown-viewer");
  if (!bodyViewer) return;
  let bodyHTML = marked.parse(doc.body || "");
  
  // 스마트 폴백 공지 인젝션
  if (isFallback) {
    bodyViewer.innerHTML = `
      <div class="fallback-banner">
        <i class="fa-solid fa-circle-info"></i>
        <div>
          <strong>English translation in progress.</strong> Showing Korean version.
        </div>
      </div>
      ${resolveWikilinks(bodyHTML)}
    `;
  } else {
    bodyViewer.innerHTML = resolveWikilinks(bodyHTML);
  }

  // 연관 지식 링킹 버튼 생성
  const relContainer = document.getElementById("doc-related-links");
  const relLabel = relContainer && relContainer.parentElement ? relContainer.parentElement.querySelector(".section-lbl") : null;
  if (relLabel) relLabel.textContent = t.relatedDocs;
  
  const allRelated = [...new Set([...doc.related, ...doc.extractedRelated])];
  
  // 자기 자신 링크 제외
  const filteredRelated = allRelated.filter(r => r !== doc.id && r !== doc.filename);

  if (relContainer && relContainer.parentElement && filteredRelated.length > 0) {
    relContainer.parentElement.classList.remove("hidden");
    relContainer.innerHTML = filteredRelated.map(linkPath => {
      // 카테고리 추출 및 타이틀 찾기
      const cleanPath = linkPath.replace(/^\[\[|\]\]$/g, '');
      
      // 연관 링크도 현재 언어에 맞게 찾고 폴백
      let relatedDoc = wikiData.find(d => (d.id === cleanPath || d.filename === cleanPath || d.id.endsWith(cleanPath)) && d.lang === currentLanguage);
      if (!relatedDoc) {
        relatedDoc = wikiData.find(d => (d.id === cleanPath || d.filename === cleanPath || d.id.endsWith(cleanPath)) && d.lang === 'ko');
      }
      
      const title = relatedDoc ? relatedDoc.title : cleanPath.split('/').pop();
      return `<a class="related-link-btn" data-id="${relatedDoc ? relatedDoc.id : cleanPath}">${title}</a>`;
    }).join("");

    relContainer.querySelectorAll(".related-link-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        window.location.hash = btn.getAttribute("data-id");
      });
    });
  } else if (relContainer && relContainer.parentElement) {
    relContainer.parentElement.classList.add("hidden");
  }

  // 원천 소스 리스트
  const sourcesContainer = document.getElementById("doc-sources-list");
  const sourcesLabel = sourcesContainer && sourcesContainer.parentElement ? sourcesContainer.parentElement.querySelector(".section-lbl") : null;
  if (sourcesLabel) sourcesLabel.textContent = t.originalSources;
  
  if (sourcesContainer && sourcesContainer.parentElement && doc.sources && doc.sources.length > 0) {
    sourcesContainer.parentElement.classList.remove("hidden");
    sourcesContainer.innerHTML = doc.sources.map(s => `<li>${s}</li>`).join("");
  } else if (sourcesContainer && sourcesContainer.parentElement) {
    sourcesContainer.parentElement.classList.add("hidden");
  }

  // 다음 돌 카드 (리벰프 2단계)
  renderNextStone(doc);

  // 코드 하이라이팅 적용
  if (typeof Prism !== "undefined") {
    Prism.highlightAllUnder(bodyViewer);
  }

  // 스크롤 탑
  const readingPanelForScroll = document.getElementById("reading-panel");
  if (readingPanelForScroll) readingPanelForScroll.scrollTop = 0;
  
  openReadingPanel();

  // 모바일/세로 배치 레이아웃(992px 이하)에서 문서 클릭 시 본문 뷰어로 화면 스크롤을 즉시 부드럽게 내려줌
  setTimeout(() => {
    const readingPanel = document.getElementById("reading-panel");
    if (window.innerWidth <= 992 && readingPanel) {
      const offsetTop = readingPanel.offsetTop || 0;
      window.scrollTo({ top: offsetTop - 12, behavior: "smooth" });
      readingPanel.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 80);
}

// 열람실 하단 "다음 돌" 카드 — 리벰프 2단계 (2026-11-18)
// 같은 구간 다음 이야기 → 다음 구간 첫 이야기 → 전부 다 읽음 순으로 안내한다.
// 챕터에 속하지 않은 문서(저널 등)에서는 카드를 숨긴다.
function renderNextStone(doc) {
  const card = document.getElementById("doc-next-stone");
  if (!card) return;
  const t = i18n[currentLanguage];
  const labelEl = document.getElementById("doc-next-stone-label");
  const titleEl = document.getElementById("doc-next-stone-title");
  const subEl = document.getElementById("doc-next-stone-sub");

  const next = getNextStone(doc);
  if (!next) {
    card.classList.add("hidden");
    return;
  }

  let label = "";
  let title = "";
  let sub = "";
  let targetHash = "";

  if (next.kind === "next") {
    const stone = CHAPTER_STONES[next.chapter.num] || {};
    const stoneName = (stone.name && (stone.name[currentLanguage] || stone.name.ko)) || "";
    label = t.nextStone;
    title = next.target.title;
    sub = `${stoneName} · ${t.nextStoneOf(next.index + 1, next.chapter.docs.length)}`;
    targetHash = next.target.id;
  } else if (next.kind === "chapter") {
    const stone = CHAPTER_STONES[next.chapter.num] || {};
    const stoneName = (stone.name && (stone.name[currentLanguage] || stone.name.ko)) || "";
    label = t.nextChapter;
    title = next.target.title;
    sub = t.nextChapterSub(stoneName);
    targetHash = next.target.id;
  } else {
    label = t.nextStoneAllDone;
    title = t.nextStoneBackHome;
    sub = "";
    targetHash = "";
  }

  if (labelEl) labelEl.textContent = label;
  if (titleEl) titleEl.textContent = title;
  if (subEl) subEl.textContent = sub;
  card.classList.remove("hidden");
  card.onclick = () => { window.location.hash = targetHash; };
  card.onkeydown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      window.location.hash = targetHash;
    }
  };
}

// Obsidian 위키링크 파싱 및 해시 링크로 변환
function resolveWikilinks(htmlContent) {
  // [[category/page-name|보여질 이름]] 또는 [[category/page-name]] 형태 매칭
  return htmlContent.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (match, linkPath, linkText) => {
    let cleanPath = linkPath.trim().replace(/\\/g, '/');
    if (cleanPath.startsWith('ko/')) {
      cleanPath = cleanPath.slice(3);
    } else if (cleanPath.startsWith('en/')) {
      cleanPath = cleanPath.slice(3);
    }
    const text = linkText ? linkText.trim() : cleanPath.split('/').pop();
    
    // 파일명 또는 ID 매칭 확인
    const exists = wikiData.some(d => d.id === cleanPath || d.filename === cleanPath || d.id.endsWith(cleanPath));
    const classList = exists ? 'wikilink' : 'wikilink broken-link';
    
    // 위키 데이터에서 실제 매칭되는 ID 획득 (현재 언어 우선 검색, 없으면 일반 검색)
    let matchedDoc = wikiData.find(d => (d.id === cleanPath || d.filename === cleanPath || d.id.endsWith(cleanPath)) && d.lang === currentLanguage);
    if (!matchedDoc) {
      matchedDoc = wikiData.find(d => d.id === cleanPath || d.filename === cleanPath || d.id.endsWith(cleanPath));
    }
    const finalHash = matchedDoc ? matchedDoc.id : cleanPath;
    
    return `<a href="#${finalHash}" class="${classList}">${text}</a>`;
  });
}

function openReadingPanel() {
  // 모바일/태블릿 등에서 레이아웃 조정 시 활용 가능
}
function closeReadingPanel() {
  const placeholder = document.getElementById("reading-placeholder");
  const content = document.getElementById("reading-content");
  if (placeholder) placeholder.classList.remove("hidden");
  if (content) content.classList.add("hidden");
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
  const homeSearchInput = document.getElementById("home-search-input");

  // 두 검색창(사이드바/홈 히어로)의 값을 동기화한다. filterWiki는 사이드바 입력값을 읽으므로
  // 홈 입력은 사이드바 입력에 값을 복사한 뒤 같은 디바운스 경로를 태운다.
  const syncSearchInputs = (source, value) => {
    if (source !== searchInput && searchInput) searchInput.value = value;
    if (source !== homeSearchInput && homeSearchInput) homeSearchInput.value = value;
    if (clearBtn) {
      if (value.toLowerCase().trim()) {
        clearBtn.classList.remove("hidden");
      } else {
        clearBtn.classList.add("hidden");
      }
    }
    // 3단계: 디바운스 150ms
    clearTimeout(searchDebounceTimer);
    searchDebounceTimer = setTimeout(filterWiki, 150);
  };

  if (searchInput) searchInput.addEventListener("input", (e) => {
    syncSearchInputs(searchInput, e.target.value);
  });

  if (homeSearchInput) homeSearchInput.addEventListener("input", (e) => {
    syncSearchInputs(homeSearchInput, e.target.value);
  });

  if (clearBtn && searchInput) clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    if (homeSearchInput) homeSearchInput.value = "";
    clearBtn.classList.add("hidden");
    filterWiki();
    searchInput.focus();
  });

  // 오늘의 질문 카드 클릭 → 해당 문서 열기 (data-id는 renderHomeQuestion이 채운다)
  const questionCard = document.getElementById("home-question-card");
  if (questionCard) {
    const openQuestion = () => {
      const id = questionCard.getAttribute("data-id");
      if (id) window.location.hash = id;
    };
    questionCard.addEventListener("click", openQuestion);
    questionCard.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openQuestion();
      }
    });
  }

  // 지도실 카드 클릭 → 지식 관계망 탭 열기
  const mapRoom = document.getElementById("home-maproom");
  if (mapRoom) {
    const openMap = () => showTab("graph");
    mapRoom.addEventListener("click", openMap);
    mapRoom.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openMap();
      }
    });
  }

  // 카테고리 빠른 필터 칩
  document.querySelectorAll(".filter-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      filterWiki();
    });
  });

  // 모바일 전용 위로 가기 버튼 이벤트
  const mobileBackBtn = document.getElementById("mobile-back-btn");
  if (mobileBackBtn) {
    mobileBackBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
      document.body.scrollTo({ top: 0, behavior: "smooth" });
      const appContainer = document.getElementById("app-container");
      if (appContainer) {
        appContainer.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  }
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

  // 그래프 탭 전환 시 시뮬레이션 동작 트리거 (최초 진입 시 지연 초기화 — 3단계)
  if (tabId === "graph") {
    if (!graphSimulation) {
      initGraph();
    } else {
      graphSimulation.restart();
    }
  }
}

// 카테고리 칩 및 검색 통합 필터링
function filterWiki() {
  const searchInput = document.getElementById("search-input");
  const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
  currentQuery = query;
  const activeChip = document.querySelector(".filter-chip.active");
  const category = activeChip ? activeChip.getAttribute("data-category") : "all";

  // 0. 현재 언어 데이터셋 추출
  let filtered = wikiData.filter(doc => doc.lang === currentLanguage);
  
  // 로드 통계 카운터 갱신
  updateDocCount();

  // 1. 카테고리 필터링
  if (category !== "all") {
    filtered = filtered.filter(doc => doc.category === category || (category === 'meta' && doc.category === 'wiki'));
  }

  // 2. 검색어 필터링 + 관련도 랭킹 (제목 > 초성 > 태그 > 요약 > 본문)
  if (query) {
    // 본문 검색용 코퍼스를 아직 안 받았으면 백그라운드로 받아온다 (도착 시 자동 재필터)
    if (!fullDataLoaded) ensureSearchCorpus();
    const choseongQuery = isChoseongQuery(query);
    const scored = [];
    filtered.forEach(doc => {
      let rank = -1;
      if (doc.title.toLowerCase().includes(query)) rank = 0;
      else if (choseongQuery && (toChoseong(doc.title).includes(query) || doc.tags.some(t => toChoseong(t).includes(query)))) rank = 1;
      else if (doc.tags.some(t => t.toLowerCase().includes(query))) rank = 2;
      else if ((doc.easyRead || "").toLowerCase().includes(query)) rank = 3;
      else if ((doc.body || "").toLowerCase().includes(query)) rank = 4;
      if (rank >= 0) scored.push({ doc, rank });
    });
    scored.sort((a, b) => a.rank - b.rank || (b.doc.updated || b.doc.created || "").localeCompare(a.doc.updated || a.doc.created || ""));
    filtered = scored.map(s => s.doc);
  }

  renderDocumentList(filtered);
}

// 한글 초성 변환/판정 (3단계 검색)
const CHOSEONG = ["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"];
function toChoseong(str) {
  let out = "";
  for (const ch of str) {
    const code = ch.charCodeAt(0);
    if (code >= 0xAC00 && code <= 0xD7A3) {
      out += CHOSEONG[Math.floor((code - 0xAC00) / 588)];
    } else {
      out += ch;
    }
  }
  return out;
}
function isChoseongQuery(q) {
  const stripped = q.replace(/\s/g, "");
  return stripped.length > 0 && [...stripped].every(ch => CHOSEONG.includes(ch));
}
function escapeHTML(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function buildSnippet(doc, query) {
  const text = (doc.body || "") + "\n" + (doc.easyRead || "");
  const lower = text.toLowerCase();
  const idx = lower.indexOf(query);
  if (idx === -1) return "";
  const start = Math.max(0, idx - 40);
  const end = Math.min(text.length, idx + query.length + 60);
  let snippet = (start > 0 ? "…" : "") + text.slice(start, end).replace(/\s+/g, " ").trim() + (end < text.length ? "…" : "");
  snippet = escapeHTML(snippet).replace(new RegExp(escapeRegExp(escapeHTML(query)), "gi"), m => `<mark>${m}</mark>`);
  return `<div class="doc-item-snippet">${snippet}</div>`;
}

function updateDocCount() {
  const langDocs = wikiData.filter(d => d.lang === currentLanguage);
  const docCountLabel = document.getElementById("doc-count");
  if (docCountLabel) docCountLabel.textContent = langDocs.length;
  
  const quickStats = document.getElementById("quick-stats");
  if (quickStats) {
    if (currentLanguage === "ko") {
      quickStats.textContent = `${langDocs.length}개 문서 로드됨`;
    } else {
      quickStats.textContent = `${langDocs.length} ${i18n.en.quickStats}`;
    }
  }
}

// ==========================================================================
// 5. 인터랙티브 지식 관계망 그래프 (Custom Physics Canvas Graph)
// ==========================================================================
function initGraph() {
  const oldCanvas = document.getElementById("knowledge-graph-canvas");
  if (!oldCanvas) return;

  // 이전 루프 정지
  if (graphSimulation && graphSimulation.stop) {
    graphSimulation.stop();
  }

  // 이전 리스너들 한방에 제거하기 위해 캔버스 노드 복제 교체 (이벤트 누수 철저 방어)
  const canvas = oldCanvas.cloneNode(true);
  oldCanvas.parentNode.replaceChild(canvas, oldCanvas);

  const ctx = canvas.getContext("2d");
  const container = canvas.parentElement;

  let width = container.clientWidth || 800;
  let height = container.clientHeight || 600;
  let hasValidSize = container.clientWidth > 0 && container.clientHeight > 0;
  canvas.width = width;
  canvas.height = height;

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

  // 1. 현재 언어 데이터셋 추출
  const langDocs = wikiData.filter(d => d.lang === currentLanguage);

  // 노드 및 링크 데이터 매핑
  const nodes = langDocs.map((doc, i) => {
    // 해바라기(황금각) 균일 배치 — 랜덤 뭉침 없이 고르게 퍼진 상태에서 시작
    const angle = i * 2.399963;
    const r = Math.min(worldWidth, worldHeight) * 0.44 * Math.sqrt((i + 0.5) / langDocs.length);
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
  langDocs.forEach(doc => {
    const allRelated = [...new Set([...doc.related, ...doc.extractedRelated])];
    allRelated.forEach(rel => {
      const cleanRel = rel.replace(/^\[\[|\]\]$/g, '');
      const targetNode = nodes.find(n => n.id === cleanRel || n.id.endsWith(cleanRel));
      const sourceNode = nodes.find(n => n.id === doc.id);
      
      if (sourceNode && targetNode && sourceNode !== targetNode) {
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

  // 연결 수(degree) 계산 — 허브 노드는 크게, 잎 노드는 작게. 라벨 표시 기준으로도 사용
  nodes.forEach(n => { n.degree = 0; });
  links.forEach(l => { l.source.degree++; l.target.degree++; });
  nodes.forEach(n => { if (n.category !== 'meta') n.radius = 6 + Math.min(n.degree, 30) * 0.35; });
  const sortedDegrees = nodes.map(n => n.degree).sort((a, b) => b - a);
  const hubDegreeThreshold = Math.max(6, sortedDegrees[Math.floor(nodes.length * 0.08)] || 6);

  // 76개 노드가 흩어진 가상 월드 전체를 조망할 수 있는 최적의 초기 줌 비율 계산
  const initScale = Math.min(width / worldWidth, height / worldHeight) * 1.05 || 0.4;
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
  // 움직임 줄이기 설정: CSS만으로는 캔버스 물리 시뮬레이션을 못 멈추므로 그래프도 정적 배치로 보여준다
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function wakeSimulation() {
    if (prefersReducedMotion) { draw(); return; } // 움직임 줄이기: 재가열 없이 지금 배치 그대로 한 번만 그린다
    alpha = Math.max(alpha, 0.3); // 살짝만 깨운다 — 전체 재가열(폭발) 방지
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
    // 동기식 테마 감지하여 스타일 동기화 딜레이에 관계없이 선명하고 완벽한 테마별 카테고리 컬러 즉각 반환
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    if (isLight) {
      switch (cat) {
        case 'concepts': return '#7c3aed';    // 진한 보라
        case 'tools': return '#047857';       // 진한 에메랄드
        case 'patterns': return '#c2410c';    // 진한 오렌지
        case 'comparisons': return '#be185d'; // 진한 핑크
        case 'journal': return '#0e7490';     // 진한 사이안
        case 'meta':
        case 'wiki': return '#92600a';        // 진한 골드
        default: return '#4f46e5';            // 진한 인디고
      }
    } else {
      switch (cat) {
        case 'concepts': return '#a78bfa';    // 연한 보라 네온
        case 'tools': return '#34d399';       // 연한 에메랄드 네온
        case 'patterns': return '#fb923c';     // 연한 오렌지 네온
        case 'comparisons': return '#f472b6';  // 연한 핑크 네온
        case 'journal': return '#22d3ee';      // 연한 사이안 네온
        case 'meta':
        case 'wiki': return '#facc15';         // 연한 골드 네온
        default: return '#6366f1';            // 연한 인디고
      }
    }
  }

  // 간단한 물리 시뮬레이션 한 프레임
  function tick() {
    if (prefersReducedMotion) { // 움직임 줄이기: 물리 연산 없이 정적 배치 한 번만 그리고 멈춘다
      draw();
      activeAnimation = false;
      isLooping = false;
      return;
    }
    if (!activeAnimation) {
      isLooping = false;
      return;
    }
    isLooping = true;

    // d3-force 방식의 냉각 수렴 모델 (에너지를 7%씩 우아하고 부드럽게 감쇠)
    if (draggedNode) {
      alpha = Math.max(alpha, 0.6); // 드래그 중에도 과열 없이 주변만 정리
    } else {
      alpha *= 0.94; // 빠르게 식혀 짧고 단정하게 안착 (약 1.2초)
    }

    const decay = 0.85; // 속도 감쇠를 조금 높여 출렁임 없이 안착
    const gravity = 0.0012; // 가상 평원 은은한 중심 중력
    const coulombConstant = 10000; // 척력 강도를 적정히 낮추어 과격한 튕김 방지
    const hookeConstant = 0.016; // 스프링 장력을 부드럽게 완화하여 출렁임 소거
    const desiredLength = 120; // 목표 결합선 거리 (노드 378개 규모에 맞게 축소)

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
    const minDistance = 56; // 378개 노드가 월드 안에서 동시 만족 가능한 간격 
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

    // 완전히 멈춰 설 때까지 정지 조건을 더욱 은밀하게 조율 (더 길어진 유영 시간에 맞춰 컷 임계치 하향)
    if ((alpha < 0.010 || totalVelocity < 0.04) && !draggedNode) {
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
    ctx.lineWidth = 0.6; // 엣지 연결선을 50% 얇게 처리하여 섬세하고 미니멀한 실선 효과 구현
    links.forEach(link => {
      ctx.beginPath();
      ctx.moveTo(link.source.x, link.source.y);
      ctx.lineTo(link.target.x, link.target.y);
      
      const isHoveredLink = hoveredNode && (link.source === hoveredNode || link.target === hoveredNode);
      const isActiveLink = currentDoc && (link.source.id === currentDoc.id || link.target.id === currentDoc.id);

      // 호버 상태이거나 활성 노드에 연결된 엣지는 네온 하이라이트 부여
      if (isHoveredLink || isActiveLink) {
        // 호버 노드 색상을 우선 적용하고, 호버가 아니면 현재 활성 문서의 노드 색상을 적용
        const activeColor = (hoveredNode && (link.source === hoveredNode || link.target === hoveredNode))
          ? hoveredNode.color
          : (currentDoc && link.source.id === currentDoc.id ? link.source.color : link.target.color);

        ctx.strokeStyle = activeColor;
        ctx.lineWidth = 1.1; // 하이라이트 엣지 연결선 굵기도 50% 슬림화된 1.1px로 통일
        ctx.stroke();
        ctx.strokeStyle = isLightTheme ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.05)';
        ctx.lineWidth = 0.6; // 복귀 굵기
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
      
      const isActiveNode = currentDoc && node.id === currentDoc.id;

      // 마우스 오버 상태 또는 클릭 활성화 상태 네온 글로우
      if (node === hoveredNode) {
        ctx.shadowColor = node.color;
        ctx.shadowBlur = isLightTheme ? 8 : 16;
        ctx.arc(node.x, node.y, node.radius + 3, 0, Math.PI * 2);
      } else if (isActiveNode) {
        ctx.shadowColor = node.color;
        ctx.shadowBlur = isLightTheme ? 6 : 12; // 클릭 상태의 차분하고 고급스러운 은은한 네온 글로우
        ctx.arc(node.x, node.y, node.radius + 1.5, 0, Math.PI * 2);
      }
      ctx.fill();
      ctx.shadowBlur = 0; // 섀도우 복원
      
      // 노드 테두리
      ctx.strokeStyle = isLightTheme ? '#ffffff' : '#09090b';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // 노드 라벨: 전체 보기에서는 연결 많은 허브(상위 약 8%)만, 확대하면 전부, 호버·활성 노드는 항상 표시
      const isHubLabel = node.degree >= hubDegreeThreshold;
      const shouldShowLabel = node === hoveredNode || isActiveNode
        || transform.scale >= 1.15
        || (transform.scale >= 0.42 && isHubLabel);
      if (shouldShowLabel) {
        ctx.fillStyle = isLightTheme ? '#334155' : '#e4e4e7';
        ctx.font = (node === hoveredNode || isActiveNode) 
          ? `bold ${11 / transform.scale}px var(--font-title)`
          : `${9 / transform.scale}px var(--font-title)`;
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        const labelText = (node === hoveredNode || isActiveNode || node.title.length <= 26)
          ? node.title
          : node.title.slice(0, 26) + '…';
        ctx.fillText(labelText, node.x, node.y + node.radius + 5);
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

  // 해시 변경 시 시뮬레이션을 다시 깨워 활성화된 노드/엣지 하이라이트를 부드럽고 생동감 있게 렌더링
  window.addEventListener("hashchange", () => {
    wakeSimulation();
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
            const angle = i * 2.399963;
            const r = Math.min(worldWidth, worldHeight) * 0.44 * Math.sqrt((i + 0.5) / nodes.length);
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
      isLooping = false;
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    },
    draw: () => {
      // 실시간 바뀐 CSS 토큰 다시 적용 후 리드로우
      nodes.forEach(n => {
        n.color = getCategoryColor(n.category);
      });
      draw();
    },
    wake: () => {
      wakeSimulation();
    }
  };
}
