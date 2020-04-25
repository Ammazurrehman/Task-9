window.onload = function () {
    show(0);
}
let questions = [
    {
        question: "Urdu was declared national language of Pakistan in:",
        answer: " April 1954",
        options: [
            "April 1950",
            "April 1955",
            " April 1954",
            "April 1952"
        ]
    },
    {
        question: "In which province maximum languages are spoken?",
        answer: "Balochistan",
        options: [
            " Sindh",
            "Punjab",
            "Balochistan",
            "Khyber PK"
        ]
    },
    {
        question: "Which Urdu has been taken from the following language:",
        answer: "Turkish",
        options: [
            "Persian",
            " Arabic",
            "Turkish",
            "None of these"
        ]
    },
    {
        question: "Which Urdu has been taken from the following language:",
        answer: "Turkish",
        options: [
            "Persian",
            " Arabic",
            "Turkish",
            "None of these"
        ]
    },
    {
        question: "One-hour difference in local time between two places is equal",
        answer: " 15° longitude",
        options: [
            "10° longitude",
            "15° longitude",
            "15° latitude",
            "None of these"
        ]
    },
    {
        question: "Local time at a place is 6 a.m. when G.M.T is 3 a.m. the longitude ",
        answer: "45 degrees east",
        options: [
            "45 degrees east",
            "45 degrees west ",
            "120 degrees east",
            "None of these"
        ]
    },
    {
        question: "Which Urdu has been taken from the following language:",
        answer: "Turkish",
        options: [
            "Persian",
            " Arabic",
            "Turkish",
            "None of these"
        ]
    },
    {
        question: "Upto about 50 km from the surface of earth the atmosphere consist",
        answer: " 21% oxygen and 78% nitrogen",
        options: [
            " 78% oxygen and 21% nitrogen",
            " 21% oxygen and 78% nitrogen",
            " 68% oxygen and 32% nitrogen",
            "None of these"
        ]
    },
    {
        question: "Name the instrument used for measuring humidity",
        answer: " Hygrometer",
        options: [
            " Barometer",
            "Thermometer",
            "Hygrometer",
            "None of these"
        ]
    },
    {
        question: "Weather phenomena take place in which of the following layer",
        answer: "Troposphere",
        options: [
            "Stratosphere",
            "Troposphere",
            "Mesosphere",
            "None of these"
        ]
    }




]
let question_count = 0;
let point = 0;
function next() {
    let user_answer = document.querySelector('button.btnnn.active').innerHTML;


    if (user_answer == questions[question_count].answer) {
        point += 10;
        sessionStorage.setItem("Points", point);
    }
    if (question_count == questions.length - 1) {
        location.href = "end.html";
        return;
    }



    //answer checking to confirm its right or wrong
    question_count++;
    show(question_count);
    console.log(question_count);
}

function show(count) {
    let questionss = document.getElementById("question");

    questionss.innerHTML = `<h2>Q${question_count+1}. ${questions[count].question}  </h2>
    <div class="btn">
    <button class="btnnn">${questions[count].options[0]}</button>
    <button class="btnnn">${questions[count].options[1]}</button>
    <button class="btnnn">${questions[count].options[2]}</button>
    <button class="btnnn">${questions[count].options[3]}</button>
</div>

<div class="score">Question ${question_count+1} of 10</div>
`;
    toggleactive();
}
// name function to start quiz

function submitform() {


    let name = document.getElementById('inp1').value;
    // let name = document.forms['welcome']['form1'].value;
    sessionStorage.setItem('Name', name);
    location.href = "quizz.html";
}

//adding active class to options

function toggleactive() {
    let option = document.querySelectorAll('button.btnnn');
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (let j = 0; j < option.length; j++) {
                if (option[j].classList.contains("active")) {
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}


