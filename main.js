
var currentQuestion = 0;
var questionContainerChilds;
const NUMBER_OF_QUESTIONS = 4;
let timeout;
function init() {
    questionContainerChilds = document.getElementsByClassName('question');
    questionContainerChilds[0].style.display = "block";
    timeout = setTimeout(() => {
        next();
    }, 10000);

    document.getElementById("next").addEventListener('click', () => { next() });
}

function next() {
    currentQuestion++;
    clearTimeout(timeout);
    if (currentQuestion < 2) {
        setTimeout(() => {
            next();
        }, 10000);
    }

    if (currentQuestion === NUMBER_OF_QUESTIONS - 1) {
        document.getElementById("next").innerText = 'Submit';
    }
    if (currentQuestion === NUMBER_OF_QUESTIONS) {
        document.quiz.submit();
    }
    goToNextItem(currentQuestion);
}


function goToNextItem(childNumber) {
    questionContainerChilds[childNumber - 1].style.display = 'none';
    questionContainerChilds[childNumber].style.display = 'block';
    const percentage = (100 / NUMBER_OF_QUESTIONS) * currentQuestion;
    document.getElementById('progress').style.width = percentage + '%';
}

window.onload = init;