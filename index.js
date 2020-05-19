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
    optionA: { answer: "three", isCorrect: false },
    optionB: { answer: "six", isCorrect: false },
    optionC: { answer: "one", isCorrect: true },
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
    question: "Who was the first starting quarterback for the Seahawks?",
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

const finalScoreMessages = ["So what planet are you from again?",
  "I see you've just arrived in Seattle. Welcome!", 
  "Hop on! There's always more room on the bandwagon!",
  "You've been lovin' the Seahawks since 2012!",
  "You love your Seahawks!",
  "You're a true Hawks fan! You bleed green and blue!"];

const score = { correct: 0, incorrect: 0 };
let indexOfQuestion = 0;

function resetQuiz() {
  indexOfQuestion = 0;
  score.correct = 0;
  score.incorrect = 0;
}

function generateQuestionsView(question) {
  return `
    <header>
      <h1>${question.question}</h1>
    </header>
    <main class="js-main">
      <form class="js-form">
        <div class="question-number-and-score">
          <p>Question ${questions.indexOf(question) + 1} of 5</p><br>
          <p> ${score.correct} correct</p>
          <p> ${score.incorrect} incorrect</p>
        </div>
        <div class="questions-flex">
          <div class="quiz-questions">
            <input type="radio" id="option1" name="answer" value="${question.optionA.answer}">
            <label for="option1" class="js-option1">${question.optionA.answer}</label>
          </div>
          <div class="quiz-questions">
            <input type="radio" id="option2" name="answer" value="${question.optionB.answer}">
            <label for="option2" class="js-option2">${question.optionB.answer}</label>
          </div>
          <div class="quiz-questions">
            <input type="radio" id="option3" name="answer" value="${question.optionC.answer}">
            <label for="option3" class="js-option3">${question.optionC.answer}</label>
          </div>
          <div class="quiz-questions">
            <input type="radio" id="option4" name="answer" value="${question.optionD.answer}">
            <label for="option4" class="js-option4">${question.optionD.answer}</label>
          </div>
        </div>
        <button type="submit" onclick="handleSubmitAnswerSubmit()">Enter</button>
      </form>
    </main>`;
}

function handleStartQuizClicked() {
  $('.js-form').on('click', '.js-start-quiz-button', function (event) {
    event.stopPropagation();
    resetQuiz();
    $('.js-body').html(generateQuestionsView(questions[indexOfQuestion]));
  });
}

function generateAnswerResultView(userChoice, correctAnswer) {
  return `
    <header class="js-header">
      <h1>${userChoice.isCorrect ? 'Yes!' : 'Oops!' }</h1>
    </header>
    <main class="js-main">
      <form class="js-form">
        <p>The correct answer is</p>
        <p class="form-correct-answer"> ${correctAnswer} </p>
        <button type="button" onclick="handleNextQuestionClicked()">Next</button>
      </form>
    </main>`;
}

function findUserChoice(userSelection) {
  if (questions[indexOfQuestion].optionA.answer === userSelection) {
    return questions[indexOfQuestion].optionA;
  } else if (questions[indexOfQuestion].optionB.answer === userSelection) {
    return questions[indexOfQuestion].optionB;
  } else if (questions[indexOfQuestion].optionC.answer === userSelection) {
    return questions[indexOfQuestion].optionC;
  } else {
    return questions[indexOfQuestion].optionD;
  }
}

function getCorrectAnswer() {
  if (questions[indexOfQuestion].optionA.isCorrect) {
    return questions[indexOfQuestion].optionA.answer;
  } else if (questions[indexOfQuestion].optionB.isCorrect) {
    return questions[indexOfQuestion].optionB.answer;
  } else if (questions[indexOfQuestion].optionC.isCorrect) {
    return questions[indexOfQuestion].optionC.answer;
  } else {
    return questions[indexOfQuestion].optionD.answer;
  }
}

function updateScore(userChoice) {
  if (userChoice.isCorrect) {
    score.correct++;
  }
  else {
    score.incorrect++;
  }
}

function handleSubmitAnswerSubmit() {
  $('.js-form').submit(function () {
    const userSelection = $('input:checked').val();
    if (userSelection === undefined) {
      alert('Please select an answer');
      $('.js-body').html(generateQuestionsView(questions[indexOfQuestion]));
      return false;
    }
    const userChoice = findUserChoice(userSelection);
    const correctAnswer = getCorrectAnswer();
    updateScore(userChoice);
    $('.js-body').html(generateAnswerResultView(userChoice, correctAnswer));
    if (!userChoice.isCorrect) {
      $('.js-header').addClass('incorrect-answer');
    }
  });
}

function generateFinalResultsView() {
  return `
    <header>
      <h1>All done!</h1>
    </header>
    <main class="js-main">
      <form class="js-form">
        <div class="score">
          <p class="score-results">Score: </p><br>
          <p> ${score.correct} correct</p>
          <p> ${score.incorrect} incorrect</p>
        </div>
        <div>
          <p class="final-score-message">${finalScoreMessages[score.correct]}</P>
        </div>
        <button type="button" class="js-take-again" onclick="handleTakeQuizAgainClicked()">Take again!</button>
        <button type="button" class="js-exit" onclick="handleExitClicked()">Exit</button>
      </form>
    </main>`;
}

function handleNextQuestionClicked() {
  $('.js-form').on('click', function (event) {
    indexOfQuestion++;
    if (indexOfQuestion < questions.length) {
      $('.js-body').html(generateQuestionsView(questions[indexOfQuestion]));
    } else {
      $('.js-body').html(generateFinalResultsView);
    }
  });
}

function handleTakeQuizAgainClicked() {
  $('.js-form').on('click', '.js-take-again', function () {
    resetQuiz();
    $('.js-body').html(generateQuestionsView(questions[indexOfQuestion]));
  });
}

function generateHomepageView() {
  return `
    <header>
      <h1>Welcome!</h1>
    </header>
    <main class="js-main">
      <form class="js-form">
        <p>Take the Seattle Seahawks quiz!</p>
        <button type="button" class="js-start-quiz-button" onclick="handleStartQuizClicked()">Start</button>
      </form>
    </main>`;
}

function handleExitClicked() {
  $('.js-form').on('click', '.js-exit', function () {
    $('.js-body').html(generateHomepageView);
  });
}

function handleQuizApp() {
  handleStartQuizClicked();
  handleSubmitAnswerSubmit();
  handleNextQuestionClicked();
  handleTakeQuizAgainClicked();
  handleExitClicked();
}

$(handleQuizApp);