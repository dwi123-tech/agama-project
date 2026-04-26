// ========== QUIZ MAIN - REVISI DENGAN 40+ SOAL ==========

// ========== DATA SOAL BERDASARKAN SOURCE MATERI (40+ SOAL) ==========
const allQuestions = [
  // SOAL 1-10: Dasar Agama dan Negara
  { text: "Agama bagi bangsa Indonesia merupakan landasan pembinaan negara dan kepribadian, terutama dalam bidang...", options: ["Ekonomi", "Mental spiritual", "Politik", "Sosial budaya"], correct: 1, hint: "Ini berkaitan dengan batin dan moral masyarakat." },
  { text: "Sila pertama Pancasila berbunyi...", options: ["Kemanusiaan yang adil dan beradab", "Persatuan Indonesia", "Kerakyatan yang dipimpin oleh hikmat kebijaksanaan", "Ketuhanan Yang Maha Esa"], correct: 3, hint: "Ini adalah dasar ketuhanan bangsa Indonesia." },
  { text: "Dasar kepercayaan bangsa Indonesia terhadap Tuhan Yang Maha Esa dinyatakan dalam sila pertama Pancasila dan...", options: ["Pasal 28 UUD 1945", "Pasal 29 ayat 1 dan 2 UUD 1945", "Pasal 30 UUD 1945", "Pasal 31 UUD 1945"], correct: 1, hint: "Pasal ini mengatur tentang agama." },
  { text: "Pasal 29 ayat (1) UUD 1945 menyatakan bahwa...", options: ["Negara berdasarkan Ketuhanan Yang Maha Esa", "Negara menjamin kemerdekaan beragama", "Presiden pemimpin umat beragama", "Agama resmi adalah Islam"], correct: 0, hint: "Dasar negara dari sisi ketuhanan." },
  { text: "Pasal 29 ayat (2) UUD 1945 menyatakan bahwa negara menjamin...", options: ["Kemerdekaan berserikat", "Kemerdekaan berpendapat", "Kemerdekaan tiap-tiap penduduk untuk memeluk agamanya", "Kemerdekaan pers"], correct: 2, hint: "Ini tentang kebebasan beragama." },
  { text: "Atas dasar kepercayaan terhadap Tuhan Yang Maha Esa, kehidupan manusia Indonesia memiliki hubungan dengan...", options: ["Tuhan Yang Maha Esa", "Sesama manusia", "Alam sekitarnya", "Semua benar"], correct: 3, hint: "Tri Hita Karana juga mengajarkan ini." },
  { text: "Dengan adanya pembinaan beragama, bangsa Indonesia memiliki kesungguhan dalam...", options: ["Meningkatkan kesadaran berbangsa dan bernegara", "Meningkatkan ekonomi", "Membangun infrastruktur", "Memperkuat militer"], correct: 0, hint: "Berkaitan dengan nasionalisme dan spiritual." },
  { text: "Kehidupan beragama di Indonesia berdasarkan...", options: ["Konstitusional", "Kebiasaan", "Tradisi lokal", "Keputusan presiden"], correct: 0, hint: "Dasar hukum yang tertuang dalam UUD." },
  { text: "Pemerintah harus mengindahkan kehidupan warganya tentang...", options: ["Politik", "Ekonomi", "Hidup beragama", "Pendidikan"], correct: 2, hint: "Ini adalah kewajiban negara terhadap rakyatnya." },
  { text: "Negara menjamin kebebasan setiap warga negara Indonesia untuk...", options: ["Memeluk agama yang diyakininya", "Berdemonstrasi", "Membentuk partai politik", "Mengeluarkan pendapat"], correct: 0, hint: "Pasal 29 ayat 2 UUD 1945." },

  // SOAL 11-20: Tujuan Nasional dan Pembangunan
  { text: "Pola Pembangunan Nasional bertujuan untuk mewujudkan masyarakat...", options: ["Kaya raya", "Adil dan makmur yang merata material dan spiritual", "Modern dan maju", "Industri yang kuat"], correct: 1, hint: "Berdasarkan Pancasila." },
  { text: "Hakikat pembangunan nasional adalah...", options: ["Pembangunan infrastruktur", "Pembangunan manusia Indonesia seutuhnya", "Pembangunan ekonomi", "Pembangunan teknologi"], correct: 1, hint: "Manusia adalah subjek dan objek pembangunan." },
  { text: "Landasan pelaksanaan pembangunan nasional adalah...", options: ["Pancasila dan UUD 1945", "GBHN", "Tap MPR", "Keputusan Presiden"], correct: 0, hint: "Dasar negara dan konstitusi." },
  { text: "Segala usaha dan kegiatan pembangunan dimanfaatkan sebesar-besarnya bagi...", options: ["Kemanusiaan", "Peningkatan kesejahteraan rakyat", "Pembangunan pribadi warga negara", "Semua benar"], correct: 3, hint: "Tujuan mulia pembangunan." },
  { text: "Untuk mencapai cita-cita pembangunan nasional, aspirasi bangsa harus merupakan...", options: ["Usaha pemerintah saja", "Usaha bersama seluruh rakyat", "Usaha swasta", "Usaha asing"], correct: 1, hint: "Gotong royong adalah kunci." },
  { text: "Pembangunan harus dilakukan secara...", options: ["Individual", "Gotong royong", "Kompetitif", "Eksklusif"], correct: 1, hint: "Dijiwai semangat kekeluargaan." },
  { text: "Tujuan nasional garis besarnya adalah mencapai masyarakat...", options: ["Adil dan makmur", "Modern dan maju", "Berkembang", "Mandiri"], correct: 0, hint: "Cita-cita bangsa Indonesia." },
  { text: "Tujuan agama Hindu adalah mencapai...", options: ["Kekayaan dunia", "Kekuasaan", "Kebahagiaan lahir dan batin", "Popularitas"], correct: 2, hint: "Moksha atau kebahagiaan sejati." },
  { text: "Antara agama dan negara mempunyai pertalian erat karena...", options: ["Tujuannya sama", "Saling bertentangan", "Terpisah", "Tidak berhubungan"], correct: 0, hint: "Sama-sama ingin masyarakat bahagia." },
  { text: "Untuk mencapai tujuan nasional harus dilandasi dengan pembangunan negara dan juga...", options: ["Pembangunan agama", "Pembangunan militer", "Pembangunan teknologi", "Pembangunan politik"], correct: 0, hint: "Spiritual juga penting." },

  // SOAL 21-30: GBHN dan Agama sebagai Modal
  { text: "Berdasarkan GBHN (Tap MPR IV/MPR/78 maupun MPR/83), agama tergolong...", options: ["Modal dasar lainnya", "Penghambat pembangunan", "Beban negara", "Tidak penting"], correct: 0, hint: "Agama adalah aset bangsa." },
  { text: "Pergerakan agama harus diartikan dalam rangka...", options: ["Pembangunan nasional", "Kepentingan politik", "Kekuasaan", "Keuntungan pribadi"], correct: 0, hint: "Agama mendukung pembangunan." },
  { text: "Agama merupakan pendukung serta pendorong kegiatan umatnya untuk...", options: ["Ikut serta mewujudkan tujuan nasional", "Mementingkan diri sendiri", "Berpolitik praktis", "Mengumpulkan harta"], correct: 0, hint: "Umat beragama berkontribusi untuk bangsa." },
  { text: "Dalam pengamatan agama jelas ada...", options: ["Ibadah", "Politik", "Ekonomi", "Hukum"], correct: 0, hint: "Inti dari beragama." },
  { text: "Soal ibadah harus dijamin dan dilindungi oleh...", options: ["Pemerintah", "Masyarakat", "Swasta", "Luar negeri"], correct: 0, hint: "Negara hadir melindungi." },
  { text: "Agama Hindu adalah agama yang...", options: ["Hidup dan berkembang di Indonesia", "Baru masuk ke Indonesia", "Tidak diakui di Indonesia", "Hanya untuk etnis tertentu"], correct: 0, hint: "Salah satu agama resmi di Indonesia." },
  { text: "Perkembangan agama Hindu di Indonesia diperlakukan...", options: ["Sama dengan agama-agama lain", "Lebih istimewa", "Kurang diperhatikan", "Tidak diatur"], correct: 0, hint: "Setara di mata hukum." },
  { text: "Dalam era pembangunan, yang ditingkatkan adalah sumber daya manusia yang...", options: ["Cerdas, terampil, dan bermoral", "Kaya raya", "Berkuasa", "Terkenal"], correct: 0, hint: "SDM unggul dan beretika." },
  { text: "Bermoral sesuai dengan makna yang tersirat dalam isi...", options: ["Pasal 28 UUD 1945", "Pasal 29 UUD 1945", "Pasal 30 UUD 1945", "Pasal 31 UUD 1945"], correct: 1, hint: "Pasal tentang agama." },
  { text: "Negara berdasarkan atas Ketuhanan Yang Maha Esa ditegaskan dalam...", options: ["Pembukaan UUD 1945 dan Pasal 29", "Ketetapan MPR", "Peraturan Pemerintah", "Keputusan Presiden"], correct: 0, hint: "Dasar konstitusional." },

  // SOAL 31-40: Nilai-Nilai Spiritual dan Implementasi
  { text: "Kehidupan beragama yang subur membuat bangsa Indonesia memiliki...", options: ["Kemantapan dan keseimbangan lahiriah dan batiniah", "Kekayaan melimpah", "Kekuasaan besar", "Teknologi maju"], correct: 0, hint: "Seimbang antara duniawi dan ukhrawi." },
  { text: "Jiwa dinamis dan semangat gotong royong yang meningkat dapat melanjutkan...", options: ["Perjuangan bangsa", "Usaha pribadi", "Kepentingan kelompok", "Bisnis keluarga"], correct: 0, hint: "Semangat kolektif bangsa." },
  { text: "Negara menjamin kemerdekaan tiap-tiap penduduk untuk beribadat menurut...", options: ["Agamanya dan kepercayaannya", "Peraturan pemerintah", "Kebiasaan setempat", "Tradisi leluhur"], correct: 0, hint: "Pasal 29 ayat 2 UUD 1945." },
  { text: "Tugas dan fungsi negara mengenai kehidupan beragama adalah...", options: ["Menjamin kebebasan beragama", "Menentukan agama resmi", "Melarang agama tertentu", "Memaksakan satu agama"], correct: 0, hint: "Sebagai pelindung." },
  { text: "Pemerintah harus menjamin setiap umat dapat...", options: ["Menjalankan ibadah agamanya", "Berkuasa", "Menguasai negara", "Menghimpun kekayaan"], correct: 0, hint: "Hak konstitusional." },
  { text: "Hakikat pembangunan nasional adalah pembangunan...", options: ["Manusia Indonesia seutuhnya", "Gedung pencakar langit", "Jalan tol", "Bandara internasional"], correct: 0, hint: "Bukan fisik semata." },
  { text: "Pembangunan manusia Indonesia seutuhnya mencakup aspek...", options: ["Material dan spiritual", "Hanya material", "Hanya spiritual", "Hanya ekonomi"], correct: 0, hint: "Seimbang lahir batin." },
  { text: "Masyarakat adil dan makmur yang merata material dan spiritual berdasarkan...", options: ["Pancasila", "Kapitalisme", "Komunisme", "Liberalisme"], correct: 0, hint: "Dasar negara Indonesia." },
  { text: "Usaha dan kegiatan pembangunan dijiwai oleh semangat...", options: ["Kekeluargaan", "Individualisme", "Materialisme", "Sekularisme"], correct: 0, hint: "Gotong royong." },
  { text: "Kehidupan beragama di Indonesia dijamin oleh...", options: ["Negara berdasarkan konstitusi", "Masyarakat internasional", "Lembaga swasta", "Orang kaya"], correct: 0, hint: "Pasal 29 UUD 1945." }
];

