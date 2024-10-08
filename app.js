var questions;
fetch('https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple')
    .then(data => data.json())
    .then((data) => {
        var quest = [
            {
                question: data.results[0].question,
                option1: data.results[0].incorrect_answers[0],
                option2: data.results[0].correct_answer,
                option3: data.results[0].incorrect_answers[2],
                correctOption: data.results[0].correct_answer
            },
            {
                question: data.results[1].question,
                option1: data.results[1].correct_answer,
                option2: data.results[1].incorrect_answers[1],
                option3: data.results[1].incorrect_answers[2],
                correctOption: data.results[1].correct_answer

            },
            {
                question: data.results[2].question,
                option1: data.results[2].incorrect_answers[0],
                option2: data.results[2].incorrect_answers[1],
                option3: data.results[2].correct_answer,
                correctOption: data.results[2].correct_answer

            },
            {
                question: data.results[3].question,
                option1: data.results[3].incorrect_answers[0],
                option2: data.results[3].correct_answer,
                option3: data.results[3].incorrect_answers[2],
                correctOption: data.results[3].correct_answer

            },
            {
                question: data.results[4].question,
                option1: data.results[4].incorrect_answers[0],
                option2: data.results[4].incorrect_answers[1],
                option3: data.results[4].correct_answer,
                correctOption: data.results[4].correct_answer

            },
            {
                question: data.results[5].question,
                option1: data.results[5].incorrect_answers[0],
                option2: data.results[5].incorrect_answers[1],
                option3:  data.results[5].correct_answer,
                correctOption: data.results[5].correct_answer

            },
            {
                question: data.results[6].question,
                option1: data.results[6].correct_answer,
                option2: data.results[6].incorrect_answers[1],
                option3: data.results[6].incorrect_answers[2],
                correctOption: data.results[6].correct_answer

            },
            {
                question: data.results[7].question,
                option1: data.results[7].incorrect_answers[0],
                option2: data.results[7].correct_answer,
                option3: data.results[7].incorrect_answers[2],
                correctOption: data.results[7].correct_answer

            },
            {
                question: data.results[8].question,
                option1: data.results[8].incorrect_answers[0],
                option2: data.results[8].correct_answer,
                option3: data.results[8].incorrect_answers[2],
                correctOption: data.results[8].correct_answer

            },
            {
                question: data.results[9].question,
                option1: data.results[9].incorrect_answers[0],
                option2: data.results[9].incorrect_answers[1],
                option3: data.results[9].correct_answer,
                correctOption: data.results[9].correct_answer

            }

        ]

        questions = quest


        nextQuestion()


    })


    .catch(data => console.log(data))



var ques = document.getElementById('question')
var index = 0
var btn = document.getElementById('btn')
var score = 0
var opt1 = document.getElementById('opt1')
var opt2 = document.getElementById('opt2')
var opt3 = document.getElementById('opt3')




var arr;
var interval;
var getmin = document.getElementById('min')
var getsec = document.getElementById('sec')
var min = 4
var sec = 60


interval = setInterval(function () {
    sec--
    getsec.innerHTML = sec
    if (sec < 0) {
        min--
        getmin.innerHTML = min
        sec = 60
        getsec.innerHTML = sec
    }
    else if (min == 0 && sec == 0) {
        arr = (score / questions.length) * 100
        sessionStorage.setItem('scoress', arr)
        location.href = 'result.html'
    }
}, 1000)

setTimeout(function () {
    clearInterval(interval)
}, 300000)



function nextQuestion() {
    var options = document.getElementsByName('ans')
    for (var i = 0; i < options.length; i++) {

        if (options[i].checked) {
            var selectedNumber = options[i].value
            var selectedAnswer = questions[index - 1][`option${selectedNumber}`]
            var correctOption = questions[index - 1].correctOption
            if (selectedAnswer == correctOption) {
                score++
            }

        }
        options[i].checked = false
        btn.disabled = true
    }
    if (index > questions.length - 1) {
        clearInterval(interval)
        arr = (score / questions.length) * 100
        sessionStorage.setItem('scoress', arr)
        location.href = 'result.html'
    }
    else {
        ques.innerText = questions[index].question
        opt1.innerText = questions[index].option1
        opt2.innerText = questions[index].option2
        opt3.innerText = questions[index].option3
        index++
    }


}

function btnClick() {
    btn.disabled = false
}