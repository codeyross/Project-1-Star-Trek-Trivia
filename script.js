//Start screen with opaque rules button that can be x'd out w/audio playing star trek theme
//When you push start the game starts a time clock starts
// and a multiple choice question appears on screen with four options
//Where do the questions come from? API or my own set?
//Randomize the questions based on difficulty
//correct or incorrect anwser displayed above next question for a few seconds
//audio for every button hit
//when the game is over display an animation for good or bad score
//display option to play again

//function to start game
// define the start button with get element by id
// add event listener
// test start game function
// start button needs to be hidden with hide class, then show questions
// create question container element that removes hide class when start button is hit
// create const questions (index) of questions with array of anwsers use booleans for correct anwsers ex text: 4, correct: true text: 9, correct: false
// put in start next question function
// create variables for shuffled question and the question index
// shuffle questions define by referring to question index and creating a shuffled question variable referring to current question index
// sort questions ex questions.sort(() => math.random()- .5) sort based on pos or neg numbers (math.random gives a number between 1 and 0 subtracting .5 number less or above 0 50% of the time)
// set question index to zero to start at beginning of array
// inside next question create show question that takes shuffled questions at current question index

// function for next question, inside next q function create show question taking shuffle question at current question index
// create question element and anwser button element set question element to = inner text = question.question
// question.anwser.forEach(answer => {
    // const button = document.createElement('button")
// button.innerText = anwser.text
// button.classList.add('btn')
// })
// if (answer.correct) {button.dataset.correct = answer.correct}
// button.addEventListener('click', selectAnswer)
// answerButtonsElement.appendChild(button)
// create resetstate button inside next question button then outside define it 
// function to select an answer
//functioni selectAnwser(e) {const selectedButton = e.target const correct = selectedButton.dataset.correct
// setStatusClass(document.body, correct)
// array.from(answerButtonsElement.children).forEach(button => {
    // setStatusclass(button, button.dataset.correct)
// })  
// }
// function setStatusClass(element, correct) {
// clearStatusClass(element)
// if (correct) {
    // element.classList.add('correct)
    // }else{
        // element.classList.add('wrong')
    // }
// }
// function clearStatusClass(element){
    // element.classList.remove('correct')
// }else{
    // element.classList.add('wrong')
// }
// 
// }
// NEED TO MAKE NEXT BUTTON WORK
// When the start button is clicked, the start button is hidden and the timer starts and the first shuffled question appears
// when an anwser is clicked, the game responds if correct moves to next question, if incorrect, try again
// a correct answer yields 5pts
// create a box that holds points
// when the timer runs out the point total is displayed as well as the restart button
// make array of questions
// how to randomize questions (how to have difficulty levels of qs)


// CURRENT TO DO 1) need to have answer stay highlighted until submit is hit
//2) need to display correct or incorrect
// 3)if correct add points and move to next question
//4) if wrong try again
//5) add game timer/pass game timer into start game button
// 6) when timer runs out display score,  "Times Up" and restart button
// 7) use event.prevent default if wrong?


// const timer = document.getElementById('timer');
// let timeInSeconds = 59;
// // console.log(timeInSeconds)
// showTime(timeInSeconds);


// const countDown = setInterval(()=> {
//     timeInSeconds --; 
//     showTime(timeInSeconds);   
//     if(timeInSeconds <= 0){
//         outOfTime();
//         clearInterval(countDown)
//     } 
// },1000)
// function showTime(second) {
//     const min = math.floor(second / 60);
//     const sec = math.floor(second % 60);
//     timer.innerHTML = `${min<10 ? '0' : ''}${min}:${sec<10?'0':''}${sec}`
// }
// function outOfTime(){
//     timer.innerHTML = 'OUT OF TIME'
// }
// function to add points:
// let points = 0 , eventlistener onclick of submit if answer is correct points + 5 else display try again
// create display box for correct or incorrect with hide and remove hide on submit if answer is correct or incorrect
var addPoints = document.getElementById('points').innerHTML;
let pointTotal = 0;
function keepScore() {
    addPoints.pointTotal+5
    nextButton.addEventListener('click', () => {
        if (answer.correct) {
            keepScore
        }else{
            return('Try Again')
        }
    }
    )}


//grab start button
const startButton = document.getElementById('start-butt');
// grab next but
const nextButton = document.getElementById('next-butt');
//grab question container
const questionContainer = document.getElementById('question-container');
// need grab question element 
const questionElement = document.getElementById('question')

const restartButton = document.getElementById('restart-button');
//need grab answer button
const answerButtonsElement = document.getElementById('answer-buttons')

// global variables, so they can be accessed anywhere in script
let shuffleQuestions, currentQuestionIndex
// need to define questions
// create function to shuffle questions that takes defined questions