// ========== VARIABEL GLOBAL ==========
let currentMode = null;
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let lives = 3;
let powerups = { fifty: 2, hint: 2, skip: 1 };
let answered = false;
let timerInterval = null;
let timeLeft = 30;
let usedFifty = false;
let highScore = localStorage.getItem('quizHighScore') || 0;
let correctAnswersCount = 0;

// DOM Elements
let modeSelection, gameArea, resultArea, questionText, optionsGrid, nextBtn;
let scoreDisplay, livesDisplay, highScoreDisplay, questionCounter, timerDisplay;
let progressBarFill, livesIndicator, finalScore, correctCount, accuracyRate, bestScore;
let resultMessage, resultIcon, resultTitle, playAgainBtn, changeModeBtn;
let fiftyBtn, hintBtn, skipBtn, fiftyCount, hintCount, skipCount;
let backHomeBtn, confettiCanvas, hintModal, closeModal, hintText, modalHintText;

// Inisialisasi setelah DOM ready
document.addEventListener('DOMContentLoaded', () => {
  // Ambil DOM elements
  modeSelection = document.getElementById('modeSelection');
  gameArea = document.getElementById('gameArea');
  resultArea = document.getElementById('resultArea');
  questionText = document.getElementById('questionText');
  optionsGrid = document.getElementById('optionsGrid');
  nextBtn = document.getElementById('nextBtn');
  scoreDisplay = document.getElementById('scoreDisplay');
  livesDisplay = document.getElementById('livesDisplay');
  highScoreDisplay = document.getElementById('highScoreDisplay');
  questionCounter = document.getElementById('questionCounter');
  timerDisplay = document.getElementById('timerDisplay');
  progressBarFill = document.getElementById('progressBarFill');
  livesIndicator = document.getElementById('livesIndicator');
  finalScore = document.getElementById('finalScore');
  correctCount = document.getElementById('correctCount');
  accuracyRate = document.getElementById('accuracyRate');
  bestScore = document.getElementById('bestScore');
  resultMessage = document.getElementById('resultMessage');
  resultIcon = document.getElementById('resultIcon');
  resultTitle = document.getElementById('resultTitle');
  playAgainBtn = document.getElementById('playAgainBtn');
  changeModeBtn = document.getElementById('changeModeBtn');
  fiftyBtn = document.getElementById('powerupFifty');
  hintBtn = document.getElementById('powerupHint');
  skipBtn = document.getElementById('powerupSkip');
  fiftyCount = document.getElementById('fiftyCount');
  hintCount = document.getElementById('hintCount');
  skipCount = document.getElementById('skipCount');
  backHomeBtn = document.getElementById('backHomeBtn');
  confettiCanvas = document.getElementById('confettiCanvas');
  hintModal = document.getElementById('hintModal');
  closeModal = document.getElementById('closeModal');
  hintText = document.getElementById('hintText');

  // Update High Score Display
  highScoreDisplay.textContent = highScore;

  // Event Listeners Mode
  document.querySelectorAll('.mode-card').forEach(card => {
    card.addEventListener('click', () => {
      const mode = card.dataset.mode;
      startGame(mode);
    });
  });

  // Event Next
  if (nextBtn) nextBtn.addEventListener('click', nextQuestion);
  
  // Event Power Ups
  if (fiftyBtn) fiftyBtn.addEventListener('click', useFiftyFifty);
  if (hintBtn) hintBtn.addEventListener('click', useHint);
  if (skipBtn) skipBtn.addEventListener('click', useSkip);
  
  // Event Result Buttons
  if (playAgainBtn) playAgainBtn.addEventListener('click', () => startGame(currentMode));
  if (changeModeBtn) changeModeBtn.addEventListener('click', resetToModeSelection);
  
  // Event Back to Home
  if (backHomeBtn) {
    backHomeBtn.addEventListener('click', () => {
      window.location.href = '../index.html';
    });
  }
  
  // Close Modal untuk Hint
  if (closeModal) {
    closeModal.addEventListener('click', () => {
      if (hintModal) hintModal.style.display = 'none';
    });
  }
  
  // Click outside modal to close
  window.addEventListener('click', (e) => {
    if (hintModal && e.target === hintModal) {
      hintModal.style.display = 'none';
    }
  });
});

