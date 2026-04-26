// ========== SIDEBAR ==========
const menuBtn = document.getElementById('menuBtn');
const overlay = document.getElementById('sidebarOverlay');
const sidebar = document.getElementById('sidebarPanel');
const closeSide = document.getElementById('closeSidebarBtn');

function closeSidebar() { 
  if (sidebar) sidebar.classList.remove('open'); 
  if (overlay) overlay.classList.remove('active'); 
}

function openSidebar() { 
  if (sidebar) sidebar.classList.add('open'); 
  if (overlay) overlay.classList.add('active'); 
}

if (menuBtn) menuBtn.addEventListener('click', openSidebar);
if (closeSide) closeSide.addEventListener('click', closeSidebar);
if (overlay) overlay.addEventListener('click', closeSidebar);

// ========== NAVIGASI SIDEBAR ==========
const homeBtns = document.querySelectorAll('.nav-home');
const botNavBtn = document.querySelector('.nav-bot');
const quizNavBtn = document.querySelector('.nav-quiz');
const feedbackNavBtn = document.querySelector('.nav-feedback');

function scrollToElement(el) { 
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  closeSidebar(); 
}

homeBtns.forEach(btn => btn.addEventListener('click', () => scrollToElement(document.querySelector('#materiSection'))));

if (botNavBtn) {
  botNavBtn.addEventListener('click', () => {
    const chatWidget = document.getElementById('chatWidget');
    if (chatWidget) chatWidget.classList.add('show');
    scrollToElement(document.querySelector('.zeta-bot-float'));
  });
}

if (quizNavBtn) {
  quizNavBtn.addEventListener('click', () => {
    window.location.href = 'quiz.html';
  });
}

if (feedbackNavBtn) {
  feedbackNavBtn.addEventListener('click', () => scrollToElement(document.getElementById('feedbackSection')));
}

// ========== SIANG MALAM - REALTIME & TOGGLE ==========
const dayNightDiv = document.getElementById('dayNightToggle');
const toggleIconSpan = document.getElementById('toggleIcon');
const modeLabelSpan = document.getElementById('modeLabel');
const bodyElem = document.body;

let userOverride = false;
let overrideTimeout = null;

function updateBySystemTime() {
  if (userOverride) return;
  const now = new Date();
  const hours = now.getHours();
  const isNight = (hours >= 18 || hours < 6);
  
  if (isNight) {
    bodyElem.classList.add('night-mode');
    if (toggleIconSpan) toggleIconSpan.textContent = '🌙';
    if (modeLabelSpan) modeLabelSpan.textContent = 'Malam';
  } else {
    bodyElem.classList.remove('night-mode');
    if (toggleIconSpan) toggleIconSpan.textContent = '☀️';
    if (modeLabelSpan) modeLabelSpan.textContent = 'Siang';
  }
}

function resetOverrideAfterDelay() {
  if (overrideTimeout) clearTimeout(overrideTimeout);
  overrideTimeout = setTimeout(() => {
    userOverride = false;
    updateBySystemTime();
  }, 7200000);
}

if (dayNightDiv) {
  dayNightDiv.addEventListener('click', () => {
    userOverride = true;
    if (bodyElem.classList.contains('night-mode')) {
      bodyElem.classList.remove('night-mode');
      if (toggleIconSpan) toggleIconSpan.textContent = '☀️';
      if (modeLabelSpan) modeLabelSpan.textContent = 'Siang';
    } else {
      bodyElem.classList.add('night-mode');
      if (toggleIconSpan) toggleIconSpan.textContent = '🌙';
      if (modeLabelSpan) modeLabelSpan.textContent = 'Malam';
    }
    resetOverrideAfterDelay();
  });
}

updateBySystemTime();
setInterval(updateBySystemTime, 60000);

// ========== CHAT WIDGET BOT ZETA ==========
const chatWidget = document.getElementById('chatWidget');
const openChatBtn = document.getElementById('openChatFloat');
const closeChatBtn = document.getElementById('closeChatBtn');
const sendChatBtn = document.getElementById('sendChatBtn');
const chatInput = document.getElementById('chatInput');
const chatBody = document.getElementById('chatBody');

if (openChatBtn) {
  openChatBtn.addEventListener('click', () => {
    if (chatWidget) chatWidget.classList.add('show');
  });
}

if (closeChatBtn) {
  closeChatBtn.addEventListener('click', () => {
    if (chatWidget) chatWidget.classList.remove('show');
  });
}