// event listener to initialize game when start button is clicked
startButton.addEventListener('click', startGame);
// how to get questions to appear after start button is clicked and hidden
// when next button is clicked next question ++ based of current index
nextButton.addEventListener('click', () => {
   currentQuestionIndex++
    bringNextQuestion()
})
function startGame() {
// console.log('im clicked')
// hide start button after clicked
startButton.classList.add('hide');
nextButton.classList.add('hide');


// how to shuffle questions by grabbing question array
//sort with math.random gives number between one and zero, subtracting -.5 number less than 0 or above 0 50% of the time
shuffleQuestions = questions.sort(()=> Math.random() - .5)
//know where to start questions
currentQuestionIndex= 0
// remvoe the hide from question conatainer to brin questions up once game is started
questionContainer.classList.remove('hide')
//need to bring next question after question is answered correctly
bringNextQuestion()
}
// define bringNextQuestion to be hoisted into startGame function
function bringNextQuestion() {
   resetQuestion()
    // take a shuffled question based on where at in index not showing current question again
showQuestion(shuffleQuestions[currentQuestionIndex])
}
// take shuffle to show question

function showQuestion(question){
    // console.log(question)
    // replaces question with actual question
questionElement.innerText = question.question
// replace answer buttons with answers
question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if(answer.correct) {
        button.dataset.correct=answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
})
}
function resetQuestion() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild){
answerButtonsElement.removeChild
(answerButtonsElement.firstChild)
    }
}
// select button and check if correct
// need to set status of body and check if correct or wrong
// need to loop through buttons and set class for them
function selectAnswer(e) {
const selectedButton = e.target
const correct = selectedButton.dataset.correct
setStatusClass(document.body, correct)
// need to convert to array to use in for loop
Array.from(answerButtonsElement.children).forEach(button=> {
    //set status for each button is true or false correct or wrong
    // first need to clear any previous status
    setStatusClass(button, button.dataset.correct)
})
if (shuffleQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
}else{
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
}
nextButton.classList.remove('hide')
}
// is the element correct if yes correct else wrong
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')
    }
}
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
// array of questions with array of anwsers for each question
const questions = [
    {
        question: "In the first episode of 'The Next Generation', what is the name of the omnipotent being that puts the human race on trial?",
        answers: [
            {text: 'Johnny', correct: false},
            {text: 'Q', correct: true},
            {text: 'Leah', correct: false},
            {text: 'D', correct: false}
        ],
    },
    {    question: "In 'The Next Generation' who is second in command? ",
        answers: [
            {text: 'Jordie Laforge', correct: false},
            {text: 'William Riker', correct: true},
            {text: 'Deanna Troy', correct: false},
            {text: 'Tuvak', correct: false}
        ]
    },
    {    question: "In 'The Next Generation' Lieutenant Wharf discovers he has a son. What is his name?",
    answers: [
        {text: 'Alexander', correct: true},
        {text: 'DeeJay', correct: false},
        {text: 'William Shantner', correct: false},
        {text: 'Harry Kim', correct: false}
    ]
},
{    question: "In 'The Next Generation' who is second in command? ",
        answers: [
            {text: 'Jordie Laforge', correct: false},
            {text: 'William Riker', correct: true},
            {text: 'Deanna Troy', correct: false},
            {text: 'Tuvak', correct: false}
        ]
    },
    {    question: "In 'The Next Generation' episode 'Time's Arrow', what famous writer does the team encounter?",
        answers: [
            {text: 'George RR Martin', correct: false},
            {text: 'Ta-Nehisi Coates', correct: false},
            {text: 'Fyodor Dostoevsky', correct: false},
            {text: 'Mark Twain', correct: true}
        ]
    },
    {    question: "What planet does 'Spok' come from",
    answers: [
        {text: 'Earth', correct: false},
        {text: 'Mars', correct: false},
        {text: 'Cardassia Prime', correct: false},
        {text: 'Vulcan', correct: true}
    ]
},
{    question: "Deanna Troy has a special ability that is",
answers: [
    {text: 'Super strength', correct: false},
    {text: 'Empath', correct: true},
    {text: 'Laser vision', correct: false},
    {text: 'Shape-shifting', correct: false}
]
},
{    question: "The captain of the USS Voyager is",
answers: [
    {text: 'Catherine Janeway', correct: true},
    {text: 'Scotty', correct: false},
    {text: 'Wharf', correct: false},
    {text: 'Gene Roddenberry', correct: false}
]
},
{    question: "In 'Discovery' Michael Burnham is adopted by",
answers: [
    {text: 'Spock', correct: false},
    {text: 'Jean Luc Picard', correct: false},
    {text: 'Sarek', correct: true},
    {text: 'Kahn', correct: false}
]
},
// fix this question noonian soong
{    question: "In 'The Next Generation' who is Data's creator?",
answers: [
    {text: 'George RR Martin', correct: false},
    {text: 'Ta-Nehisi Coates', correct: false},
    {text: 'Fyodor Dostoevsky', correct: false},
    {text: 'Mark Twain', correct: true}
]
},
]