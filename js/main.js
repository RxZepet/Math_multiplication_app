const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questionElement = document.querySelector('#question');
const formElement = document.querySelector('#form');
const inputElement = document.querySelector('#input');
const scoreElement = document.querySelector('#score');

// Gets the initial of score from localStorage
let score = JSON.parse(localStorage.getItem("score"));

// To prevent error if the localstorage is empty
if(!score) {
    score = 0;
}

// To update the score on the form 
scoreElement.innerText = `score: ${score}`;

questionElement.innerText = `What is ${num1} multiply by ${num2}?`;
correctAnswer = num1 * num2;

formElement.addEventListener("click", () => {
    const userAnswer = +inputElement.value;
    if(userAnswer === correctAnswer){
        score++;
        updateLocalStorage();
    }else{
        score--;
        updateLocalStorage();
    }
})

// stores score on localstorage as strings
function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}