function botResponseZeta(question) {
  const lower = question.toLowerCase();
  
  if (lower.includes('phdi') || (lower.includes('organisasi') && lower.includes('hindu'))) {
    return "PHDI (Parisada Hindu Dharma Indonesia) didirikan pada tahun 1959. Organisasi ini menjadi payung utama umat Hindu di Indonesia dan berperan penting dalam pengakuan Hindu sebagai agama resmi negara.";
  } else if (lower.includes('tujuan nasional')) {
    return "Tujuan nasional Indonesia tercantum dalam Pembukaan UUD 1945 alinea ke-4: melindungi segenap bangsa, memajukan kesejahteraan umum, mencerdaskan kehidupan bangsa, dan ikut melaksanakan ketertiban dunia.";
  } else if (lower.includes('pasal 29')) {
    return "Pasal 29 UUD 1945 ayat (1) menyatakan 'Negara berdasarkan Ketuhanan Yang Maha Esa'. Ayat (2) menjamin kemerdekaan tiap-tiap penduduk untuk memeluk agamanya masing-masing dan beribadah menurut agamanya.";
  } else if (lower.includes('tri hita karana')) {
    return "Tri Hita Karana adalah filosofi hidup masyarakat Hindu Bali yang mencakup tiga hubungan harmonis: parahyangan (hubungan dengan Tuhan), pawongan (hubungan dengan sesama manusia), dan palemahan (hubungan dengan alam).";
  } else if (lower.includes('sejarah hindu')) {
    return "Agama Hindu masuk ke Nusantara sekitar abad ke-1 Masehi melalui para pedagang dari India. Kerajaan-kerajaan besar seperti Kutai, Tarumanegara, Majapahit, dan Bali menjadi pusat perkembangan Hindu di Nusantara.";
  } else {
    return "Saya ZeTa siap membantu! Silakan tanyakan tentang: organisasi Hindu (PHDI), Pasal 29 UUD 1945, Tri Hita Karana, sejarah Hindu Nusantara, atau hubungan agama dan negara.";
  }
}

function addChatMessage(sender, msg, isUser = false) {
  if (!chatBody) return;
  const messageDiv = document.createElement('div');
  messageDiv.className = isUser ? 'user-message' : 'bot-message';
  messageDiv.innerHTML = `<strong>${sender}:</strong> ${msg}`;
  chatBody.appendChild(messageDiv);
  chatBody.scrollTop = chatBody.scrollHeight;
}

if (sendChatBtn) {
  sendChatBtn.addEventListener('click', () => {
    const userMsg = chatInput.value.trim();
    if (!userMsg) return;
    
    addChatMessage('Anda', userMsg, true);
    const reply = botResponseZeta(userMsg);
    addChatMessage('ZeTa', reply, false);
    chatInput.value = '';
  });
}

if (chatInput) {
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && sendChatBtn) sendChatBtn.click();
  });
}

// ========== FEEDBACK ==========
const feedbackTextarea = document.getElementById('feedbackText');
const submitFeedback = document.getElementById('submitFeedbackBtn');
const feedbackMsgSpan = document.getElementById('feedbackMsg');

if (submitFeedback) {
  submitFeedback.addEventListener('click', () => {
    const msg = feedbackTextarea.value.trim();
    
    if (!msg) {
      if (feedbackMsgSpan) {
        feedbackMsgSpan.textContent = "Harap tulis saran terlebih dahulu.";
        feedbackMsgSpan.style.color = "#C94F4F";
      }
      return;
    }
    
    if (feedbackMsgSpan) {
      feedbackMsgSpan.textContent = "Terima kasih atas saran Anda!";
      feedbackMsgSpan.style.color = "#4CAF50";
    }
    
    feedbackTextarea.value = "";
    
    setTimeout(() => {
      if (feedbackMsgSpan) feedbackMsgSpan.textContent = "";
    }, 3000);
  });
}

// ========== TOMBOL MULAI QUIZ ==========
const startQuizBtn = document.getElementById('startQuizBtn');
if (startQuizBtn) {
  startQuizBtn.addEventListener('click', () => {
    window.location.href = 'quiz.html';
  });
}

