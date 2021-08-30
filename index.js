var readlineSync = require('readline-sync');
var score = 0;
const chalk = require('chalk');

function seprators() {
  console.log(chalk.greenBright("*************************"));
}

function exit(){
  console.log(chalk.blue("Thanks For participating " + username));
}
var username = readlineSync.question("Enter your name ");

console.log("\nWelcome " + username +", now lets play a game");
console.log( chalk.blue("\nHow well do you know me?"));
seprators();

if(readlineSync.keyInYN('Do you wish to continue?')){
  function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
  }
}
  else {
    console.log("Thanks For participating " + username);
  }

function play(question, answer){
  var useranswer = readlineSync.question(question);
  
  if(useranswer == answer){
    console.log("\nYour are correct!");
    score = score + 1;
    console.log("Your current score is " + score);
    seprators();

  }
  else{
    console.log("Your are wrong!");
    score = score - 1;
    console.log("Your current score is " + score);
    seprators();
  }
}

var questions = [{
  question: "What street do Holmes and Watson live on? " + "\na. baker street" + "\nb. Regency Street" + "\nc. High Street\n" + "\nYour answer : ",
  answer: "a"
},{
  question: "What is Watson's official job (other than crime-solving, that is)? " + "\na. lawyer" + "\nb. clerk" + "\nc. doctor\n" + "\nYour answer : ",
  answer: "c"
},{
  question: "What is the name of Holmes' landlord? " + "\na. Mrs. Hudley" + "\nb. Mrs. Swanson" + "\nc. Mrs. Hudson\n" + "\nYour answer : ",
  answer: "c"
},{
  question: "Watson narrates every Sherlock Holmes story. " + "\na. Yes" + "\nb. No\n" + "\nYour answer : ",
  answer: "a"
},{
  question: "What is the name of Holmes' older brother? " + "\na. Myron" + "\nb. Mycroft" + "\nc. Mylon\n"+ "\nYour answer : ",
  answer: "b"
}];


console.log("\nYour current score is " + score +"\n");

function showScores() {
  console.log("Your final score is " + score +" Out of 5 questions");
}

game();
showScores();
exit();