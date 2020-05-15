'use strict';

const question1 = {
    question: "Who is the Seahawks current head coach?",
    optionA: { answer: "Bill Belicheck", isCorrect: false },
    optionB: { answer: "Chuck Knox", isCorrect: false },
    optionC: { answer: "Pete Carroll", isCorrect: true },
    optionD: { answer: "Micheal Jordan", isCorrect: false }
};

const question2 = {
    question: "How many Superbowls have the Seahawks won?",
    optionA: { answer: "3", isCorrect: false },
    optionB: { answer: "6", isCorrect: false },
    optionC: { answer: "1", isCorrect: true },
    optionD: { answer: "none", isCorrect: false }
};

const question3 = {
    question: "What was the first year the Seahawks made the playoffs?",
    optionA: { answer: "2012", isCorrect: false },
    optionB: { answer: "1983", isCorrect: true },
    optionC: { answer: "1976", isCorrect: false },
    optionD: { answer: "The Seahawks have never made the playoffs", isCorrect: false }
};

const question4 = {
    question: "Who was the first starting quarterback for your Seattle Seahawks?",
    optionA: { answer: "Jon Kitna", isCorrect: false },
    optionB: { answer: "Tom Brady", isCorrect: false },
    optionC: { answer: "Russell Wilson", isCorrect: false },
    optionD: { answer: "Jim Zorn", isCorrect: true }
};

const question5 = {
    question: "What Seahawk has the nickname 'Beast Mode'?",
    optionA: { answer: "Marshawn Lynch", isCorrect: true },
    optionB: { answer: "Kam Chancellor", isCorrect: false },
    optionC: { answer: "Chris Carson", isCorrect: false },
    optionD: { answer: "Blitz", isCorrect: false },
};

const questions = [question1, question2, question3, question4, question5];
const score = { correct: 0, incorrect: 0 };
let indexOfQuestion = 0;

function resetQuiz() {
  indexOfQuestion = 0;
  score.correct = 0;
  score.incorrect = 0;
}

function renderQuestionsView(question) {
  $('.js-main').html(`
    <div class="top-portion">
      <h1>${question.question}</h1>
      <p>Question ${questions.indexOf(question) + 1} of 5</p>
      <p>Score: ${score.correct}</span> correct  ${score.incorrect} incorrect</p>
    </div>
    <form class="js-form">
      <div class="questions-flex">
        <div>
          <input type="radio" id="option1" name="answer" value="${question.optionA.answer}">
          <label for="option1" class="js-option1">${question.optionA.answer}</label>
        </div>
        <div>
          <input type="radio" id="option2" name="answer" value="${question.optionB.answer}">
          <label for="option2" class="js-option2">${question.optionB.answer}</label>
        </div>
        <div>
          <input type="radio" id="option3" name="answer" value="${question.optionC.answer}">
          <label for="option3" class="js-option3">${question.optionC.answer}</label>
        </div>
        <div>
          <input type="radio" id="option4" name="answer" value="${question.optionD.answer}">
          <label for="option4" class="js-option4">${question.optionD.answer}</label>
        </div>
      </div>
      <button type="submit" onclick="handleSubmitAnswerSubmit()">Enter</button>
    </form>`);
}

function handleStartQuizClicked() {
  $('.js-form').on('click', '.js-start-quiz-button', function (event) {
    event.stopPropagation();
    resetQuiz();
    renderQuestionsView(questions[indexOfQuestion]);
  });
  console.log('start quiz');
}

function renderAnswerResultView(userChoice, correctAnswer) {
  $('.js-main').html(
    `<div class="top-portion">
      <h1>${userChoice.isCorrect ? 'Yes!' : 'Opps!'}</h1>
    </div>
    <form class="js-form">
      <p>The correct answer is ${correctAnswer}</p>
      <button type="button" onclick="handleNextQuestionClicked()">Next</button>
    </form>`);
}

function findUserChoice(userSelection) {
  if (questions[indexOfQuestion].optionA.answer === userSelection) { return questions[indexOfQuestion].optionA; }
  else if (questions[indexOfQuestion].optionB.answer === userSelection) { return questions[indexOfQuestion].optionB; }
  else if (questions[indexOfQuestion].optionC.answer === userSelection) { return questions[indexOfQuestion].optionC; }
  else { return questions[indexOfQuestion].optionD; }
}

function getCorrectAnswer() {
  if (questions[indexOfQuestion].optionA.isCorrect) { return questions[indexOfQuestion].optionA.answer; }
  else if (questions[indexOfQuestion].optionB.isCorrect) { return questions[indexOfQuestion].optionB.answer; }
  else if (questions[indexOfQuestion].optionC.isCorrect) { return questions[indexOfQuestion].optionC.answer; }
  else { return questions[indexOfQuestion].optionD.answer; }
}

function updateScore(userChoice) {
  if (userChoice.isCorrect) { score.correct++ }
  else { score.incorrect++ }
}

function handleSubmitAnswerSubmit() {
  $('.js-form').submit(function (event) {
    const userSelection = $('input:checked').val();
    const userChoice = findUserChoice(userSelection);
    const correctAnswer = getCorrectAnswer();
    updateScore(userChoice);
    renderAnswerResultView(userChoice, correctAnswer);
  });

  console.log('submited answer');
}

function renderFinalResultsView() {
  $('.js-main').html(`
    <div class="top-portion">
      <h1>All done!</h1>
    </div>
    <form class="js-form">
      <p>Score</p>
      <div class="score">
        <p class="score-results">Score: ${score.correct} correct ${score.incorrect} incorrect</p>
      </div>
      <button type="button" class="js-take-again" onclick="handleTakeQuizAgainClicked()">Take again!</button>
      <button type="button" class="js-exit" onclick="handleExitClicked()">Exit</button>
    </form>`);
}

function handleNextQuestionClicked() {
  $('.js-form').on('click', function (event) {
    indexOfQuestion++;
    if (indexOfQuestion < questions.length) { renderQuestionsView(questions[indexOfQuestion]); }
    else { alert('im here'); renderFinalResultsView(); }
  });
  console.log('next question');
}

function handleTakeQuizAgainClicked() {
  $('.js-form').on('click', '.js-take-again', function () {
    resetQuiz();
    renderQuestionsView(questions[indexOfQuestion]);
  });
  //Listen for when a user clicks the 'Take Agian' button.
  //Load 1st questions object into the questions.html file.
  //Update Window with the questions.html file.
  console.log('taking quiz again');
}

function renderHomepage() {
  $('.js-main').html(`
    <div class="top-portion">
      <h1>Welcome!</h1>
    </div>
    <form class="js-form">
      <p>Take the Seattle Seahawks quiz!</p>
      <button type="button" class="js-start-quiz-button" onclick="handleStartQuizClicked()">Start!</button>
    </form>`);
}

function handleExitClicked() {
  $('.js-form').on('click', '.js-exit', function () {
    alert('inside handleExitClicked');
    renderHomepage();
  });
  //Listen for when a user clicks the 'Exit' button.
  //Update Window with the index.html file.
  console.log('exited quiz');
}

function handleQuizApp() {
  handleStartQuizClicked();
  handleSubmitAnswerSubmit();
  handleNextQuestionClicked();
  handleTakeQuizAgainClicked();
  handleExitClicked();
}

$(handleQuizApp);