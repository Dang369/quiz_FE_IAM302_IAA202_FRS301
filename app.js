/**
 * CyberQuiz Hub SPA - Interactive Study Engine
 */

const STORAGE_KEY = 'cyberquiz_hub_state_v1';

const COURSE_META = {
  IAM302: {
    icon: '🛡️',
    name: 'IAM302',
    subtitle: 'IA Management • Quản lý An toàn thông tin',
  },
  FRS301: {
    icon: '🔍',
    name: 'FRS301',
    subtitle: 'Digital Forensics • Giám định số',
  },
  IAA202: {
    icon: '🔐',
    name: 'IAA202',
    subtitle: 'IA Fundamentals • Cơ bản An toàn thông tin',
  },
};

const app = {
  state: {
    answers: {}, // { qId: { selected: ['A'], isCorrect: true } }
    mistakes: { IAM302: [], FRS301: [], IAA202: [] },
    bookmarks: {}, // { qId: true }
    theme: 'blue-light', // 'blue-light' | 'blue-navy'
  },

  currentCourseCode: null,
  currentSectionId: null,
  activeQuestions: [],
  currentIndex: 0,
  tempMultiSelected: new Set(),

  init() {
    this.loadState();
    this.applyTheme();
    this.renderHome();
    this.setupKeyboardAndTouch();
  },

  loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        this.state = {
          answers: parsed.answers || {},
          mistakes: parsed.mistakes || { IAM302: [], FRS301: [], IAA202: [] },
          bookmarks: parsed.bookmarks || {},
          theme: parsed.theme === 'blue-navy' ? 'blue-navy' : 'blue-light',
        };
      }
    } catch (e) {
      console.warn('Failed to load state:', e);
    }
  },

  saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.warn('Failed to save state:', e);
    }
  },

  toggleTheme() {
    this.state.theme = this.state.theme === 'blue-light' ? 'blue-navy' : 'blue-light';
    this.saveState();
    this.applyTheme();
  },

  applyTheme() {
    const html = document.documentElement;
    const icon = document.getElementById('theme-icon');
    const label = document.getElementById('theme-label');
    const metaTheme = document.querySelector('meta[name="theme-color"]');

    if (this.state.theme === 'blue-navy') {
      html.classList.add('dark');
      icon.textContent = '☀️';
      label.textContent = 'Trắng Xanh';
      if (metaTheme) metaTheme.setAttribute('content', '#0b1220');
    } else {
      html.classList.remove('dark');
      icon.textContent = '🌙';
      label.textContent = 'Xanh Đêm';
      if (metaTheme) metaTheme.setAttribute('content', '#f4f7fb');
    }
  },

  getCourses() {
    return window.QUIZ_COURSES || {};
  },

  getAllCourseQuestions(courseCode) {
    const course = this.getCourses()[courseCode];
    if (!course) return [];
    const all = [];
    course.sections.forEach((sec) => {
      sec.questions.forEach((q) => all.push(q));
    });
    return all;
  },

  showScreen(screenId) {
    ['screen-home', 'screen-course', 'screen-quiz'].forEach((id) => {
      document.getElementById(id).classList.add('hidden');
    });
    document.getElementById(screenId).classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  goHome() {
    this.currentCourseCode = null;
    this.currentSectionId = null;
    this.renderHome();
    this.showScreen('screen-home');
  },

  backToCourse() {
    if (!this.currentCourseCode) return this.goHome();
    this.renderCourse(this.currentCourseCode);
    this.showScreen('screen-course');
  },

  renderHome() {
    const courses = this.getCourses();
    const grid = document.getElementById('courses-grid');
    grid.innerHTML = '';

    let grandTotal = 0;

    Object.keys(COURSE_META).forEach((code) => {
      const meta = COURSE_META[code];
      const data = courses[code];
      const allQs = this.getAllCourseQuestions(code);
      const total = allQs.length;
      grandTotal += total;

      let done = 0;
      let correct = 0;
      allQs.forEach((q) => {
        const ans = this.state.answers[q.id];
        if (ans) {
          done++;
          if (ans.isCorrect) correct++;
        }
      });

      const pct = total > 0 ? Math.round((done / total) * 100) : 0;
      const numSections = data ? data.sections.length : 0;
      const mistakeCount = (this.state.mistakes[code] || []).length;

      const card = document.createElement('div');
      card.className =
        'card-surface border rounded-2xl p-5 sm:p-6 hover:border-blue-500 dark:hover:border-sky-400 transition duration-200 cursor-pointer group flex flex-col justify-between';
      card.onclick = () => this.openCourse(code);

      card.innerHTML = `
        <div>
          <div class="flex items-start justify-between mb-4">
            <div class="w-12 h-12 rounded-xl accent-pill border flex items-center justify-center text-2xl group-hover:scale-105 transition">
              ${meta.icon}
            </div>
            ${
              mistakeCount > 0
                ? `<span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-rose-50 dark:bg-rose-500/15 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-500/30">⚠️ ${mistakeCount} câu sai</span>`
                : `<span class="px-2.5 py-0.5 rounded-full text-[11px] font-semibold accent-pill border">${numSections} bộ</span>`
            }
          </div>
          <h3 class="text-xl font-bold text-main group-hover:text-blue-600 dark:group-hover:text-sky-400 transition">${meta.name}</h3>
          <p class="text-xs text-sec mt-1 mb-4">${meta.subtitle}</p>

          <div class="space-y-2 text-xs text-sec mb-5 p-3.5 rounded-xl card-alt border">
            <div class="flex justify-between">
              <span>Ngân hàng:</span>
              <span class="font-bold text-main">${total} câu (${numSections} phần)</span>
            </div>
            <div class="flex justify-between">
              <span>Đã ôn:</span>
              <span class="font-bold text-blue-600 dark:text-sky-400">${done} / ${total} (${pct}%)</span>
            </div>
            <div class="w-full h-2 rounded-full progress-track overflow-hidden mt-1">
              <div class="h-full bg-blue-600 dark:bg-sky-400 rounded-full transition-all duration-300" style="width: ${pct}%"></div>
            </div>
          </div>
        </div>

        <button class="w-full py-2.5 rounded-xl card-alt border text-main group-hover:bg-blue-600 dark:group-hover:bg-sky-500 group-hover:text-white dark:group-hover:text-slate-950 group-hover:border-blue-600 dark:group-hover:border-sky-500 font-semibold text-sm transition flex items-center justify-center gap-1.5">
          <span>Vào học môn này</span>
          <span>➔</span>
        </button>
      `;

      grid.appendChild(card);
    });

    document.getElementById('total-badge').textContent = `3 Môn • ${grandTotal} Câu`;
  },

  openCourse(code) {
    this.currentCourseCode = code;
    this.renderCourse(code);
    this.showScreen('screen-course');
  },

  renderCourse(code) {
    const meta = COURSE_META[code];
    const course = this.getCourses()[code];
    if (!course) return;

    document.getElementById('course-badge').textContent = code;
    document.getElementById('course-title').textContent = `${meta.icon} ${meta.name}`;
    document.getElementById('course-subtitle').textContent = meta.subtitle;

    const mistakesList = this.state.mistakes[code] || [];
    document.getElementById('course-mistake-count').textContent = mistakesList.length;

    const btnMistakes = document.getElementById('btn-mistakes');
    if (mistakesList.length === 0) {
      btnMistakes.classList.add('opacity-50');
    } else {
      btnMistakes.classList.remove('opacity-50');
    }

    document.getElementById('course-total-sections').textContent = `${course.sections.length} bộ câu hỏi`;

    const grid = document.getElementById('sections-grid');
    grid.innerHTML = '';

    course.sections.forEach((sec, idx) => {
      const total = sec.questions.length;
      let done = 0;
      let correct = 0;

      sec.questions.forEach((q) => {
        const ans = this.state.answers[q.id];
        if (ans) {
          done++;
          if (ans.isCorrect) correct++;
        }
      });

      const pct = total > 0 ? Math.round((done / total) * 100) : 0;
      const colorBadge = this.getSectionColorClass(sec.tag);

      const card = document.createElement('div');
      card.className =
        'card-surface border rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:border-blue-500 dark:hover:border-sky-400 transition cursor-pointer group';
      card.onclick = () => this.startSection(sec.id);

      card.innerHTML = `
        <div>
          <div class="flex items-center justify-between gap-2 mb-2.5">
            <span class="px-2.5 py-0.5 rounded-md text-[11px] font-bold border ${colorBadge}">
              ${sec.tag || `Phần ${idx + 1}`}
            </span>
            <span class="text-[11px] text-mut">${sec.slide_range || ''}</span>
          </div>
          <h4 class="font-bold text-sm sm:text-base text-main group-hover:text-blue-600 dark:group-hover:text-sky-400 transition">${sec.title}</h4>
          <p class="text-xs text-sec mt-1">${total} câu hỏi trắc nghiệm</p>
        </div>

        <div class="mt-4 pt-3 border-t border-opacity-60" style="border-color: var(--border-color)">
          <div class="flex items-center justify-between text-xs mb-1.5">
            <span class="text-sec">Đã làm: <strong class="text-main">${done}/${total}</strong> (${pct}%)</span>
            <span class="text-blue-600 dark:text-sky-400 font-semibold group-hover:translate-x-0.5 transition">Học ngay ➔</span>
          </div>
          <div class="w-full h-1.5 rounded-full progress-track overflow-hidden">
            <div class="h-full bg-blue-600 dark:bg-sky-400 rounded-full transition-all duration-300" style="width: ${pct}%"></div>
          </div>
        </div>
      `;

      grid.appendChild(card);
    });

    // Also add Bookmarked section if any bookmarks exist in this course
    const bookmarkedQs = this.getAllCourseQuestions(code).filter((q) => this.state.bookmarks[q.id]);
    if (bookmarkedQs.length > 0) {
      const bCard = document.createElement('div');
      bCard.className =
        'card-surface border border-blue-300 dark:border-sky-500/40 rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:border-blue-500 dark:hover:border-sky-400 transition cursor-pointer group';
      bCard.onclick = () => this.startCustomList('⭐ Câu đã đánh dấu (Bookmark)', bookmarkedQs);
      bCard.innerHTML = `
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="px-2.5 py-0.5 rounded-md text-[11px] font-bold accent-pill border">⭐ Bookmark</span>
          </div>
          <h4 class="font-bold text-sm sm:text-base text-main group-hover:text-blue-600 dark:group-hover:text-sky-400 transition">Các câu đã đánh dấu</h4>
          <p class="text-xs text-sec mt-1">${bookmarkedQs.length} câu hỏi cần lưu ý</p>
        </div>
        <div class="mt-4 pt-3 border-t border-opacity-60 text-right text-xs text-blue-600 dark:text-sky-400 font-semibold" style="border-color: var(--border-color)">
          Ôn tập ngay ➔
        </div>
      `;
      grid.appendChild(bCard);
    }
  },

  getSectionColorClass(tag) {
    const t = (tag || '').toLowerCase();
    if (t.includes('ngắn')) return 'bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/30';
    if (t.includes('trung bình')) return 'bg-blue-50 dark:bg-blue-500/15 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-500/30';
    if (t.includes('dài')) return 'bg-indigo-50 dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-500/30';
    if (t.includes('nhiều')) return 'bg-sky-50 dark:bg-sky-500/15 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-500/30';
    if (t.includes('not')) return 'bg-rose-50 dark:bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-500/30';
    if (t.includes('dấu') || t.includes('điền')) return 'bg-cyan-50 dark:bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-500/30';
    return 'bg-blue-50 dark:bg-blue-500/15 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-500/30';
  },

  startSection(sectionId) {
    const course = this.getCourses()[this.currentCourseCode];
    const sec = course.sections.find((s) => s.id === sectionId);
    if (!sec || sec.questions.length === 0) return;

    this.currentSectionId = sectionId;
    this.activeQuestions = sec.questions;

    // Smart resume: jump to first unanswered question in this section
    let resumeIdx = this.activeQuestions.findIndex((q) => !this.state.answers[q.id]);
    if (resumeIdx === -1) resumeIdx = 0;

    this.currentIndex = resumeIdx;
    document.getElementById('quiz-section-badge').textContent = `${this.currentCourseCode} • ${sec.title}`;
    this.renderQuestion();
    this.showScreen('screen-quiz');
  },

  startMistakesQuiz() {
    const code = this.currentCourseCode;
    const mistakeIds = this.state.mistakes[code] || [];
    if (mistakeIds.length === 0) {
      alert('Tuyệt vời! Bạn chưa có câu làm sai nào trong môn này!');
      return;
    }
    const allQs = this.getAllCourseQuestions(code);
    const mistakeQs = allQs.filter((q) => mistakeIds.includes(q.id));
    if (mistakeQs.length === 0) return;

    // Clear previous answers temporarily in memory view or allow re-answering?
    // Let's clear saved answer for mistake questions ONLY when opening Mistake mode so user can re-pick!
    mistakeQs.forEach((q) => {
      delete this.state.answers[q.id];
    });
    this.saveState();

    this.startCustomList(`⚠️ Ôn câu sai (${mistakeQs.length} câu)`, mistakeQs);
  },

  startAllShuffled() {
    const allQs = [...this.getAllCourseQuestions(this.currentCourseCode)];
    for (let i = allQs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allQs[i], allQs[j]] = [allQs[j], allQs[i]];
    }
    this.startCustomList('🔀 Xáo trộn toàn môn', allQs);
  },

  startCustomList(label, questions) {
    this.currentSectionId = 'custom';
    this.activeQuestions = questions;
    this.currentIndex = 0;
    document.getElementById('quiz-section-badge').textContent = `${this.currentCourseCode} • ${label}`;
    this.renderQuestion();
    this.showScreen('screen-quiz');
  },

  renderQuestion() {
    const q = this.activeQuestions[this.currentIndex];
    if (!q) return;

    this.tempMultiSelected.clear();

    const total = this.activeQuestions.length;
    const num = this.currentIndex + 1;

    document.getElementById('quiz-counter-top').textContent = `${num}/${total}`;
    document.getElementById('q-number-label').textContent = `Câu ${num} / ${total}`;
    document.getElementById('q-slide-ref').textContent = q.slide.replace('.png', '').replace('.webp', '');

    // Progress bar
    const pct = Math.round((num / total) * 100);
    document.getElementById('quiz-progress-bar').style.width = `${pct}%`;

    // Multi-choice badge
    const isMulti = q.correct && q.correct.length > 1;
    const multiBadge = document.getElementById('q-multi-badge');
    if (isMulti) {
      multiBadge.classList.remove('hidden');
      multiBadge.textContent = `Chọn ${q.correct.length} đáp án`;
    } else {
      multiBadge.classList.add('hidden');
    }

    // Bookmark state
    const bmBtn = document.getElementById('btn-bookmark');
    if (this.state.bookmarks[q.id]) {
      bmBtn.textContent = '★';
      bmBtn.classList.add('accent-pill', 'text-blue-600', 'dark:text-sky-400', 'border-blue-400', 'dark:border-sky-400/50');
    } else {
      bmBtn.textContent = '☆';
      bmBtn.classList.remove('accent-pill', 'text-blue-600', 'dark:text-sky-400', 'border-blue-400', 'dark:border-sky-400/50');
    }

    // Inline image if question involves diagram/screenshot (uses canvas-only inline_webp before answering so answer isn't spoiled)
    const inlineBox = document.getElementById('inline-slide-box');
    const inlineImg = document.getElementById('inline-slide-img');
    const inlineUrl = q.inline_webp || q.slide_webp;

    if (q.has_visual && inlineUrl) {
      inlineImg.src = inlineUrl;
      inlineBox.classList.remove('hidden');
    } else {
      inlineBox.classList.add('hidden');
    }

    // Question text
    document.getElementById('question-text').textContent = q.question || '(Xem nội dung trực tiếp trên ảnh slide gốc)';

    // Saved answer
    const savedAns = this.state.answers[q.id];

    // Render options
    const optList = document.getElementById('options-list');
    optList.innerHTML = '';

    const keys = Object.keys(q.options || {});
    keys.forEach((key) => {
      const val = q.options[key];
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.dataset.key = key;

      let baseClass =
        'w-full text-left p-3.5 sm:p-4 rounded-xl border transition flex items-start space-x-3 text-sm sm:text-base ';

      if (!savedAns) {
        baseClass += 'card-alt hover:border-blue-500 dark:hover:border-sky-400 text-main cursor-pointer active:scale-[0.99]';
        btn.onclick = () => this.onOptionClick(key, isMulti, btn);
      } else {
        btn.disabled = true;
        const isCorrectKey = q.correct.includes(key);
        const wasSelected = savedAns.selected.includes(key);

        if (isCorrectKey && wasSelected) {
          baseClass += 'border-2 border-emerald-500 bg-emerald-50 dark:bg-emerald-500/15 text-main font-medium';
        } else if (isCorrectKey) {
          baseClass += 'border-2 border-emerald-500/80 bg-emerald-50/80 dark:bg-emerald-500/15 text-main font-medium';
        } else if (wasSelected) {
          baseClass += 'border-2 border-rose-500 bg-rose-50 dark:bg-rose-500/15 text-rose-800 dark:text-rose-200';
        } else {
          baseClass += 'card-alt opacity-60 text-sec';
        }
      }

      btn.className = baseClass;

      let badgeClass = 'card-surface border text-sec';
      let badgeContent = key;

      if (savedAns) {
        if (q.correct.includes(key)) {
          badgeClass = 'bg-emerald-600 text-white font-bold';
          badgeContent = '✓';
        } else if (savedAns.selected.includes(key)) {
          badgeClass = 'bg-rose-600 text-white font-bold';
          badgeContent = '✕';
        }
      }

      btn.innerHTML = `
        <span class="opt-badge w-7 h-7 rounded-lg ${badgeClass} flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 transition">
          ${badgeContent}
        </span>
        <span class="flex-1 leading-snug break-words">${this.escapeHtml(val)}</span>
      `;

      optList.appendChild(btn);
    });

    // Multi submit wrap
    const multiWrap = document.getElementById('multi-submit-wrap');
    if (isMulti && !savedAns) {
      multiWrap.classList.remove('hidden');
    } else {
      multiWrap.classList.add('hidden');
    }

    // Explanation box
    const expBox = document.getElementById('explanation-box');
    const peekWrap = document.getElementById('peek-wrap');

    if (savedAns) {
      expBox.classList.remove('hidden');
      peekWrap.classList.add('hidden');

      const statusEl = document.getElementById('explanation-status');
      if (savedAns.isCorrect) {
        expBox.className = 'rounded-xl p-4 border border-emerald-400/60 bg-emerald-50 dark:bg-emerald-500/15 text-xs sm:text-sm space-y-2 mb-4';
        statusEl.className = 'font-bold text-sm text-emerald-700 dark:text-emerald-300';
        statusEl.textContent = `✓ Chính xác! Đáp án: ${q.correct.join(', ')}`;
      } else {
        expBox.className = 'rounded-xl p-4 border border-rose-400/60 bg-rose-50 dark:bg-rose-500/15 text-xs sm:text-sm space-y-2 mb-4';
        statusEl.className = 'font-bold text-sm text-rose-700 dark:text-rose-300';
        statusEl.textContent = `✕ Chưa đúng! Đáp án chuẩn là: ${q.correct.join(', ')}`;
      }

      document.getElementById('explanation-vi-q').textContent = q.vi_question || '';
      document.getElementById('explanation-vi-detail').textContent =
        q.vi_explanation || 'Đức Giáo Chủ có thể bấm "Xem Slide gốc" để đối chiếu thêm.';
    } else {
      expBox.classList.add('hidden');
      peekWrap.classList.remove('hidden');
    }

    // Prev / Next buttons
    document.getElementById('btn-prev').disabled = this.currentIndex === 0;
    document.getElementById('btn-next').disabled = this.currentIndex === total - 1;

    this.renderDesktopPills();
  },

  onOptionClick(key, isMulti, btnEl) {
    if (!isMulti) {
      this.evaluateAnswer([key]);
      return;
    }

    // Toggle multi selection
    const badge = btnEl.querySelector('.opt-badge');
    if (this.tempMultiSelected.has(key)) {
      this.tempMultiSelected.delete(key);
      btnEl.classList.remove('border-blue-600', 'bg-blue-50', 'dark:border-sky-400', 'dark:bg-sky-500/15');
      badge.classList.remove('bg-blue-600', 'dark:bg-sky-500', 'text-white');
    } else {
      this.tempMultiSelected.add(key);
      btnEl.classList.add('border-blue-600', 'bg-blue-50', 'dark:border-sky-400', 'dark:bg-sky-500/15');
      badge.classList.add('bg-blue-600', 'dark:bg-sky-500', 'text-white');
    }
  },

  submitMultiChoice() {
    if (this.tempMultiSelected.size === 0) {
      alert('Vui lòng chọn ít nhất 1 đáp án!');
      return;
    }
    this.evaluateAnswer(Array.from(this.tempMultiSelected).sort());
  },

  evaluateAnswer(selectedArr) {
    const q = this.activeQuestions[this.currentIndex];
    const correctSorted = [...(q.correct || [])].sort();
    const selectedSorted = [...selectedArr].sort();

    const isCorrect =
      correctSorted.length > 0 &&
      correctSorted.length === selectedSorted.length &&
      correctSorted.every((v, i) => v === selectedSorted[i]);

    this.state.answers[q.id] = {
      selected: selectedSorted,
      isCorrect,
    };

    // Update Mistakes Bank
    const code = this.currentCourseCode;
    if (!this.state.mistakes[code]) this.state.mistakes[code] = [];
    const mList = this.state.mistakes[code];

    if (!isCorrect) {
      if (!mList.includes(q.id)) mList.push(q.id);
    } else {
      // If answered right, remove from mistakes bank
      const idx = mList.indexOf(q.id);
      if (idx !== -1) mList.splice(idx, 1);
    }

    this.saveState();
    this.renderQuestion();
  },

  revealAnswer() {
    const q = this.activeQuestions[this.currentIndex];
    this.state.answers[q.id] = {
      selected: q.correct || [],
      isCorrect: true,
    };
    this.saveState();
    this.renderQuestion();
  },

  toggleBookmark() {
    const q = this.activeQuestions[this.currentIndex];
    if (!q) return;
    if (this.state.bookmarks[q.id]) {
      delete this.state.bookmarks[q.id];
    } else {
      this.state.bookmarks[q.id] = true;
    }
    this.saveState();
    this.renderQuestion();
  },

  resetCurrentSection() {
    if (!confirm('Xóa trạng thái đã làm của bộ câu hỏi đang học để làm lại từ đầu?')) return;
    this.activeQuestions.forEach((q) => {
      delete this.state.answers[q.id];
    });
    this.saveState();
    this.currentIndex = 0;
    this.renderQuestion();
  },

  resetAllProgress() {
    if (!confirm('Bạn có chắc muốn xóa toàn bộ tiến độ & câu làm sai của cả 3 môn?')) return;
    localStorage.removeItem(STORAGE_KEY);
    this.state = {
      answers: {},
      mistakes: { IAM302: [], FRS301: [], IAA202: [] },
      bookmarks: {},
      theme: this.state.theme,
    };
    this.renderHome();
  },

  prevQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.renderQuestion();
    }
  },

  nextQuestion() {
    if (this.currentIndex < this.activeQuestions.length - 1) {
      this.currentIndex++;
      this.renderQuestion();
    }
  },

  renderDesktopPills() {
    const container = document.getElementById('desktop-pills');
    container.innerHTML = '';

    // Show window of pills around currentIndex
    const start = Math.max(0, this.currentIndex - 4);
    const end = Math.min(this.activeQuestions.length, start + 9);

    for (let i = start; i < end; i++) {
      const q = this.activeQuestions[i];
      const ans = this.state.answers[q.id];
      const pill = document.createElement('button');
      pill.textContent = i + 1;

      let cls = 'w-7 h-7 rounded-lg text-xs font-bold shrink-0 transition ';
      if (i === this.currentIndex) {
        cls += 'bg-blue-600 dark:bg-sky-500 text-white dark:text-slate-950 ring-2 ring-blue-300 dark:ring-sky-400/50';
      } else if (ans) {
        cls += ans.isCorrect ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/40' : 'bg-rose-100 dark:bg-rose-500/20 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-500/40';
      } else {
        cls += 'card-alt text-sec hover:border-blue-500 dark:hover:border-sky-400 border';
      }

      pill.className = cls;
      pill.onclick = () => {
        this.currentIndex = i;
        this.renderQuestion();
      };
      container.appendChild(pill);
    }
  },

  openPillDrawer() {
    const grid = document.getElementById('drawer-pills-grid');
    grid.innerHTML = '';

    this.activeQuestions.forEach((q, i) => {
      const ans = this.state.answers[q.id];
      const btn = document.createElement('button');
      btn.textContent = i + 1;

      let cls = 'py-2 rounded-xl text-xs font-bold border transition ';
      if (i === this.currentIndex) {
        cls += 'bg-blue-600 dark:bg-sky-500 text-white dark:text-slate-950 border-blue-600 dark:border-sky-400';
      } else if (ans) {
        cls += ans.isCorrect
          ? 'bg-emerald-50 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-500/40'
          : 'bg-rose-50 dark:bg-rose-500/20 text-rose-700 dark:text-rose-300 border-rose-300 dark:border-rose-500/40';
      } else {
        cls += 'card-alt text-sec hover:border-blue-500 dark:hover:border-sky-400';
      }

      btn.className = cls;
      btn.onclick = () => {
        this.currentIndex = i;
        this.closePillDrawer();
        this.renderQuestion();
      };
      grid.appendChild(btn);
    });

    document.getElementById('pill-drawer').classList.remove('hidden');
  },

  closePillDrawer() {
    document.getElementById('pill-drawer').classList.add('hidden');
  },

  openSlideModal() {
    const q = this.activeQuestions[this.currentIndex];
    if (!q || !q.slide_webp) return;
    document.getElementById('modal-slide-label').textContent = q.slide.replace('.png', '').replace('.webp', '');
    document.getElementById('modal-slide-img').src = q.slide_webp;
    document.getElementById('slide-modal').classList.remove('hidden');
  },

  closeSlideModal() {
    document.getElementById('slide-modal').classList.add('hidden');
  },

  setupKeyboardAndTouch() {
    // Keyboard shortcuts on PC
    document.addEventListener('keydown', (e) => {
      const quizVisible = !document.getElementById('screen-quiz').classList.contains('hidden');
      if (!quizVisible) return;

      const modalOpen =
        !document.getElementById('slide-modal').classList.contains('hidden') ||
        !document.getElementById('pill-drawer').classList.contains('hidden');

      if (e.key === 'Escape') {
        this.closeSlideModal();
        this.closePillDrawer();
        return;
      }

      if (modalOpen) return;

      if (e.key === 'ArrowRight') {
        this.nextQuestion();
      } else if (e.key === 'ArrowLeft') {
        this.prevQuestion();
      } else {
        const keyMap = { '1': 'A', '2': 'B', '3': 'C', '4': 'D', '5': 'E', a: 'A', b: 'B', c: 'C', d: 'D', e: 'E' };
        const letter = keyMap[e.key.toLowerCase()];
        if (letter) {
          const optBtn = document.querySelector(`#options-list button[data-key="${letter}"]`);
          if (optBtn && !optBtn.disabled) optBtn.click();
        }
      }
    });

    // Touch swipe left/right on Mobile inside quiz screen
    let touchStartX = 0;
    let touchStartY = 0;
    const quizEl = document.getElementById('screen-quiz');
    quizEl.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    quizEl.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].screenX - touchStartX;
      const dy = e.changedTouches[0].screenY - touchStartY;
      // Only horizontal swipe (> 75px and mostly horizontal)
      if (Math.abs(dx) > 75 && Math.abs(dy) < 50) {
        if (dx < 0) this.nextQuestion();
        else this.prevQuestion();
      }
    }, { passive: true });
  },

  escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  },
};

document.addEventListener('DOMContentLoaded', () => app.init());
