'use strict';

function handleStartQuizClicked() {
    //Listen for when a user clicks the 'Start' button.
    //Load 1st questions object into the questions.html file.
    //Update Window with questions.html file.
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



function handleQuizApp() {
    handleStartQuizClicked();
    handleSubmitAnswerSubmit();
    handleNextQuestionClicked();
    handleTakeQuizAgainClicked();
    handleExitClicked();
}

$(handleQuizApp);