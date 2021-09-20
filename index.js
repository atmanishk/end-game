var readlineSync = require('readline-sync');

var score = 0;

//taking input from user
function input(){
  var userName = readlineSync.question("What is your name? ");
  console.log("Welcome " + userName + " to the Game - DO YOU KNOW MANISH? ");
}


//array of questions and answers
var questions = [
  {
    question: "Q.1) Where do Manish live? ",
    answer: "Bangalore"
  },
  {
    question: "Q.2) Manish's favourite Avenger's character is: ",
    answer: "Groot"
  },
  {
    question: "Q.3) Where does Manish work? ",
    answer: "IBM"
  }
];

//function game 
function game(){
  for (var i = 0; i<questions.length; i++){
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

//function to operate based on inputs
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer){
    console.log("You are right! ")
    score++;
  }else {
    console.log("OOPS!! You are wrong! ");
    // score--;
  }
  console.log("Your current score : ", score);
  console.log("------------------------")

}

//storing high scores
var highScores = [
  {
    name: 'Manish',
    score: 3
  },
  {
    name: 'Moni',
    score: 3
  }
]

function show(){
  console.log("YAY! Your score is : ", score)
  console.log("Check out the scores! ");
  console.log("High score is: " + highScores[1].name + " " + highScores[1].score)
}

input();
game();
show();