// Fungsi untuk mengambil soal acak berdasarkan jumlah
function getRandomQuestions(count) {
  const shuffled = [...allQuestions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}

function startGame(mode) {
  currentMode = mode;
  currentIndex = 0;
  score = 0;
  lives = 3;
  correctAnswersCount = 0;
  powerups = { fifty: 2, hint: 2, skip: 1 };
  usedFifty = false;
  answered = false;
  
  updateScoreUI();
  updateLivesUI();
  updatePowerupsUI();
  
  // Load questions based on mode
  if (mode === 'classic') {
    currentQuestions = getRandomQuestions(10);
    timeLeft = 30; // 30 detik per soal
  } else if (mode === 'survival') {
    currentQuestions = [...allQuestions]; // semua soal (40+)
    timeLeft = 60; // 60 detik per soal
  } else if (mode === 'timed') {
    currentQuestions = getRandomQuestions(10);
    timeLeft = 15; // 15 detik per soal
  }
  
  // Hide mode selection, show game area
  if (modeSelection) modeSelection.style.display = 'none';
  if (gameArea) gameArea.style.display = 'block';
  if (resultArea) resultArea.style.display = 'none';
  
  loadQuestion();
}

function loadQuestion() {
  if (currentIndex >= currentQuestions.length) {
    endGame();
    return;
  }
  
  if (lives <= 0) {
    endGame();
    return;
  }
  
  answered = false;
  usedFifty = false;
  
  const q = currentQuestions[currentIndex];
  if (questionText) questionText.textContent = q.text;
  
  // Reset gaya opsi
  if (optionsGrid) {
    optionsGrid.innerHTML = '';
    
    q.options.forEach((opt, idx) => {
      const optionDiv = document.createElement('div');
      optionDiv.className = 'option-card';
      optionDiv.innerHTML = `<span class="option-prefix">${String.fromCharCode(65+idx)}.</span> <span>${opt}</span>`;
      optionDiv.dataset.index = idx;
      optionDiv.addEventListener('click', () => selectAnswer(idx));
      optionsGrid.appendChild(optionDiv);
    });
  }
  
  // Update counter
  if (questionCounter) {
    questionCounter.textContent = `Soal ${currentIndex + 1} / ${currentQuestions.length}`;
  }
  
  // Reset timer
  resetTimer();
  startTimer();
  
  // Hide next button
  if (nextBtn) nextBtn.style.display = 'none';
}

function selectAnswer(selectedIdx) {
  if (answered) return;
  
  const q = currentQuestions[currentIndex];
  const isCorrect = (selectedIdx === q.correct);
  answered = true;
  
  // Stop timer
  if (timerInterval) clearInterval(timerInterval);
  
  // Highlight selected option
  const optionDivs = document.querySelectorAll('.option-card');
  optionDivs.forEach((div, idx) => {
    if (idx === q.correct) {
      div.classList.add('correct');
    }
    if (idx === selectedIdx && !isCorrect) {
      div.classList.add('wrong');
    }
    div.style.pointerEvents = 'none';
  });
  
  if (isCorrect) {
    // Add score based on mode
    let pointsEarned = 100;
    if (currentMode === 'timed') pointsEarned = 120;
    else if (currentMode === 'survival') pointsEarned = 150;
    
    score += pointsEarned;
    correctAnswersCount++;
    updateScoreUI();
    
    // Confetti effect
    showConfetti();
  } else {
    // Reduce life
    lives--;
    updateLivesUI();
    
    if (lives <= 0) {
      setTimeout(() => endGame(), 800);
    }
  }
  
  // Show next button
  if (nextBtn) nextBtn.style.display = 'block';
}

function nextQuestion() {
  currentIndex++;
  loadQuestion();
}

function resetTimer() {
  if (timerInterval) clearInterval(timerInterval);
  
  // Set time based on mode
  if (currentMode === 'classic') timeLeft = 30;
  else if (currentMode === 'survival') timeLeft = 60;
  else if (currentMode === 'timed') timeLeft = 15;
  
  updateTimerDisplay();
  if (progressBarFill) progressBarFill.style.width = '100%';
}

function startTimer() {
  timerInterval = setInterval(() => {
    if (answered) return;
    
    timeLeft--;
    updateTimerDisplay();
    
    const maxTime = (currentMode === 'classic' ? 30 : (currentMode === 'survival' ? 60 : 15));
    const percentage = (timeLeft / maxTime) * 100;
    if (progressBarFill) progressBarFill.style.width = `${percentage}%`;
    
    if (timerDisplay) {
      if (timeLeft <= 5) {
        timerDisplay.classList.add('timer-warning');
      } else {
        timerDisplay.classList.remove('timer-warning');
      }
    }
    
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      if (!answered) {
        // Time's up -> wrong answer
        answered = true;
        lives--;
        updateLivesUI();
        
        // Highlight correct answer
        const q = currentQuestions[currentIndex];
        const optionDivs = document.querySelectorAll('.option-card');
        optionDivs.forEach((div, idx) => {
          if (idx === q.correct) div.classList.add('correct');
          div.style.pointerEvents = 'none';
        });
        
        if (nextBtn) nextBtn.style.display = 'block';
        
        if (lives <= 0) {
          setTimeout(() => endGame(), 800);
        }
      }
    }
  }, 1000);
}

