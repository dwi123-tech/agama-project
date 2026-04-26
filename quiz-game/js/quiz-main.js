// ========== QUIZ MAIN - REVISI DENGAN 40+ SOAL ==========

// ========== DATA SOAL BERDASARKAN SOURCE MATERI (40+ SOAL) ==========
// ========== QUIZ MAIN - PERANAN PEMERINTAH DALAM MEMBINA KEHIDUPAN BERAGAMA ==========

// ========== DATA SOAL (40 SOAL BERDASARKAN MATERI BARU) ==========
const allQuestions = [
  // SOAL 1-10: Dasar Negara dan Konstitusi
  { text: "Dasar Negara Republik Indonesia adalah...", options: ["UUD 1945", "Pancasila", "Tap MPR", "Proklamasi"], correct: 1, hint: "Ini adalah dasar falsafah bangsa Indonesia." },
  { text: "Sila pertama Pancasila berbunyi...", options: ["Kemanusiaan yang adil dan beradab", "Persatuan Indonesia", "Ketuhanan Yang Maha Esa", "Keadilan sosial bagi seluruh rakyat Indonesia"], correct: 2, hint: "Berhubungan dengan keyakinan kepada Tuhan." },
  { text: "Pengaturan tentang agama dalam UUD 1945 terdapat pada...", options: ["Bab 11", "Bab 10", "Bab 12", "Bab 13"], correct: 0, hint: "Bab tentang agama." },
  { text: "Pasal yang mengatur tentang agama dalam UUD 1945 adalah...", options: ["Pasal 28", "Pasal 29", "Pasal 30", "Pasal 31"], correct: 1, hint: "Pasal tentang jaminan kebebasan beragama." },
  { text: "Pasal 29 ayat (1) UUD 1945 menyatakan bahwa...", options: ["Negara menjamin kemerdekaan beragama", "Negara berdasarkan Ketuhanan Yang Maha Esa", "Presiden pemimpin umat beragama", "Agama resmi adalah Islam"], correct: 1, hint: "Dasar negara dari sisi ketuhanan." },
  { text: "Pasal 29 ayat (2) UUD 1945 menyatakan bahwa negara menjamin...", options: ["Kemerdekaan berserikat", "Kemerdekaan berpendapat", "Kemerdekaan tiap-tiap penduduk untuk memeluk agamanya", "Kemerdekaan pers"], correct: 2, hint: "Jaminan kebebasan beribadah." },
  { text: "Makna Bab 11 UUD 1945 adalah sebagai uraian dasar dari...", options: ["Sila pertama Pancasila", "Sila kedua Pancasila", "Sila ketiga Pancasila", "Sila keempat Pancasila"], correct: 0, hint: "Ketuhanan Yang Maha Esa." },
  { text: "UUD 1945 adalah singkatan dari...", options: ["Undang-Undang Dasar 1945", "Undang-Undang Dasar Negara 1945", "Undang-Undang Dasar Republik Indonesia 1945", "Undang-Undang Dewan 1945"], correct: 0, hint: "Konstitusi dasar Indonesia." },
  { text: "Pancasila sebagai dasar negara terdiri dari berapa sila?", options: ["3", "4", "5", "6"], correct: 2, hint: "Jumlah sila dalam Pancasila." },
  { text: "Sila pertama Pancasila berkaitan erat dengan masalah...", options: ["Kemanusiaan", "Persatuan", "Ketuhanan", "Kerakyatan"], correct: 2, hint: "Keyakinan kepada Tuhan." },

  // SOAL 11-20: Agama dan Aliran Kepercayaan
  { text: "Di Indonesia, penganut penghayatan terhadap Tuhan Yang Maha Esa lebih dikenal dengan sebutan...", options: ["Agama resmi", "Aliran kepercayaan", "Sekte", "Organisasi massa"], correct: 1, hint: "Bukan agama formal." },
  { text: "Aliran kepercayaan jumlahnya di Indonesia sangat...", options: ["Sedikit", "Banyak", "Tidak ada", "Terbatas"], correct: 1, hint: "Keberagaman kepercayaan lokal." },
  { text: "Pemerintah mempunyai peranan penting dalam membina kehidupan beragama karena...", options: ["Banyaknya agama dan aliran kepercayaan", "Sedikitnya pemeluk agama", "Tidak ada konflik", "Semua agama sama"], correct: 0, hint: "Keberagaman perlu pembinaan." },
  { text: "Yang dimaksud dengan aliran kepercayaan di Indonesia adalah...", options: ["Agama resmi negara", "Penganut penghayatan terhadap Ketuhanan Yang Maha Esa", "Organisasi politik", "Lembaga pendidikan"], correct: 1, hint: "Bukan agama formal." },
  { text: "Masalah Ketuhanan erat kaitannya dengan...", options: ["Politik", "Ekonomi", "Agama", "Budaya"], correct: 2, hint: "Hubungan manusia dengan Tuhan." },
  { text: "Tidak semua hal yang perilakunya berkaitan dengan Ketuhanan dapat disebut...", options: ["Budaya", "Adat", "Agama", "Tradisi"], correct: 2, hint: "Ada batasan tertentu." },
  { text: "Untuk mendayagunakan semua umat, pemerintah mempunyai peranan...", options: ["Kecil", "Tidak penting", "Penting", "Bebas"], correct: 2, hint: "Negara hadir membina." },
  { text: "Aliran kepercayaan di Indonesia disebut juga dengan...", options: ["Satu nama saja", "Banyak nama", "Tidak bernama", "Nama internasional"], correct: 1, hint: "Keberagaman sebutan lokal." },
  { text: "Pemerintah perlu membina kehidupan beragama agar semua umat dapat...", options: ["Bersaing", "Didayagunakan", "Dibedakan", "Dipisahkan"], correct: 1, hint: "Optimalisasi potensi umat." },
  { text: "Di Indonesia, selain agama resmi juga terdapat...", options: ["Aliran kepercayaan", "Agama asing", "Agama baru", "Sekte terlarang"], correct: 0, hint: "Penghayat kepercayaan." },

  // SOAL 21-30: Kewajiban Pemerintah
  { text: "Tugas pemerintah dalam membina kehidupan beragama berdasarkan penjelasan UUD 1945 tentang sila pertama dan Pasal 29 adalah...", options: ["Membiarkan", "Menjamin, melindungi, membina", "Melarang", "Mengabaikan"], correct: 1, hint: "Kewajiban aktif negara." },
  { text: "Pemerintah menjamin kebebasan tiap penduduk untuk...", options: ["Memeluk agama dan beribadat", "Berdemonstrasi", "Mogok kerja", "Membentuk partai"], correct: 0, hint: "Pasal 29 ayat 2." },
  { text: "Pemerintah berkewajiban melindungi kehidupan beragama agar tampak...", options: ["Rukun dan bergairah", "Bertentangan", "Terpecah", "Individualis"], correct: 0, hint: "Suasana harmonis." },
  { text: "Negara tidak mengatur dan mencampuri urusan...", options: ["Norma agama dan ibadah secara khusus", "Politik", "Ekonomi", "Pendidikan"], correct: 0, hint: "Ini hak mutlak setiap pemeluk agama." },
  { text: "Urusan norma agama atau ajaran agama serta ibadahnya secara khusus adalah hak...", options: ["Pemerintah", "Negara", "Setiap orang menurut keyakinannya", "MUI"], correct: 2, hint: "Prinsip kebebasan beragama." },
  { text: "Negara menjamin sepenuhnya akan...", options: ["Kemakmuran", "Kehidupan beragama", "Kekuasaan", "Kekayaan"], correct: 1, hint: "Fokus pada spiritual." },
  { text: "Pemerintah memberikan bimbingan dan pengarahan agar kehidupan beragama serasi dengan kebijakan pemerintah berdasarkan...", options: ["UUD 1945", "Pancasila", "Tap MPR", "Keputusan Presiden"], correct: 1, hint: "Dasar negara." },
  { text: "Peranan pemerintah dalam membina kehidupan beragama bertujuan agar semua umat dapat...", options: ["Ikut serta aktif mewujudkan tujuan pembangunan nasional", "Berdiam diri", "Berpikir sendiri", "Meninggalkan kewajiban"], correct: 0, hint: "Partisipasi dalam pembangunan." },
  { text: "Pemerintah wajib mengusahakan agar kehidupan beragama tumbuh dengan...", options: ["Subur", "Layu", "Tidak berkembang", "Mandek"], correct: 0, hint: "Dinamis dan progresif." },
  { text: "Kebijakan pemerintah dalam membina kehidupan beragama harus serasi dengan pembinaan...", options: ["Kehidupan berbangsa dan bernegara", "Ekonomi", "Politik praktis", "Hubungan luar negeri"], correct: 0, hint: "Holistik." },

  // SOAL 31-40: Peran Aktif dan Implementasi
  { text: "Tujuan akhir dari peranan pemerintah dalam membina kehidupan beragama adalah...", options: ["Mewujudkan tujuan pembangunan nasional", "Menguasai umat", "Membatasi kebebasan", "Menghapus perbedaan"], correct: 0, hint: "Mendukung cita-cita nasional." },
  { text: "Sikap yang harus dimiliki umat beragama dalam pembangunan nasional adalah...", options: ["Aktif ikut serta", "Pasif", "Acuh tak acuh", "Menghalangi"], correct: 0, hint: "Partisipasi aktif." },
  { text: "Kebebasan beragama di Indonesia memiliki batasan yaitu...", options: ["Tidak mengganggu ketertiban umum", "Bebas mutlak", "Tanpa aturan", "Sesuka hati"], correct: 0, hint: "Ada rambu-rambu sosial." },
  { text: "Negara bertindak sebagai... dalam kehidupan beragama di Indonesia.", options: ["Fasilitator dan pelindung", "Pemaksa", "Penguasa mutlak", "Penghalang"], correct: 0, hint: "Peran mendukung." },
  { text: "Salah satu bentuk peran aktif pemerintah dalam kehidupan beragama adalah...", options: ["Membangun tempat ibadah", "Melarang ibadah", "Memaksakan agama tertentu", "Mengabaikan umat"], correct: 0, hint: "Dukungan infrastruktur." },
  { text: "Kerukunan umat beragama sangat penting untuk mewujudkan...", options: ["Perpecahan", "Stabilitas nasional", "Konflik horizontal", "Kekacauan"], correct: 1, hint: "Kondisi damai." },
  { text: "Dalam membina kehidupan beragama, pemerintah harus bersikap...", options: ["Netral dan adil", "Memihak satu agama", "Diskriminatif", "Apatis"], correct: 0, hint: "Tidak pilih kasih." },
  { text: "Negara menjamin kebebasan beribadah bagi setiap penduduk sesuai dengan...", options: ["Agama dan kepercayaannya", "Peraturan pemerintah", "Keinginan presiden", "Kebiasaan setempat"], correct: 0, hint: "Pasal 29 ayat 2 UUD 1945." },
  { text: "Pemerintah berperan dalam mencegah... antaragama.", options: ["Konflik", "Kerjasama", "Dialog", "Toleransi"], correct: 0, hint: "Mediasi dan pembinaan." },
  { text: "Dengan adanya peranan aktif pemerintah, diharapkan tercipta kehidupan beragama yang...", options: ["Rukun, damai, dan harmonis", "Kacau dan tidak teratur", "Individualistis", "Tertutup"], correct: 0, hint: "Suasana kondusif." }
];

