'use strict';

function handleStartQuizClicked() {
    console.log('start quiz');
}

function handleSubmitAnswerSubmit() {
    console.log('submited answer');
}

function handleNextQuestionClicked() {
    console.log('next question');
}

function handleTakeQuizAgainClicked() {
    console.log('taking quiz again');
}

function handleExitClicked() {
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