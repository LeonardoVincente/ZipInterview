

function init() {
    let queryParams = getQueryParams();
    let answers1 = ["Hermit", "Sociable", "Serious", "Grumpy", "do not know yet"];
    let answerOneElement = document.getElementById("ans1");
    answers1.forEach(answer => {
        let newElement = document.createElement("span");
        newElement.innerText = answer;
        if (queryParams.q1 && queryParams.q1[0] && answer == queryParams.q1[0]) {
            newElement.style.color = 'green';
        }
        answerOneElement.appendChild(newElement);
    });

    answerOneElement = document.getElementById("ans2");
    let answers2 = ['AngularJS', 'Ember', 'VueJS', 'Java', 'C#'];
    let answer2RightAnswer = 'AngularJS';

    answers2.forEach(answer => {
        let newElement = document.createElement("span");
        newElement.innerText = answer;
        if (queryParams.q2) {
            if (queryParams.q2.includes(answer2RightAnswer) && answer === answer2RightAnswer) {
                newElement.style.color = 'green';
            }

        }
        answerOneElement.appendChild(newElement);
    });


    if (queryParams.q3) {
        answerOneElement = document.getElementById("ans3");
        let newElement = document.createElement("span");
        newElement.innerText = queryParams.q3[0];
        newElement.style.color = 'red';
        if (checkIfPolindrome(newElement.innerText)) {
            newElement.style.color = 'green';
        }
        answerOneElement.appendChild(newElement);
    }

    if (queryParams.q4) {
        answerOneElement = document.getElementById("ans4");
        let newElement = document.createElement("span");
        let txt1 = queryParams.q4[0];
        let txt2 = queryParams.q4[1];
        resultText = 'wrong';
       
        if (compareTwoStrings(txt1, txt2)) {
            resultText = 'correct';
        }
        newElement.innerText = `${txt1} reverse ${txt2} is: ${resultText}`;
        answerOneElement.appendChild(newElement);
    }

}


function compareTwoStrings(str1, str2) {
    str2 = str2.split('').reverse().join('');
    return str1.localeCompare(str2) === 0;
}

function checkIfPolindrome(text) {
    const textLength = text.length;
    for (let i = 0; i < textLength / 2; i++) {
        if (text.charAt(i) != text.charAt(textLength - 1 - i)) {
            return false;
        }
    }
    return true;
}

function getQueryParams() {

    var url = window.location.href;
    var params = {};
    var parser = document.createElement('a');
    parser.href = url;
    var query = parser.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (!params.hasOwnProperty(pair[0])) {
            params[pair[0]] = [];
        }
        params[pair[0]].push(decodeURIComponent(pair[1]));
    }
    return params;
}

window.onload = init;