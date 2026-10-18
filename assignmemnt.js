
const questions = [
  {
    question: "What is my name?",
    correctAnswer: "Osa",
    incorrectAnswers: ["Metzy", "Ashlee", "Alicja"]
  },
  {
    question: "Which planet are we on?",
    correctAnswer: "Earth",
    incorrectAnswers: ["Venus", "Pluto", "Mars"]
  },
  {
    question: "Who sings CRANK?",
    correctAnswer: "Slayyyter",
    incorrectAnswers: ["Doechi", "Beyonce", "Charli XCX"]
  },
  {
    question: "What is the best social media app?",
    correctAnswer: "TikTok",
    incorrectAnswers: ["Snapchat", "Instagram", "Facebook"]
  },
  {
    question: "Who wrote the novel Carrie?",
    correctAnswer: "Stephen King",
    incorrectAnswers: ["Raina Telgemeier", "Jack Sparrow", "R. F. Kuang"]
  },
  {
    question: "What is the chemical symbol for water?",
    correctAnswer: "H2O",
    incorrectAnswers: ["CO2", "O2", "NaCl"]
  },
  {
    question: "How many days are in a leap year?",
    correctAnswer: "366",
    incorrectAnswers: ["364", "365", "367"]
  },
  {
    question: "What mall clothing store is having their runway show at the moment?",
    correctAnswer: "Victoria's Secret",
    incorrectAnswers: ["H&M", "Urban Planet", "ZARA"]
  },
  {
    question: "What year did the Titanic sink?",
    correctAnswer: "1912",
    incorrectAnswers: ["2026", "1911", "1945"]
  },
  {
    question: "Who painted the Mona Lisa?",
    correctAnswer: "Leonardo da Vinci",
    incorrectAnswers: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet"]
  }
];

let correctCount = 0;
let totalAnswered = 0;

const questionContainer = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const scoreDisplay = document.getElementById("score");
const feedbackDisplay = document.getElementById("feedback");
const newQuestionButton = document.getElementById("new-question");

//will get a random question from the array
function getRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

//updates the score on the page
function updateScore() {
  scoreDisplay.textContent = `Score: ${correctCount} / ${totalAnswered}`;
}

//displaya a new question and its answer buttons
function renderQuestion() {
  const question = getRandomQuestion();

  questionContainer.textContent = "";
  answersContainer.textContent = "";
  feedbackDisplay.textContent = "";

  //displays the question
  const questionText = document.createElement("p");
  questionText.textContent = question.question;
  questionContainer.appendChild(questionText);

  //combines the correct and incorrect answers
  const allAnswers = [
    question.correctAnswer,
    ...question.incorrectAnswers
  ];

  //shuffles answer choices
  allAnswers.sort(() => Math.random() - 0.5);

  //creates an answer button for each choice
  allAnswers.forEach(answer => {
    const answerButton = document.createElement("button");
    answerButton.textContent = answer;

    answerButton.addEventListener("click", function () {
      // Disable all answer buttons after one selection
      const buttons = answersContainer.querySelectorAll("button");

      buttons.forEach(button => {
        button.disabled = true;
      });

      totalAnswered++;

      if (answer === question.correctAnswer) {
        correctCount++;
        feedbackDisplay.textContent = "Correct!";
        feedbackDisplay.style.color = "green";
      } else {
        feedbackDisplay.textContent =
          `Incorrect! The correct answer is: ${question.correctAnswer}`;
        feedbackDisplay.style.color = "red";
      }

      updateScore();
    });

    answersContainer.appendChild(answerButton);
  });
}

//to load new question
newQuestionButton.addEventListener("click", renderQuestion);

//displays everything
updateScore();