function updateTimerDisplay() {
  if (timerDisplay) timerDisplay.textContent = `⏱️ ${timeLeft}s`;
}

function updateScoreUI() {
  if (scoreDisplay) scoreDisplay.textContent = score;
}

function updateLivesUI() {
  if (livesDisplay) livesDisplay.textContent = lives;
  if (livesIndicator) {
    const hearts = '❤️'.repeat(Math.max(0, lives)) + '🖤'.repeat(Math.max(0, 3 - lives));
    livesIndicator.innerHTML = hearts;
  }
}

function updatePowerupsUI() {
  if (fiftyCount) fiftyCount.textContent = powerups.fifty;
  if (hintCount) hintCount.textContent = powerups.hint;
  if (skipCount) skipCount.textContent = powerups.skip;
  
  if (fiftyBtn) fiftyBtn.disabled = powerups.fifty === 0;
  if (hintBtn) hintBtn.disabled = powerups.hint === 0;
  if (skipBtn) skipBtn.disabled = powerups.skip === 0;
}

function useFiftyFifty() {
  if (powerups.fifty <= 0 || usedFifty || answered) return;
  
  powerups.fifty--;
  usedFifty = true;
  updatePowerupsUI();
  
  const q = currentQuestions[currentIndex];
  const wrongIndices = [];
  for (let i = 0; i < q.options.length; i++) {
    if (i !== q.correct) wrongIndices.push(i);
  }
  
  // Shuffle wrong indices and pick 2 to hide
  for (let i = wrongIndices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [wrongIndices[i], wrongIndices[j]] = [wrongIndices[j], wrongIndices[i]];
  }
  
  const toHide = wrongIndices.slice(0, 2);
  const optionDivs = document.querySelectorAll('.option-card');
  optionDivs.forEach((div, idx) => {
    if (toHide.includes(idx)) {
      div.style.opacity = '0.4';
      div.style.pointerEvents = 'none';
    }
  });
}

