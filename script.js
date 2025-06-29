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

const END_GAME_DELAY = 1500; // 1.5 detik

let shuffledQuestions, currentQuestionIndex;
let score = 0;

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
    const isCorrect = selectedButton.dataset.correct === "true";

    // Tambah skor jika jawaban benar
    if (isCorrect) {
        score++;
        selectedButton.classList.add('correct'); // Tandai pilihan yang benar
    } else {
        selectedButton.classList.add('wrong'); // Tandai pilihan yang salah
    }

    // Nonaktifkan semua tombol dan tunjukkan mana jawaban yang benar
    Array.from(answerButtonsElement.children).forEach(button => {
        // Jika tombol ini adalah jawaban yang benar, beri class 'correct'
        if (button.dataset.correct === "true") {
            button.classList.add('correct');
        }
        button.disabled = true; // Nonaktifkan tombol
    });

    // Logika untuk menampilkan tombol berikutnya atau mengakhiri game
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        // Jeda sebelum menampilkan hasil akhir
        // Ganti 1500 dengan konstanta
        setTimeout(endGame, END_GAME_DELAY); 
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
