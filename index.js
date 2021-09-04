
var readlineSync = require('readline-sync');
var userName = readlineSync.question("what is your name buddy?\n")
console.log("Welcome "+userName+" Let me see how well u know me? ")

let score=0;
function play(question, answer)
{
  var userAnswer= readlineSync.question(question);
  if(userAnswer===answer)
  {
    score++;
    console.log("right! now your current score is\n"+score)
  }
  else{
    score--;
    console.log("oops! your are wrong now your current score is\n"+score)
  }
  console.log("---------------------")
}

var questions = [
  { question: "what is my name\n", 
    answer:"sarvesh"},
  { question:"what is my destination\n", 
    answer:"patna"},
    {
    question:"what is my hobby\n", 
    answer:"cricket"
    },
    {
    question:"My favourite superHero would be\n",
    answer:"Batman"
    },
  {
     question:"My favourite book related to investment ",
     answer:"Intelligent Investor"
  },
     {
    question:"My favourite cricketer would be\n",
    answer:"Ms Dhoni"
    },

]

for( i=0;i<questions.length;i++){
  currentquestion= questions[i]
  play(currentquestion.question, currentquestion.answer)

}