// Tambah 10 soal lagi untuk genap 50 soal (opsional)
const additionalQuestions = [
  { text: "Sila pertama Pancasila menjadi dasar bagi...", options: ["Kebebasan beragama", "Kebebasan berpendapat", "Kebebasan pers", "Kebebasan berserikat"], correct: 0, hint: "Landasan konstitusional beragama." },
  { text: "Pemerintah wajib menciptakan lingkungan yang... bagi perkembangan kehidupan beragama.", options: ["Kondusif", "Tidak ramah", "Mencekik", "Terbatas"], correct: 0, hint: "Mendukung." },
  { text: "Umat beragama diharapkan dapat... tujuan pembangunan nasional.", options: ["Mewujudkan", "Menghalangi", "Mengabaikan", "Menentang"], correct: 0, hint: "Sinergi." },
  { text: "Negara tidak boleh... urusan internal agama.", options: ["Mencampuri", "Melindungi", "Menjamin", "Membina"], correct: 0, hint: "Prinsip non-intervensi." },
  { text: "Kehidupan beragama yang rukun akan mendukung... bangsa.", options: ["Stabilitas", "Kehancuran", "Perpecahan", "Kemunduran"], correct: 0, hint: "Kondisi aman." }
];

// Gabungkan semua soal
const finalQuestions = [...allQuestions, ...additionalQuestions];

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