function useHint() {
  if (powerups.hint <= 0 || answered) return;
  
  powerups.hint--;
  updatePowerupsUI();
  
  const q = currentQuestions[currentIndex];
  if (hintText) hintText.textContent = q.hint || "ZeTa: Coba baca kembali materi tentang ini di halaman utama!";
  if (hintModal) hintModal.style.display = 'flex';
}

function useSkip() {
  if (powerups.skip <= 0 || answered) return;
  
  powerups.skip--;
  updatePowerupsUI();
  
  // Skip current question (no score, no life penalty)
  currentIndex++;
  if (currentIndex < currentQuestions.length) {
    loadQuestion();
  } else {
    endGame();
  }
}

function endGame() {
  if (timerInterval) clearInterval(timerInterval);
  
  const totalQuestions = currentQuestions.length;
  const accuracy = Math.round((correctAnswersCount / totalQuestions) * 100);
  
  if (finalScore) finalScore.textContent = score;
  if (correctCount) correctCount.textContent = correctAnswersCount;
  if (accuracyRate) accuracyRate.textContent = `${accuracy}%`;
  
  if (score > highScore) {
    highScore = score;
    localStorage.setItem('quizHighScore', highScore);
    if (bestScore) bestScore.textContent = highScore;
    if (resultMessage) resultMessage.textContent = "🎉 Selamat! Kamu mendapatkan skor tertinggi baru! 🎉";
    if (resultIcon) resultIcon.textContent = "🏆✨";
  } else {
    if (bestScore) bestScore.textContent = highScore;
    if (accuracy >= 80) {
      if (resultMessage) resultMessage.textContent = "Hebat! Pengetahuanmu tentang agama dan negara sangat baik!";
      if (resultIcon) resultIcon.textContent = "🌟";
    } else if (accuracy >= 60) {
      if (resultMessage) resultMessage.textContent = "Bagus! Terus belajar untuk lebih memahami harmoni agama dan negara.";
      if (resultIcon) resultIcon.textContent = "📚";
    } else {
      if (resultMessage) resultMessage.textContent = "Terus semangat! Pelajari kembali materi di halaman utama ya.";
      if (resultIcon) resultIcon.textContent = "🌱";
    }
  }
  
  if (lives <= 0) {
    if (resultTitle) resultTitle.textContent = "Game Over!";
    if (resultIcon) resultIcon.textContent = "💀";
    if (resultMessage) resultMessage.textContent = "Nyawa habis. Coba lagi dan lebih berhati-hati!";
  } else if (currentIndex >= currentQuestions.length) {
    if (resultTitle) resultTitle.textContent = "Quiz Selesai!";
  }
  
  if (gameArea) gameArea.style.display = 'none';
  if (resultArea) resultArea.style.display = 'block';
}

function resetToModeSelection() {
  if (modeSelection) modeSelection.style.display = 'block';
  if (gameArea) gameArea.style.display = 'none';
  if (resultArea) resultArea.style.display = 'none';
  if (timerInterval) clearInterval(timerInterval);
}

function showConfetti() {
  const canvas = confettiCanvas;
  if (!canvas) return;
  
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  let particles = [];
  for (let i = 0; i < 100; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      size: Math.random() * 5 + 3,
      color: `hsl(${Math.random() * 360}, 70%, 60%)`,
      speed: Math.random() * 5 + 3
    });
  }
  
  function animateConfetti() {
    if (!ctx || !canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let stillActive = false;
    
    particles.forEach(p => {
      p.y += p.speed;
      if (p.y < canvas.height) stillActive = true;
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, p.size, p.size);
    });
    
    if (stillActive) {
      requestAnimationFrame(animateConfetti);
    } else {
      canvas.style.display = 'none';
    }
  }
  
  animateConfetti();
  setTimeout(() => { if (canvas) canvas.style.display = 'none'; }, 1500);
}