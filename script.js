const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const restartButton = document.getElementById('restart-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question-text');
const answerButtonsElement = document.getElementById('answer-buttons');
const controlsElement = document.getElementById('controls');
const resultAreaElement = document.getElementById('result-area');
const scoreElement = document.getElementById('score');
const totalQuestionsElement = document.getElementById('total-questions');

let shuffledQuestions, currentQuestionIndex;
let score = 0;

// Daftar Pertanyaan (Anda bisa menambahkan lebih banyak)
const questions = [
    {
        question: "Siapakah Nabi terakhir dalam ajaran Islam?",
        answers: [
            { text: "Nabi Isa AS", correct: false },
            { text: "Nabi Muhammad SAW", correct: true },
            { text: "Nabi Musa AS", correct: false },
            { text: "Nabi Ibrahim AS", correct: false }
        ]
    },
    {
        question: "Berapa jumlah Rukun Islam?",
        answers: [
            { text: "3", correct: false },
            { text: "5", correct: true },
            { text: "6", correct: false },
            { text: "7", correct: false }
        ]
    },
    {
        question: "Kitab suci umat Islam adalah...",
        answers: [
            { text: "Injil", correct: false },
            { text: "Taurat", correct: false },
            { text: "Zabur", correct: false },
            { text: "Al-Qur'an", correct: true }
        ]
    },
    {
        question: "Puasa di bulan Ramadhan termasuk Rukun Islam yang ke berapa?",
        answers: [
            { text: "Kedua", correct: false },
            { text: "Ketiga", correct: false },
            { text: "Keempat", correct: true },
            { text: "Kelima", correct: false }
        ]
    },
    {
        question: "Shalat lima waktu yang pertama kali dikerjakan dalam sehari adalah shalat...",
        answers: [
            { text: "Dzuhur", correct: false },
            { text: "Subuh", correct: true },
            { text: "Maghrib", correct: false },
            { text: "Isya", correct: false }
        ]
    }
];

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});
restartButton.addEventListener('click', startGame);

function startGame() {
    score = 0;
    startButton.classList.add('hide');
    resultAreaElement.classList.add('hide');
    restartButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5); // Acak urutan pertanyaan
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    controlsElement.classList.remove('hide'); // Pastikan kontrol terlihat
    nextButton.classList.remove('hide'); // Tampilkan tombol next
    totalQuestionsElement.innerText = questions.length;
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion(shuffledQuestions[currentQuestionIndex]);
    } else {
        endGame();
    }
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";

    if (correct) {
        score++;
    }

    setStatusClass(selectedButton, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct === "true");
        button.disabled = true; // Nonaktifkan semua tombol setelah menjawab
    });

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        // Tidak ada pertanyaan lagi, tampilkan hasil setelah jeda singkat
        // atau langsung tampilkan tombol lihat hasil
        nextButton.classList.add('hide'); // Sembunyikan tombol next jika ini pertanyaan terakhir
        // Tampilkan tombol untuk melihat hasil atau langsung panggil endGame
        setTimeout(endGame, 1500); // Jeda sebelum menampilkan hasil
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function endGame() {
    questionContainerElement.classList.add('hide');
    nextButton.classList.add('hide');
    controlsElement.classList.add('hide'); // Sembunyikan kontrol utama
    resultAreaElement.classList.remove('hide');
    restartButton.classList.remove('hide');
    scoreElement.innerText = score;
}