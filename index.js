'use strict';

const question1 = {
    question: "Who is the Seahawks current head coach?",
    optiionA: { answer: "Bill Belicheck", isCorrect: false },
    optiionB: { answer: "Chuck Knox", isCorrect: false },
    optiionC: { answer: "Pete Carroll", isCorrect: true },
    optiionD: { answer: "Micheal Jordan", isCorrect: false }
};

const question2 = {
    question: "How many Superbowls have the Seahawks won?",
    optiionA: { answer: "3", isCorrect: false },
    optiionB: { answer: "6", isCorrect: false },
    optiionC: { answer: "1", isCorrect: true },
    optiionD: { answer: "none", isCorrect: false }
};

const question3 = {
    question: "What was the first year the Seahawks made the playoffs?",
    optiionA: { answer: "2012", isCorrect: false },
    optiionB: { answer: "1983", isCorrect: true },
    optiionC: { answer: "1976", isCorrect: false },
    optiionD: { answer: "The Seahawks have never made the playoffs", isCorrect: false }
};

const question4 = {
    question: "Who was the first starting quarterback for your Seattle Seahawks?",
    optiionA: { answer: "Jon Kitna", isCorrect: false },
    optiionB: { answer: "Tom Brady", isCorrect: false },
    optiionC: { answer: "Russell Wilson", isCorrect: false },
    optiionD: { answer: "Jim Zorn", isCorrect: true }
};

const question5 = {
    question: "What Seahawk has the nickname 'Beast Mode'?",
    optiionA: { answer: "Marshawn Lynch", isCorrect: true },
    optiionB: { answer: "Kam Chancellor", isCorrect: false },
    optiionC: { answer: "Chris Carson", isCorrect: false },
    optiionD: { answer: "Blitz", isCorrect: false },
};

const questions = [question1, question2, question3, question4, question5];

const score = {correct: 0, incorrect: 0}

function loadQuestion(question) {
  $('main').html(`
    <div class="top-portion">
      <h1 class="js-quiz-question">${question.question}</h1>
      <p>Question <span class="js-question-number">${questions.indexOf(question) + 1}</span>of 5</p>
      <p>Score: ${score.correct}</span> correct  ${score.incorrect} incorrect</p>
    </div>
    <form>
      <div class="questions-flex">
        <div>
          <input type="radio" id="option1" name="answer">
          <label for="option1" class="js-option1">${question.optiionA.answer}</label>
        </div>
        <div>
          <input type="radio" id="option2" name="answer">
          <label for="option2" class="js-option2">${question.optiionB.answer}</label>
        </div>
        <div>
          <input type="radio" id="option3" name="answer">
          <label for="option3" class="js-option3">${question.optiionC.answer}</label>
        </div>
        <div>
          <input type="radio" id="option4" name="answer">
          <label for="option4" class="js-option4">${question.optiionD.answer}</label>
        </div>
      </div>
      <input type="button" value="Submit">
    </form>`);
}

function handleStartQuizClicked() {
  //Listen for when a user clicks the 'Start' button.
  $('.js-start-quiz-button').on('click', function () {
    //Load the first questions object into the questions.html file.
    loadQuestion(question1);
  });
  console.log('start quiz');
}

function handleSubmitAnswerSubmit() {
    //Listen for when a users submit their answer.
  
    //Track score.
    //Update answer-result.html file
    //Update Window with answer-result.html
    console.log('submited answer');
}

function handleNextQuestionClicked() {
    //Listen for when a user clicks the 'Next Question' button.
    //Load next questions object into the questions.html file.
    console.log('next question');
}

function handleTakeQuizAgainClicked() {
    //Listen for when a user clicks the 'Take Agian' button.
    //Load 1st questions object into the questions.html file.
    //Update Window with the questions.html file.
    console.log('taking quiz again');
}

function handleExitClicked() {
    //Listen for when a user clicks the 'Exit' button.
    //Update Window with the index.html file.
    console.log('exited quiz');
}

//handleStartQuizClicked();

function handleQuizApp() {
    handleStartQuizClicked();
    handleSubmitAnswerSubmit();
    handleNextQuestionClicked();
    handleTakeQuizAgainClicked();
    handleExitClicked();
}

$(handleQuizApp);