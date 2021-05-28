const startContainer = document.querySelector(".start-container");
const questionContainer = document.querySelector(".question-container");
const scoreContainer = document.querySelector(".my-score");
const player = document.querySelector("#player");
const scoreText = document.querySelector("#score");
const startBtn = document.querySelector("#play");
const optionText = document.querySelectorAll(".choices .btn");
const questionText = document.querySelector("#question");

const questions = [
  {
    question: "¿Quién fue el primer presidente de Estados Unidos?",
    option: ["George Washington", "Barack Obama", "Thomas Jefferson", "Nicolas Tesla"],
    answer: "George Washington"
  },
  {
    question: "¿Cuál es la flor nacional de Japón?",
    option: ["Cantua buxifolia", "Crisantemo", "Camomila", "Hibiscus syriacus"],
    answer: "Crisantemo"
  },
  {
    question: "¿De qué ciudad son originarios los Beatles?",
    option: ["Queens", "Manchester", "Liverpool", "Boston"],
    answer: "Liverpool"
  }
]

const numberOfQuestions = 3;
let SCORE = 0;
let currentPlayer = "";

function startGame() {
  startBtn.addEventListener('click', () => {
    currentPlayer = document.querySelector(".input-player").value;
    player.innerHTML = currentPlayer;
    startContainer.classList.add("hidecover");
    questionContainer.classList.remove("hidecover");
    currentQuestion = 0;
    setNewQuestion();
  })
};

function setNewQuestion() {


  if (currentQuestion >= 3) {

    // Hide question-container and show score-container

    questionContainer.classList.add("hidecover");
    scoreContainer.classList.remove("hidecover");

    // Display the score

    scoreText.innerText = SCORE;

  } else {

    // Show question on screen 

    questionText.innerText = questions[currentQuestion].question;
    for (i = 0; i < 4; i++) {
      optionText[i].innerText = questions[currentQuestion].option[i]
    };
    optionText.forEach(btn => {
      btn.addEventListener('click', onClickOnThisButton)
    })
    currentQuestion += 1;
  }
}


function onClickOnThisButton() {
  if (this.textContent == questions[currentQuestion - 1].answer) {
    SCORE += 100;
    setNewQuestion();
  } else {
    setNewQuestion();
  }
}


startGame();
