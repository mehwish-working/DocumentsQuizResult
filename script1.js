const quizData = [{
    question: "What is a class in Java?",
    a: " A data type",
    b: "A blueprint for creating objects",
    c: "An instance of an object",
    d: "A type of method",
    correct: "b",
},
{
    question: "What is an object in Java?",
    a: "A blueprint for creating classes",
    b: "An instance of a class",
    c: "A method inside a class",
    d: "A variable type",
    correct: "b",
},
{
    question: "Which type of variable is declared inside a method?",
    a: "Instance variable",
    b: "Local variable",
    c: "Static variable",
    d: "Global variable",
    correct: "b",
},
{
    question: "Which of the following is a primitive data type in Java?",
    a: "Array",
    b: "int",
    c: "String",
    d: "List",
    correct: "b",
},
{
    question: "What type of loop executes a block of code multiple times?",
    a: "for",
    b: "switch",
    c: "if",
    d: "break",
    correct: "a",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hi! you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);