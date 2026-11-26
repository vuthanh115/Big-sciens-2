// Starters 2 — Final Term 1 Review App Logic

(function () {
  const STORAGE_KEY = "starters2_review_v1";

  const defaultProgress = {
    stars: 0,
    mastered: {}, // { "science:healthy": true }
    quizBest: {}, // { science: 100 }
    viHints: true,
    sound: true
  };

  let progress = loadProgress();
  let state = {
    mainTab: "review", // "review" | "bigscience"
    view: "home", // "home" | "subject" | "exam" | "bs-home" | "bs-unit"
    subjectId: null,
    topicId: "all",
    mode: "flashcards", // "flashcards" | "quiz" | "match" | "blanks"
    bsUnitId: null,
    bsMode: "lessons", // "lessons" | "flashcards" | "quiz"
    // Flashcard state
    fcIndex: 0,
    fcFlipped: false,
    // Quiz / Exam state
    quizItems: [],
    quizIndex: 0,
    quizScore: 0,
    quizAnswered: false,
    quizSelected: null,
    quizMistakes: [],
    quizFinished: false,
    // Match state
    matchPairs: [],
    matchLeft: [],
    matchRight: [],
    matchSelectedLeft: null,
    matchSelectedRight: null,
    matchSolved: [],
    matchWrongPair: null,
    // Blanks state
    blankItems: [],
    blankIndex: 0,
    blankScore: 0,
    blankAnswered: false,
    blankChosen: null,
    blankFinished: false
  };

  const appEl = document.getElementById("app");
  const totalStarsEl = document.getElementById("totalStars");
  const starCounterEl = document.getElementById("starCounter");
  const btnToggleVi = document.getElementById("btnToggleVi");
  const viLabelEl = document.getElementById("viLabel");
  const btnSound = document.getElementById("btnSound");
  const btnHome = document.getElementById("btnHome");
  const btnSyllabus = document.getElementById("btnSyllabus");
  const syllabusModal = document.getElementById("syllabusModal");
  const btnCloseSyllabus = document.getElementById("btnCloseSyllabus");
  const syllabusContent = document.getElementById("syllabusContent");

  // ---------- Persistence ----------
  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { ...defaultProgress, mastered: {}, quizBest: {} };
      const parsed = JSON.parse(raw);
      return {
        ...defaultProgress,
        ...parsed,
        mastered: parsed.mastered || {},
        quizBest: parsed.quizBest || {}
      };
    } catch {
      return { ...defaultProgress, mastered: {}, quizBest: {} };
    }
  }

  function saveProgress() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // ignore storage errors
    }
    updateTopbar();
  }

  function addStars(n) {
    progress.stars += n;
    saveProgress();
    starCounterEl.classList.remove("pop");
    void starCounterEl.offsetWidth;
    starCounterEl.classList.add("pop");
  }

  // ---------- Audio (Web Audio API + Web Speech API) ----------
  let audioCtx = null;
  function getAudioCtx() {
    if (!audioCtx) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (Ctx) audioCtx = new Ctx();
    }
    return audioCtx;
  }

  function playTone(type) {
    if (!progress.sound) return;
    try {
      const ctx = getAudioCtx();
      if (!ctx) return;
      if (ctx.state === "suspended") ctx.resume();
      const now = ctx.currentTime;

      const beep = (freq, start, dur, wave = "sine", vol = 0.14) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = wave;
        osc.frequency.setValueAtTime(freq, now + start);
        gain.gain.setValueAtTime(vol, now + start);
        gain.gain.exponentialRampToValueAtTime(0.001, now + start + dur);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + start);
        osc.stop(now + start + dur);
      };

      if (type === "ok") {
        beep(523.25, 0, 0.12, "triangle", 0.16);
        beep(659.25, 0.09, 0.18, "triangle", 0.16);
      } else if (type === "no") {
        beep(240, 0, 0.15, "sawtooth", 0.08);
        beep(190, 0.12, 0.2, "sawtooth", 0.08);
      } else if (type === "win") {
        beep(523.25, 0, 0.12, "triangle", 0.16);
        beep(659.25, 0.11, 0.12, "triangle", 0.16);
        beep(783.99, 0.22, 0.12, "triangle", 0.16);
        beep(1046.5, 0.34, 0.3, "triangle", 0.18);
      } else if (type === "flip") {
        beep(440, 0, 0.06, "sine", 0.07);
      }
    } catch {
      // ignore audio errors
    }
  }

  function speakText(text, lang = "en-US") {
    if (!("speechSynthesis" in window)) return;
    try {
      window.speechSynthesis.cancel();
      const clean = String(text).replace(/[^\p{L}\p{N}\s.,?!'-]/gu, " ").trim();
      if (!clean) return;
      const utter = new SpeechSynthesisUtterance(clean);
      utter.lang = lang;
      utter.rate = lang.startsWith("zh") ? 0.85 : 0.92;
      window.speechSynthesis.speak(utter);
    } catch {
      // ignore
    }
  }

  // ---------- Confetti ----------
  function launchConfetti() {
    const canvas = document.getElementById("confettiCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const colors = ["#ef4444", "#f59e0b", "#10b981", "#3b82f6", "#8b5cf6", "#ec4899"];
    const pieces = Array.from({ length: 85 }, () => ({
      x: Math.random() * canvas.width,
      y: -20 - Math.random() * 140,
      r: 5 + Math.random() * 6,
      c: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 4,
      vy: 3 + Math.random() * 4.5,
      rot: Math.random() * 360,
      vrot: (Math.random() - 0.5) * 10
    }));

    let frame = 0;
    function tick() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vrot;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rot * Math.PI) / 180);
        ctx.fillStyle = p.c;
        ctx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * 1.4);
        ctx.restore();
      });
      frame++;
      if (frame < 120) requestAnimationFrame(tick);
      else ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    requestAnimationFrame(tick);
  }

  // ---------- Utilities ----------
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function esc(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function getRank(stars) {
    if (stars >= 120) return { emoji: "🏆", title: "Starters 2 Champion!", sub: "Siêu sao ôn thi HK1!" };
    if (stars >= 60) return { emoji: "🚀", title: "Super Learner", sub: "Bé học rất giỏi luôn!" };
    if (stars >= 25) return { emoji: "🌟", title: "Rising Star", sub: "Tiếp tục phát huy nhé!" };
    return { emoji: "🌱", title: "Little Explorer", sub: "Cùng chinh phục các đảo kiến thức nào!" };
  }

  function getSubjectProgress(subId) {
    const sub = window.SUBJECTS[subId];
    if (!sub) return 0;
    const totalCards = sub.flashcards.length;
    const doneCards = sub.flashcards.filter((c) => progress.mastered[`${subId}:${c.term}`]).length;
    const cardPct = totalCards ? (doneCards / totalCards) * 60 : 0;
    const quizPct = ((progress.quizBest[subId] || 0) / 100) * 40;
    return Math.min(100, Math.round(cardPct + quizPct));
  }

  // ---------- Dynamic Grade 2 Maths Generator ----------
  function generateMathQuiz(count = 10) {
    const qs = [];
    const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const makeOpts = (ans) => {
      const set = new Set([ans]);
      const offsets = [-10, -2, -1, 1, 2, 10, 5, -5];
      while (set.size < 4) {
        const cand = ans + offsets[randInt(0, offsets.length - 1)];
        if (cand >= 0 && cand <= 120) set.add(cand);
      }
      const list = shuffle([...set]).map(String);
      return { options: list, answer: list.indexOf(String(ans)) };
    };

    for (let i = 0; i < count; i++) {
      const kind = i % 4;
      if (kind === 0) {
        const a = randInt(14, 58);
        const b = randInt(11, 39);
        const ans = a + b;
        const { options, answer } = makeOpts(ans);
        qs.push({
          topic: "addsub",
          emoji: "➕",
          q: `What is ${a} + ${b}?`,
          vi: `Tính phép cộng: ${a} + ${b}`,
          options,
          answer,
          explain: `${a} + ${b} = ${ans}!`
        });
      } else if (kind === 1) {
        const a = randInt(35, 95);
        const b = randInt(12, a - 5);
        const ans = a - b;
        const { options, answer } = makeOpts(ans);
        qs.push({
          topic: "addsub",
          emoji: "➖",
          q: `What is ${a} − ${b}?`,
          vi: `Tính phép trừ: ${a} − ${b}`,
          options,
          answer,
          explain: `${a} − ${b} = ${ans}!`
        });
      } else if (kind === 2) {
        const mults = [2, 5, 10];
        const m = mults[randInt(0, mults.length - 1)];
        const k = randInt(2, 9);
        const ans = k * m;
        const { options, answer } = makeOpts(ans);
        qs.push({
          topic: "mult",
          emoji: "✖️",
          q: `What is ${k} × ${m}?`,
          vi: `Tính phép nhân: ${k} × ${m}`,
          options,
          answer,
          explain: `${k} × ${m} = ${ans}!`
        });
      } else {
        const a = randInt(15, 92);
        let b = randInt(15, 92);
        if (b === a) b = a + 7;
        const sign = a > b ? ">" : "<";
        const options = ["<", ">", "=", "+"];
        qs.push({
          topic: "place",
          emoji: "🐊",
          q: `Choose the right sign:  ${a} ___ ${b}`,
          vi: `So sánh hai số ${a} và ${b}:`,
          options,
          answer: options.indexOf(sign),
          explain: `${a} ${sign} ${b}!`
        });
      }
    }
    return qs;
  }

  // ---------- Topbar & Modal ----------
  function updateTopbar() {
    totalStarsEl.textContent = progress.stars;
    viLabelEl.textContent = progress.viHints ? "Gợi ý Việt: BẬT" : "Gợi ý Việt: TẮT";
    btnToggleVi.classList.toggle("active", progress.viHints);
    btnSound.textContent = progress.sound ? "🔊" : "🔇";
    const tabRev = document.getElementById("tabReview");
    const tabBs = document.getElementById("tabBigScience");
    if (tabRev && tabBs) {
      tabRev.classList.toggle("active", state.mainTab === "review");
      tabBs.classList.toggle("active", state.mainTab === "bigscience");
    }
  }

  function renderSyllabusModal() {
    syllabusContent.innerHTML = window.SYLLABUS_REF.map(
      (s) => `
        <div class="syl-block">
          <h4>${esc(s.title)}</h4>
          <ul>${s.items.map((it) => `<li>${esc(it)}</li>`).join("")}</ul>
        </div>
      `
    ).join("");
  }

  // ---------- Navigation Helpers ----------
  function openHome() {
    state.mainTab = "review";
    state.view = "home";
    state.subjectId = null;
    render();
  }

  function openBigScienceHome() {
    state.mainTab = "bigscience";
    state.view = "bs-home";
    state.bsUnitId = null;
    render();
  }

  function getBsUnitKeywords(unit) {
    const list = [];
    unit.lessons.forEach((l) => {
      l.keywords.forEach((kw) => list.push({ ...kw, lesson: l.title }));
    });
    return list;
  }

  function getBsUnitQuizzes(unit) {
    if (unit.reuseSubjectQuiz && window.SUBJECTS && window.SUBJECTS.science) {
      return window.SUBJECTS.science.quizzes.filter((q) => unit.reuseSubjectQuiz.includes(q.topic));
    }
    return unit.quizzes || [];
  }

  function getBsUnitProgress(unit) {
    const kws = getBsUnitKeywords(unit);
    const done = kws.filter((k) => progress.mastered[`bs_${unit.id}:${k.w}`]).length;
    const cardPct = kws.length ? (done / kws.length) * 55 : 0;
    const quizPct = ((progress.quizBest[`bs_${unit.id}`] || 0) / 100) * 45;
    return Math.min(100, Math.round(cardPct + quizPct));
  }

  function initBsUnitMode(unit) {
    if (state.bsMode === "flashcards") {
      state.fcIndex = 0;
      state.fcFlipped = false;
    } else if (state.bsMode === "quiz") {
      state.quizItems = shuffle(getBsUnitQuizzes(unit));
      state.quizIndex = 0;
      state.quizScore = 0;
      state.quizAnswered = false;
      state.quizSelected = null;
      state.quizMistakes = [];
      state.quizFinished = false;
    }
  }

  function openBigScienceUnit(unitId, mode = "lessons") {
    const unit = (window.BIG_SCIENCE_UNITS || []).find((u) => u.id === unitId);
    if (!unit) return;
    state.mainTab = "bigscience";
    state.view = "bs-unit";
    state.bsUnitId = unitId;
    state.bsMode = mode;
    initBsUnitMode(unit);
    render();
  }

  function openSubject(subId, mode = "flashcards") {
    state.view = "subject";
    state.subjectId = subId;
    state.topicId = "all";
    state.mode = mode;
    initMode();
    render();
  }

  function openExam() {
    state.view = "exam";
    state.subjectId = "exam";
    const pool = [];
    Object.values(window.SUBJECTS).forEach((sub) => {
      const picks = shuffle(sub.quizzes).slice(0, 3).map((q) => ({
        ...q,
        subjectName: `${sub.emoji} ${sub.name}`
      }));
      pool.push(...picks);
    });
    state.quizItems = shuffle(pool);
    state.quizIndex = 0;
    state.quizScore = 0;
    state.quizAnswered = false;
    state.quizSelected = null;
    state.quizMistakes = [];
    state.quizFinished = false;
    render();
  }

  function getFiltered(list) {
    if (state.topicId === "all") return list;
    const filtered = list.filter((item) => item.topic === state.topicId);
    return filtered.length ? filtered : list;
  }

  function initMode(useGeneratedMath = false) {
    const sub = window.SUBJECTS[state.subjectId];
    if (!sub) return;

    if (state.mode === "flashcards") {
      state.fcIndex = 0;
      state.fcFlipped = false;
    } else if (state.mode === "quiz") {
      const items = useGeneratedMath ? generateMathQuiz(10) : shuffle(getFiltered(sub.quizzes));
      state.quizItems = items;
      state.quizIndex = 0;
      state.quizScore = 0;
      state.quizAnswered = false;
      state.quizSelected = null;
      state.quizMistakes = [];
      state.quizFinished = false;
    } else if (state.mode === "match") {
      const pool = shuffle(getFiltered(sub.matches)).slice(0, 6);
      state.matchPairs = pool;
      state.matchLeft = shuffle(pool.map((p, idx) => ({ id: idx, text: p.left })));
      state.matchRight = shuffle(pool.map((p, idx) => ({ id: idx, text: p.right })));
      state.matchSelectedLeft = null;
      state.matchSelectedRight = null;
      state.matchSolved = [];
      state.matchWrongPair = null;
    } else if (state.mode === "blanks") {
      state.blankItems = shuffle(getFiltered(sub.blanks));
      state.blankIndex = 0;
      state.blankScore = 0;
      state.blankAnswered = false;
      state.blankChosen = null;
      state.blankFinished = false;
    }
  }

  // ---------- Render Views ----------
  function render() {
    updateTopbar();
    if (state.view === "home") renderHome();
    else if (state.view === "subject") renderSubject();
    else if (state.view === "exam") renderExam();
    else if (state.view === "bs-home") renderBigScienceHome();
    else if (state.view === "bs-unit") renderBigScienceUnit();
  }

  function renderHome() {
    const rank = getRank(progress.stars);
    const subjectCards = Object.values(window.SUBJECTS)
      .map((sub) => {
        const pct = getSubjectProgress(sub.id);
        return `
          <button class="subject-card" data-theme="${sub.theme}" data-open-subject="${sub.id}">
            <div class="subject-top">
              <div class="subject-icon">${sub.emoji}</div>
              <div class="subject-meta">
                <h4>${esc(sub.name)} ${progress.viHints ? `<span style="font-weight:600;color:var(--text-soft);font-size:0.9rem">(${esc(sub.viName)})</span>` : ""}</h4>
                <div class="book-tag">${esc(sub.book)}</div>
              </div>
            </div>
            <p class="subject-desc">${esc(sub.desc)}</p>
            <div class="subject-tags">
              ${sub.tags.map((t) => `<span class="mini-tag">${esc(t)}</span>`).join("")}
            </div>
            <div class="progress-row">
              <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
              <span class="progress-pct">${pct}%</span>
            </div>
          </button>
        `;
      })
      .join("");

    const examBest = progress.quizBest.exam || 0;

    appEl.innerHTML = `
      <section class="hero-card">
        <div class="hero-left">
          <div class="hero-badge">✨ REVIEW FOR FINAL TERM 1 • STARTERS 2</div>
          <h2>Chào bé! Cùng ôn thi HK1 thật vui nào! 🎉</h2>
          <p>Chọn một hòn đảo môn học bên dưới để học Flashcards có phát âm 🔊, chơi Trắc nghiệm, Ghép cặp và Thi thử tổng hợp để thu thập thật nhiều ⭐ nhé!</p>
        </div>
        <div class="hero-rank">
          <span class="rank-emoji">${rank.emoji}</span>
          <div class="rank-title">${esc(rank.title)}</div>
          <div class="rank-sub">${esc(rank.sub)}</div>
        </div>
      </section>

      <div class="section-head">
        <h3>🗺️ Bản đồ ôn tập (5 môn + Thi thử)</h3>
      </div>

      <section class="subject-grid">
        ${subjectCards}

        <button class="subject-card" data-theme="exam" id="btnStartExam">
          <div class="subject-top">
            <div class="subject-icon">🏆</div>
            <div class="subject-meta">
              <h4>Final Mock Exam ${progress.viHints ? `<span style="font-weight:600;color:var(--text-soft);font-size:0.9rem">(Thi thử HK1)</span>` : ""}</h4>
              <div class="book-tag">15 câu tổng hợp cả 5 môn</div>
            </div>
          </div>
          <p class="subject-desc">Thử sức với 15 câu hỏi ngẫu nhiên từ Science, Grammar, Social Studies, Chinese và Maths. Có chấm điểm & ôn lại câu sai!</p>
          <div class="subject-tags">
            <span class="mini-tag">🔬 Science</span>
            <span class="mini-tag">📝 Grammar</span>
            <span class="mini-tag">🏙️ Social</span>
            <span class="mini-tag">🐼 Chinese</span>
            <span class="mini-tag">🔢 Maths</span>
          </div>
          <div class="progress-row">
            <div class="progress-track"><div class="progress-fill" style="width:${examBest}%"></div></div>
            <span class="progress-pct">Best ${examBest}%</span>
          </div>
        </button>
      </section>

      <div class="home-footer">
        <span>💡 <strong>Mẹo cho phụ huynh:</strong> Nhấn nút <strong>📋 Đề cương</strong> ở góc trên để xem nhanh số trang sách cần ôn trong <em>New Cornerstone 2</em>, <em>Macmillan Maths 2A</em>, <em>Big Science 2</em>...</span>
        <button class="pill-btn" id="btnResetProgress">🔄 Xóa tiến độ học</button>
      </div>
    `;

    appEl.querySelectorAll("[data-open-subject]").forEach((btn) => {
      btn.addEventListener("click", () => openSubject(btn.dataset.openSubject));
    });
    document.getElementById("btnStartExam").addEventListener("click", openExam);
    document.getElementById("btnResetProgress").addEventListener("click", () => {
      if (confirm("Bé/Phụ huynh có chắc muốn xóa toàn bộ số sao và tiến độ đã lưu không?")) {
        progress = { ...defaultProgress, mastered: {}, quizBest: {} };
        saveProgress();
        render();
      }
    });
  }

  function renderSubject() {
    const sub = window.SUBJECTS[state.subjectId];
    const modeTabs = [
      { id: "flashcards", label: "🃏 Flashcards" },
      { id: "quiz", label: "🎯 Quiz" },
      { id: "match", label: "🧩 Ghép cặp" },
      { id: "blanks", label: "✍️ Điền từ" }
    ];

    appEl.innerHTML = `
      <div class="back-bar">
        <button class="btn btn-ghost" id="btnBackHome">⬅️ Về bản đồ</button>
        ${sub.id === "maths" && state.mode === "quiz" ? `<button class="btn btn-warn" id="btnGenMath">🎲 Tạo 10 câu Toán mới</button>` : ""}
      </div>

      <section class="subject-banner ${sub.theme}">
        <div class="banner-info">
          <div class="banner-emoji">${sub.emoji}</div>
          <div>
            <h2>${esc(sub.name)} ${progress.viHints ? `— ${esc(sub.viName)}` : ""}</h2>
            <p>${esc(sub.book)}</p>
          </div>
        </div>
        <div class="star-badge" style="box-shadow:none">📊 ${getSubjectProgress(sub.id)}%</div>
      </section>

      <div class="topic-pills">
        ${sub.topics
          .map(
            (t) => `<button class="topic-pill ${state.topicId === t.id ? "active" : ""}" data-topic="${t.id}">${esc(t.label)}</button>`
          )
          .join("")}
      </div>

      <div class="mode-tabs">
        ${modeTabs
          .map(
            (m) => `<button class="mode-tab ${state.mode === m.id ? "active" : ""}" data-mode="${m.id}">${m.label}</button>`
          )
          .join("")}
      </div>

      <div class="panel" id="modePanel"></div>
    `;

    document.getElementById("btnBackHome").addEventListener("click", openHome);
    const genBtn = document.getElementById("btnGenMath");
    if (genBtn) {
      genBtn.addEventListener("click", () => {
        initMode(true);
        render();
      });
    }

    appEl.querySelectorAll("[data-topic]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.topicId = btn.dataset.topic;
        initMode();
        render();
      });
    });

    appEl.querySelectorAll("[data-mode]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.mode = btn.dataset.mode;
        initMode();
        render();
      });
    });

    const panel = document.getElementById("modePanel");
    if (state.mode === "flashcards") renderFlashcards(panel, sub);
    else if (state.mode === "quiz") renderQuiz(panel, sub.id, sub.speechLang);
    else if (state.mode === "match") renderMatch(panel, sub);
    else if (state.mode === "blanks") renderBlanks(panel, sub);
  }

  // ---------- 1. Flashcards ----------
  function renderFlashcards(panel, sub) {
    const cards = getFiltered(sub.flashcards);
    if (state.fcIndex >= cards.length) state.fcIndex = 0;
    const card = cards[state.fcIndex];
    const key = `${sub.id}:${card.term}`;
    const isMastered = !!progress.mastered[key];
    const isChinese = sub.id === "chinese";

    panel.innerHTML = `
      <div class="flashcard-stage">
        <div class="flashcard-wrap">
          <div class="flashcard ${state.fcFlipped ? "flipped" : ""}" id="flashcardEl">
            <div class="card-face card-front">
              <span class="fc-topic">${esc(sub.name)} • Card ${state.fcIndex + 1}/${cards.length}</span>
              <div class="fc-emoji">${card.emoji}</div>
              <div class="fc-word ${isChinese ? "hanzi" : ""}">${esc(card.term)}</div>
              ${card.pinyin ? `<div class="fc-pinyin">${esc(card.pinyin)}</div>` : ""}
              <button class="speak-btn" id="btnSpeakFront">🔊 Nghe phát âm</button>
              <div class="fc-tip">👆 Chạm vào thẻ để lật xem nghĩa & ví dụ</div>
            </div>
            <div class="card-face card-back">
              <span class="fc-topic">Nghĩa & Ví dụ</span>
              <div class="fc-meaning">${esc(card.vi)}</div>
              <div class="fc-example">${esc(card.example)}</div>
              <button class="speak-btn" id="btnSpeakBack">🔊 Đọc lại từ</button>
            </div>
          </div>
        </div>

        <div class="fc-controls">
          <button class="btn btn-ghost" id="btnPrevCard">⬅️ Trước</button>
          <span class="fc-counter">${state.fcIndex + 1} / ${cards.length}</span>
          <button class="btn btn-ghost" id="btnNextCard">Tiếp ➡️</button>
          <button class="btn ${isMastered ? "btn-success" : "btn-warn"}" id="btnMasterCard">
            ${isMastered ? "✅ Bé đã thuộc!" : "⭐ Đánh dấu đã thuộc"}
          </button>
        </div>
      </div>
    `;

    document.getElementById("flashcardEl").addEventListener("click", (e) => {
      if (e.target.closest("button")) return;
      state.fcFlipped = !state.fcFlipped;
      playTone("flip");
      renderFlashcards(panel, sub);
    });

    const doSpeak = (e) => {
      e.stopPropagation();
      speakText(card.term, sub.speechLang);
    };
    document.getElementById("btnSpeakFront").addEventListener("click", doSpeak);
    document.getElementById("btnSpeakBack").addEventListener("click", doSpeak);

    document.getElementById("btnPrevCard").addEventListener("click", () => {
      state.fcIndex = (state.fcIndex - 1 + cards.length) % cards.length;
      state.fcFlipped = false;
      renderFlashcards(panel, sub);
    });
    document.getElementById("btnNextCard").addEventListener("click", () => {
      state.fcIndex = (state.fcIndex + 1) % cards.length;
      state.fcFlipped = false;
      renderFlashcards(panel, sub);
    });
    document.getElementById("btnMasterCard").addEventListener("click", () => {
      if (!progress.mastered[key]) {
        progress.mastered[key] = true;
        addStars(2);
        playTone("ok");
      } else {
        delete progress.mastered[key];
        saveProgress();
      }
      render();
    });
  }

  // ---------- 2. Quiz & Exam ----------
  function renderQuiz(panel, scoreKey, speechLang = "en-US") {
    const items = state.quizItems;
    if (!items.length) {
      panel.innerHTML = `<p>Chưa có câu hỏi cho mục này.</p>`;
      return;
    }

    if (state.quizFinished) {
      const pct = Math.round((state.quizScore / items.length) * 100);
      const trophy = pct >= 90 ? "🏆" : pct >= 70 ? "🌟" : "💪";
      const msg =
        pct >= 90
          ? "Xuất sắc quá bé ơi!"
          : pct >= 70
          ? "Giỏi lắm! Bé sắp làm chủ bài thi rồi!"
          : "Cố gắng tốt lắm! Ôn lại các câu sai bên dưới nhé!";

      panel.innerHTML = `
        <div class="result-card">
          <div class="result-trophy">${trophy}</div>
          <h3>${msg}</h3>
          <div class="result-score">${state.quizScore} / ${items.length} (${pct}%)</div>
          <p style="color:var(--text-soft);margin-bottom:18px">Bé đã nhận được thêm ⭐ cho mỗi câu trả lời đúng!</p>
          <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
            <button class="btn btn-primary" id="btnRetryQuiz">🔄 Làm lại</button>
            ${scoreKey === "maths" ? `<button class="btn btn-warn" id="btnNewMath">🎲 Đề Toán mới</button>` : ""}
            <button class="btn btn-ghost" id="btnBackAfterQuiz">🗺️ Về bản đồ</button>
          </div>
          ${
            state.quizMistakes.length
              ? `
            <div class="mistake-list">
              <h4>📌 Ôn lại những câu bé chọn chưa đúng:</h4>
              ${state.quizMistakes
                .map(
                  (m) => `
                <div class="mistake-item">
                  <div><strong>${esc(m.q)}</strong></div>
                  <div style="color:#059669;font-weight:700">✅ Đáp án đúng: ${esc(m.correct)}</div>
                  <div style="color:var(--text-soft)">💡 ${esc(m.explain)}</div>
                </div>
              `
                )
                .join("")}
            </div>
          `
              : ""
          }
        </div>
      `;

      document.getElementById("btnRetryQuiz").addEventListener("click", () => {
        if (scoreKey === "exam") openExam();
        else if (String(scoreKey).startsWith("bs_")) {
          openBigScienceUnit(state.bsUnitId, "quiz");
        } else {
          initMode();
          render();
        }
      });
      const nm = document.getElementById("btnNewMath");
      if (nm) {
        nm.addEventListener("click", () => {
          initMode(true);
          render();
        });
      }
      document.getElementById("btnBackAfterQuiz").addEventListener("click", () => {
        if (String(scoreKey).startsWith("bs_")) openBigScienceHome();
        else openHome();
      });
      return;
    }

    const q = items[state.quizIndex];
    const pctBar = Math.round(((state.quizIndex + (state.quizAnswered ? 1 : 0)) / items.length) * 100);
    const letters = ["A", "B", "C", "D"];

    panel.innerHTML = `
      <div class="quiz-header">
        <strong>Câu ${state.quizIndex + 1} / ${items.length} ${q.subjectName ? `• ${esc(q.subjectName)}` : ""}</strong>
        <strong>Đúng: ${state.quizScore} ⭐</strong>
      </div>
      <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${pctBar}%"></div></div>

      <div class="quiz-question-box">
        <span class="quiz-emoji">${q.emoji || "❓"}</span>
        <div class="quiz-q-text">${esc(q.q)}</div>
        ${progress.viHints && q.vi ? `<div class="quiz-vi-hint">🇻🇳 ${esc(q.vi)}</div>` : ""}
      </div>

      <div class="options-grid">
        ${q.options
          .map((opt, idx) => {
            let cls = "";
            if (state.quizAnswered) {
              if (idx === q.answer) cls = "correct";
              else if (idx === state.quizSelected) cls = "wrong";
            }
            return `
              <button class="option-btn ${cls}" data-opt="${idx}" ${state.quizAnswered ? "disabled" : ""}>
                <span class="option-letter">${letters[idx]}</span>
                <span>${esc(opt)}</span>
              </button>
            `;
          })
          .join("")}
      </div>

      ${
        state.quizAnswered
          ? `
        <div class="feedback-banner ${state.quizSelected === q.answer ? "ok" : "no"}">
          <div class="feedback-text">
            <strong>${state.quizSelected === q.answer ? "🎉 Chính xác! +3 ⭐" : "😊 Gần đúng rồi! Xem giải thích nhé:"}</strong>
            <span>${esc(q.explain)}</span>
          </div>
          <button class="btn btn-primary" id="btnNextQ">
            ${state.quizIndex + 1 < items.length ? "Câu tiếp theo ➡️" : "Xem kết quả 🏆"}
          </button>
        </div>
      `
          : ""
      }
    `;

    panel.querySelectorAll("[data-opt]").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (state.quizAnswered) return;
        const chosen = Number(btn.dataset.opt);
        state.quizAnswered = true;
        state.quizSelected = chosen;
        if (chosen === q.answer) {
          state.quizScore++;
          addStars(3);
          playTone("ok");
        } else {
          playTone("no");
          state.quizMistakes.push({
            q: q.q,
            correct: q.options[q.answer],
            explain: q.explain
          });
        }
        renderQuiz(panel, scoreKey, speechLang);
      });
    });

    const nextBtn = document.getElementById("btnNextQ");
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        if (state.quizIndex + 1 < items.length) {
          state.quizIndex++;
          state.quizAnswered = false;
          state.quizSelected = null;
          renderQuiz(panel, scoreKey, speechLang);
        } else {
          state.quizFinished = true;
          const pct = Math.round((state.quizScore / items.length) * 100);
          if (pct > (progress.quizBest[scoreKey] || 0)) {
            progress.quizBest[scoreKey] = pct;
            saveProgress();
          }
          if (pct >= 70) {
            playTone("win");
            launchConfetti();
          }
          renderQuiz(panel, scoreKey, speechLang);
        }
      });
    }
  }

  function renderExam() {
    appEl.innerHTML = `
      <div class="back-bar">
        <button class="btn btn-ghost" id="btnBackHome">⬅️ Về bản đồ</button>
        <button class="btn btn-pink" id="btnNewExam">🎲 Đề thi mới</button>
      </div>
      <section class="subject-banner exam">
        <div class="banner-info">
          <div class="banner-emoji">🏆</div>
          <div>
            <h2>Final Mock Exam — Thi thử HK1</h2>
            <p>15 câu hỏi tổng hợp: Science • Grammar • Social Studies • Chinese • Maths</p>
          </div>
        </div>
      </section>
      <div class="panel" id="examPanel"></div>
    `;
    document.getElementById("btnBackHome").addEventListener("click", openHome);
    document.getElementById("btnNewExam").addEventListener("click", openExam);
    renderQuiz(document.getElementById("examPanel"), "exam");
  }

  // ---------- 3. Matching Game ----------
  function renderMatch(panel, sub) {
    const allDone = state.matchSolved.length === state.matchPairs.length && state.matchPairs.length > 0;

    if (allDone) {
      panel.innerHTML = `
        <div class="result-card">
          <div class="result-trophy">🧩🎉</div>
          <h3>Tuyệt vời! Bé đã ghép đúng tất cả các cặp!</h3>
          <p style="color:var(--text-soft);margin-bottom:18px">Bé nhận được thưởng +10 ⭐!</p>
          <button class="btn btn-success" id="btnNewMatch">🔄 Chơi vòng ghép cặp mới</button>
        </div>
      `;
      document.getElementById("btnNewMatch").addEventListener("click", () => {
        initMode();
        render();
      });
      return;
    }

    panel.innerHTML = `
      <div class="quiz-header">
        <strong>🧩 Chọn 1 thẻ bên trái và 1 thẻ tương ứng bên phải!</strong>
        <strong>Đã ghép: ${state.matchSolved.length} / ${state.matchPairs.length}</strong>
      </div>
      <div class="match-board">
        <div class="match-col">
          ${state.matchLeft
            .map((item) => {
              const solved = state.matchSolved.includes(item.id);
              const sel = state.matchSelectedLeft === item.id;
              const wrong = state.matchWrongPair && state.matchWrongPair[0] === item.id;
              return `<button class="match-card ${solved ? "matched" : ""} ${sel ? "selected" : ""} ${wrong ? "wrong-flash" : ""}" data-left="${item.id}" ${solved ? "disabled" : ""}>${esc(item.text)}</button>`;
            })
            .join("")}
        </div>
        <div class="match-col">
          ${state.matchRight
            .map((item) => {
              const solved = state.matchSolved.includes(item.id);
              const sel = state.matchSelectedRight === item.id;
              const wrong = state.matchWrongPair && state.matchWrongPair[1] === item.id;
              return `<button class="match-card ${solved ? "matched" : ""} ${sel ? "selected" : ""} ${wrong ? "wrong-flash" : ""}" data-right="${item.id}" ${solved ? "disabled" : ""}>${esc(item.text)}</button>`;
            })
            .join("")}
        </div>
      </div>
    `;

    const checkMatch = () => {
      if (state.matchSelectedLeft === null || state.matchSelectedRight === null) return;
      if (state.matchSelectedLeft === state.matchSelectedRight) {
        state.matchSolved.push(state.matchSelectedLeft);
        state.matchSelectedLeft = null;
        state.matchSelectedRight = null;
        playTone("ok");
        addStars(2);
        if (state.matchSolved.length === state.matchPairs.length) {
          addStars(10);
          playTone("win");
          launchConfetti();
        }
        renderMatch(panel, sub);
      } else {
        state.matchWrongPair = [state.matchSelectedLeft, state.matchSelectedRight];
        playTone("no");
        renderMatch(panel, sub);
        setTimeout(() => {
          state.matchSelectedLeft = null;
          state.matchSelectedRight = null;
          state.matchWrongPair = null;
          renderMatch(panel, sub);
        }, 420);
      }
    };

    panel.querySelectorAll("[data-left]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.matchSelectedLeft = Number(btn.dataset.left);
        checkMatch();
        if (state.matchSelectedRight === null) renderMatch(panel, sub);
      });
    });

    panel.querySelectorAll("[data-right]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.matchSelectedRight = Number(btn.dataset.right);
        checkMatch();
        if (state.matchSelectedLeft === null) renderMatch(panel, sub);
      });
    });
  }

  // ---------- 4. Fill-in-the-Blank ----------
  function renderBlanks(panel, sub) {
    const items = state.blankItems;
    if (!items.length) {
      panel.innerHTML = `<p>Chưa có bài điền từ cho mục này.</p>`;
      return;
    }

    if (state.blankFinished) {
      panel.innerHTML = `
        <div class="result-card">
          <div class="result-trophy">✍️🌟</div>
          <h3>Bé đã hoàn thành phần Điền từ!</h3>
          <div class="result-score">${state.blankScore} / ${items.length}</div>
          <button class="btn btn-primary" id="btnRetryBlanks">🔄 Làm lại</button>
        </div>
      `;
      document.getElementById("btnRetryBlanks").addEventListener("click", () => {
        initMode();
        render();
      });
      return;
    }

    const item = items[state.blankIndex];
    const parts = item.sentence.split("___");
    const isOk = state.blankAnswered && state.blankChosen === item.answer;
    const slotCls = state.blankAnswered ? (isOk ? "filled-ok" : "filled-no") : "";
    const slotText = state.blankAnswered ? state.blankChosen : "_____";
    const chips = state.blankAnswered ? item.chips : shuffle(item.chips);

    panel.innerHTML = `
      <div class="quiz-header">
        <strong>✍️ Câu ${state.blankIndex + 1} / ${items.length}</strong>
        <strong>Đúng: ${state.blankScore} ⭐</strong>
      </div>

      <div class="quiz-question-box">
        <div class="blank-sentence">
          ${esc(parts[0])}<span class="blank-slot ${slotCls}">${esc(slotText)}</span>${esc(parts[1] || "")}
        </div>
        ${progress.viHints && item.vi ? `<div class="quiz-vi-hint">🇻🇳 ${esc(item.vi)}</div>` : ""}
      </div>

      <div class="chips-wrap">
        ${chips
          .map(
            (chip) => `<button class="word-chip" data-chip="${esc(chip)}" ${state.blankAnswered ? "disabled" : ""}>${esc(chip)}</button>`
          )
          .join("")}
      </div>

      ${
        state.blankAnswered
          ? `
        <div class="feedback-banner ${isOk ? "ok" : "no"}">
          <div class="feedback-text">
            <strong>${isOk ? "🎉 Chính xác! +3 ⭐" : `😊 Đáp án đúng là: "${item.answer}"`}</strong>
            <span>${esc(item.sentence.replace("___", item.answer))}</span>
          </div>
          <button class="btn btn-primary" id="btnNextBlank">
            ${state.blankIndex + 1 < items.length ? "Câu tiếp theo ➡️" : "Hoàn thành 🏆"}
          </button>
        </div>
      `
          : ""
      }
    `;

    panel.querySelectorAll("[data-chip]").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (state.blankAnswered) return;
        state.blankAnswered = true;
        state.blankChosen = btn.dataset.chip;
        if (state.blankChosen === item.answer) {
          state.blankScore++;
          addStars(3);
          playTone("ok");
        } else {
          playTone("no");
        }
        renderBlanks(panel, sub);
      });
    });

    const nextBtn = document.getElementById("btnNextBlank");
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        if (state.blankIndex + 1 < items.length) {
          state.blankIndex++;
          state.blankAnswered = false;
          state.blankChosen = null;
          renderBlanks(panel, sub);
        } else {
          state.blankFinished = true;
          if (state.blankScore >= Math.ceil(items.length * 0.7)) {
            playTone("win");
            launchConfetti();
          }
          renderBlanks(panel, sub);
        }
      });
    }
  }

  // ---------- Big Science 2 Full Book Tab ----------
  function renderBigScienceHome() {
    const units = window.BIG_SCIENCE_UNITS || [];
    appEl.innerHTML = `
      <section class="bs-hero">
        <div class="hero-badge">📘 PEARSON BIG SCIENCE LEVEL 2 • FULL 9 UNITS</div>
        <h2>🔬 Học sách Big Science 2 cùng bé!</h2>
        <p>Trích xuất đầy đủ 9 Unit (26 bài học) từ sách <strong>Big_Science_level_2.pdf</strong>: tóm tắt kiến thức chuẩn sách giáo khoa, chạm từ khóa để nghe phát âm 🔊, Flashcards và Trắc nghiệm cho từng Unit!</p>
      </section>

      <div class="section-head">
        <h3>📚 Chọn Unit bé muốn học (Unit 1 – Unit 9)</h3>
      </div>

      <section class="bs-unit-grid">
        ${units
          .map((u) => {
            const pct = getBsUnitProgress(u);
            const qCount = getBsUnitQuizzes(u).length;
            return `
              <button class="bs-unit-card" data-bs-unit="${u.id}">
                <div class="bs-unit-top">
                  <span class="bs-unit-badge">Unit ${u.num} • ${esc(u.domain)}</span>
                  ${u.hk1 ? `<span class="hk1-pill">⭐ Thi HK1</span>` : ""}
                </div>
                <div class="bs-unit-head">
                  <div class="bs-unit-emoji" style="background:${u.color}">${u.emoji}</div>
                  <div>
                    <h4>${esc(u.title)}</h4>
                    <div class="bs-sub">${progress.viHints ? `${esc(u.viTitle)} • ` : ""}${esc(u.pages)}</div>
                  </div>
                </div>
                <div class="bs-bq">❓ ${esc(u.bigQuestion)}</div>
                <div class="subject-tags">
                  <span class="mini-tag">📖 ${u.lessons.length} Lessons</span>
                  <span class="mini-tag">🔑 ${getBsUnitKeywords(u).length} Key Words</span>
                  <span class="mini-tag">🎯 ${qCount} Quiz</span>
                </div>
                <div class="progress-row">
                  <div class="progress-track"><div class="progress-fill" style="width:${pct}%;background:${u.color}"></div></div>
                  <span class="progress-pct">${pct}%</span>
                </div>
              </button>
            `;
          })
          .join("")}
      </section>
    `;

    appEl.querySelectorAll("[data-bs-unit]").forEach((btn) => {
      btn.addEventListener("click", () => openBigScienceUnit(btn.dataset.bsUnit));
    });
  }

  function renderBigScienceUnit() {
    const unit = (window.BIG_SCIENCE_UNITS || []).find((u) => u.id === state.bsUnitId);
    if (!unit) return openBigScienceHome();

    const modes = [
      { id: "lessons", label: "📖 Bài học & Từ khóa" },
      { id: "flashcards", label: "🃏 Flashcards" },
      { id: "quiz", label: `🎯 Quiz Unit ${unit.num} (${getBsUnitQuizzes(unit).length} câu)` }
    ];

    appEl.innerHTML = `
      <div class="back-bar">
        <button class="btn btn-ghost" id="btnBsBack">⬅️ Danh sách 9 Unit</button>
        <button class="speak-btn" id="btnSpeakBQ">🔊 Nghe Big Question</button>
      </div>

      <section class="subject-banner" style="background:linear-gradient(135deg, ${unit.color}, #1e293b)">
        <div class="banner-info">
          <div class="banner-emoji">${unit.emoji}</div>
          <div>
            <h2>Unit ${unit.num}: ${esc(unit.title)}</h2>
            <p><strong>Big Question:</strong> ${esc(unit.bigQuestion)} ${progress.viHints ? `(${esc(unit.viBigQuestion)})` : ""}</p>
          </div>
        </div>
        <div class="star-badge" style="box-shadow:none">📊 ${getBsUnitProgress(unit)}%</div>
      </section>

      <div class="mode-tabs">
        ${modes
          .map((m) => `<button class="mode-tab ${state.bsMode === m.id ? "active" : ""}" data-bs-mode="${m.id}">${m.label}</button>`)
          .join("")}
      </div>

      <div class="panel" id="bsPanel"></div>
    `;

    document.getElementById("btnBsBack").addEventListener("click", openBigScienceHome);
    document.getElementById("btnSpeakBQ").addEventListener("click", () => speakText(unit.bigQuestion, "en-US"));

    appEl.querySelectorAll("[data-bs-mode]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.bsMode = btn.dataset.bsMode;
        initBsUnitMode(unit);
        render();
      });
    });

    const panel = document.getElementById("bsPanel");
    if (state.bsMode === "lessons") renderBsLessons(panel, unit);
    else if (state.bsMode === "flashcards") renderBsFlashcards(panel, unit);
    else if (state.bsMode === "quiz") renderQuiz(panel, `bs_${unit.id}`, "en-US");
  }

  function renderBsLessons(panel, unit) {
    panel.innerHTML = `
      <div class="lesson-list">
        ${unit.lessons
          .map(
            (lesson, li) => `
          <article class="lesson-card">
            <h3>📘 ${esc(lesson.title)}</h3>
            ${progress.viHints ? `<div class="lesson-vi-sub">🇻🇳 ${esc(lesson.viTitle)}</div>` : ""}
            <div class="fact-list">
              ${lesson.facts
                .map(
                  (f, fi) => `
                <div class="fact-row">
                  <div>
                    <div class="fact-en">• ${esc(f.en)}</div>
                    ${progress.viHints ? `<div class="fact-vi">${esc(f.vi)}</div>` : ""}
                  </div>
                  <button class="mini-speak" data-speak-fact="${li}-${fi}" title="Nghe đọc tiếng Anh">🔊</button>
                </div>
              `
                )
                .join("")}
            </div>
            <div style="font-weight:800;font-size:0.9rem;margin-bottom:8px;color:var(--text-soft)">🔑 Key Words (chạm vào từ để nghe phát âm 🔊):</div>
            <div class="kw-grid">
              ${lesson.keywords
                .map(
                  (kw) => `
                <button class="kw-chip" data-speak-kw="${esc(kw.w)}" title="${esc(kw.ex)}">
                  <span class="kw-word">🔊 ${esc(kw.w)}</span>
                  ${progress.viHints ? `<span class="kw-vi">${esc(kw.vi)}</span>` : ""}
                </button>
              `
                )
                .join("")}
            </div>
          </article>
        `
          )
          .join("")}
      </div>
    `;

    panel.querySelectorAll("[data-speak-fact]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const [li, fi] = btn.dataset.speakFact.split("-").map(Number);
        speakText(unit.lessons[li].facts[fi].en, "en-US");
      });
    });

    panel.querySelectorAll("[data-speak-kw]").forEach((btn) => {
      btn.addEventListener("click", () => {
        playTone("flip");
        speakText(btn.dataset.speakKw, "en-US");
      });
    });
  }

  function renderBsFlashcards(panel, unit) {
    const cards = getBsUnitKeywords(unit);
    if (!cards.length) {
      panel.innerHTML = `<p>Chưa có thẻ từ vựng cho Unit này.</p>`;
      return;
    }
    if (state.fcIndex >= cards.length) state.fcIndex = 0;
    const card = cards[state.fcIndex];
    const key = `bs_${unit.id}:${card.w}`;
    const isMastered = !!progress.mastered[key];

    panel.innerHTML = `
      <div class="flashcard-stage">
        <div class="flashcard-wrap">
          <div class="flashcard ${state.fcFlipped ? "flipped" : ""}" id="bsFlashcard">
            <div class="card-face card-front">
              <span class="fc-topic">Unit ${unit.num} • Card ${state.fcIndex + 1}/${cards.length}</span>
              <div class="fc-emoji">${unit.emoji}</div>
              <div class="fc-word">${esc(card.w)}</div>
              <button class="speak-btn" id="btnBsSpeakFront">🔊 Nghe phát âm</button>
              <div class="fc-tip">👆 Chạm vào thẻ để lật xem nghĩa & ví dụ</div>
            </div>
            <div class="card-face card-back">
              <span class="fc-topic">${esc(card.lesson)}</span>
              <div class="fc-meaning">${esc(card.vi)}</div>
              <div class="fc-example">${esc(card.ex)}</div>
              <button class="speak-btn" id="btnBsSpeakBack">🔊 Đọc câu ví dụ</button>
            </div>
          </div>
        </div>

        <div class="fc-controls">
          <button class="btn btn-ghost" id="btnBsPrev">⬅️ Trước</button>
          <span class="fc-counter">${state.fcIndex + 1} / ${cards.length}</span>
          <button class="btn btn-ghost" id="btnBsNext">Tiếp ➡️</button>
          <button class="btn ${isMastered ? "btn-success" : "btn-warn"}" id="btnBsMaster">
            ${isMastered ? "✅ Bé đã thuộc!" : "⭐ Đánh dấu đã thuộc"}
          </button>
        </div>
      </div>
    `;

    document.getElementById("bsFlashcard").addEventListener("click", (e) => {
      if (e.target.closest("button")) return;
      state.fcFlipped = !state.fcFlipped;
      playTone("flip");
      renderBsFlashcards(panel, unit);
    });
    document.getElementById("btnBsSpeakFront").addEventListener("click", (e) => {
      e.stopPropagation();
      speakText(card.w, "en-US");
    });
    document.getElementById("btnBsSpeakBack").addEventListener("click", (e) => {
      e.stopPropagation();
      speakText(card.ex, "en-US");
    });
    document.getElementById("btnBsPrev").addEventListener("click", () => {
      state.fcIndex = (state.fcIndex - 1 + cards.length) % cards.length;
      state.fcFlipped = false;
      renderBsFlashcards(panel, unit);
    });
    document.getElementById("btnBsNext").addEventListener("click", () => {
      state.fcIndex = (state.fcIndex + 1) % cards.length;
      state.fcFlipped = false;
      renderBsFlashcards(panel, unit);
    });
    document.getElementById("btnBsMaster").addEventListener("click", () => {
      if (!progress.mastered[key]) {
        progress.mastered[key] = true;
        addStars(2);
        playTone("ok");
      } else {
        delete progress.mastered[key];
        saveProgress();
      }
      render();
    });
  }

  // ---------- Global Event Wiring ----------
  btnHome.addEventListener("click", openHome);
  const tabReviewBtn = document.getElementById("tabReview");
  const tabBsBtn = document.getElementById("tabBigScience");
  if (tabReviewBtn) tabReviewBtn.addEventListener("click", openHome);
  if (tabBsBtn) tabBsBtn.addEventListener("click", openBigScienceHome);
  btnToggleVi.addEventListener("click", () => {
    progress.viHints = !progress.viHints;
    saveProgress();
    render();
  });
  btnSound.addEventListener("click", () => {
    progress.sound = !progress.sound;
    saveProgress();
  });
  btnSyllabus.addEventListener("click", () => {
    renderSyllabusModal();
    syllabusModal.classList.remove("hidden");
  });
  btnCloseSyllabus.addEventListener("click", () => syllabusModal.classList.add("hidden"));
  syllabusModal.addEventListener("click", (e) => {
    if (e.target === syllabusModal) syllabusModal.classList.add("hidden");
  });

  // Boot
  render();
})();