// ========== QUIZ LOGIC (hanya berjalan di quiz.html) ==========
if (window.location.pathname.includes('quiz.html') || window.location.href.includes('quiz.html')) {
  const questions = [
    { text: "Apa landasan negara Indonesia yang menjamin kebebasan beragama?", options: ["UUD 1945 Pasal 28", "UUD 1945 Pasal 29", "Tap MPR No. IV", "Pancasila sila ke-4"], correct: 1 },
    { text: "Organisasi payung umat Hindu di Indonesia bernama?", options: ["Muhammadiyah", "Parisada Hindu Dharma Indonesia", "KWI", "PGI"], correct: 1 },
    { text: "Konsep keseimbangan lahir batin dalam tujuan nasional tercermin dari?", options: ["Kemakmuran ekonomi", "Adil dan makmur lahir batin", "Pembangunan fisik", "Industrialisasi"], correct: 1 },
    { text: "Tahun berapa PHDI (Parisada Hindu Dharma Indonesia) didirikan?", options: ["1945", "1959", "1965", "1971"], correct: 1 },
    { text: "Filosofi kearifan lokal Bali yang menekankan harmoni dengan Tuhan, sesama, dan alam adalah?", options: ["Catur Purusa Artha", "Tri Hita Karana", "Panca Yadnya", "Sad Ripu"], correct: 1 },
    { text: "Pasal 29 UUD 1945 ayat (1) menyatakan bahwa negara berdasar atas?", options: ["Kemanusiaan", "Kerakyatan", "Ketuhanan Yang Maha Esa", "Keadilan sosial"], correct: 2 },
    { text: "Apa peran utama agama dalam pembangunan nasional?", options: ["Moral dan kompas etika", "Sumber dana pembangunan", "Kepentingan politik praktis", "Sarana hiburan"], correct: 0 },
    { text: "Kerajaan Hindu terbesar di Nusantara yang mencapai puncak kejayaannya pada abad ke-14 adalah?", options: ["Kutai", "Tarumanegara", "Majapahit", "Srivijaya"], correct: 2 },
    { text: "Apa makna 'Tujuan Nasional' menurut alinea ke-4 Pembukaan UUD 1945?", options: ["Melindungi segenap bangsa", "Memajukan kesejahteraan umum", "Mencerdaskan kehidupan bangsa", "Semua benar"], correct: 3 },
    { text: "Nilai utama hubungan agama dan negara di Indonesia adalah?", options: ["Pemisahan mutlak", "Saling menguatkan dan harmoni", "Dominasi satu agama", "Negara tanpa agama"], correct: 1 }
  ];

  let currentIndex = 0;
  let userAnswers = new Array(questions.length).fill(null);
  
  const quizQuestionEl = document.getElementById('quizQuestion');
  const quizOptionsEl = document.getElementById('quizOptions');
  const quizProgress = document.getElementById('quizProgress');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const resultArea = document.getElementById('quizResultArea');

  function renderQuestion() {
    if (!quizQuestionEl || !quizOptionsEl || !quizProgress) return;
    
    const q = questions[currentIndex];
    quizQuestionEl.textContent = q.text;
    quizProgress.textContent = `Soal ${currentIndex + 1} / ${questions.length}`;
    quizOptionsEl.innerHTML = '';
    
    q.options.forEach((opt, idx) => {
      const optDiv = document.createElement('div');
      optDiv.className = 'quiz-option-item';
      if (userAnswers[currentIndex] === idx) optDiv.classList.add('selected');
      optDiv.textContent = `${String.fromCharCode(65+idx)}. ${opt}`;
      optDiv.addEventListener('click', () => {
        userAnswers[currentIndex] = idx;
        document.querySelectorAll('.quiz-option-item').forEach(el => el.classList.remove('selected'));
        optDiv.classList.add('selected');
      });
      quizOptionsEl.appendChild(optDiv);
    });
    
    if (prevBtn) prevBtn.disabled = (currentIndex === 0);
    if (nextBtn) nextBtn.textContent = (currentIndex === questions.length - 1) ? 'Selesai' : 'Selanjutnya';
  }

  function calculateScore() {
    let score = 0;
    userAnswers.forEach((ans, idx) => { 
      if (ans === questions[idx].correct) score++; 
    });
    return score;
  }

  function showResult() {
    const score = calculateScore();
    const percentage = (score / questions.length) * 100;
    let message = '';
    
    if (percentage >= 80) {
      message = 'Sangat Baik! Wawasan Anda tentang agama, negara, dan sejarah Hindu sangat mengesankan.';
    } else if (percentage >= 60) {
      message = 'Baik! Terus belajar untuk memperdalam pemahaman tentang harmoni agama dan negara.';
    } else {
      message = 'Terus semangat belajar! Pelajari kembali materi di halaman utama untuk meningkatkan wawasan.';
    }
    
    if (resultArea) {
      resultArea.innerHTML = `
        <div style="background: #E8DDD0; padding: 1.5rem; border-radius: 24px;">
          <h3 style="margin-bottom: 0.5rem;">Skor Akhir: ${score} / ${questions.length}</h3>
          <p>${message}</p>
        </div>
      `;
    }
    
    if (nextBtn) nextBtn.disabled = true;
    if (prevBtn) prevBtn.disabled = true;
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentIndex === questions.length - 1) {
        showResult();
        return;
      }
      
      if (currentIndex < questions.length - 1) {
        currentIndex++;
        renderQuestion();
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        renderQuestion();
      }
    });
  }

  renderQuestion();
}