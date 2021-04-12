var readlineSync = require('readline-sync');

function welcome() {
  console.log('Welcome to \"Know me?\"');
  console.log('');
  console.log('Let\'s start by entering your name');
  var username = readlineSync.question("Enter your name: ");
  console.log('');
  console.log('Hi ' + username + '!');
  console.log('');
  console.log('Let\'s begin!');
  console.log('');
  return username;
}

var score = 0;

var quiz = [
  {
    question: "What\'s my favourite food? ",
    answer: "prawns"
  },
  {
    question: "What\'s my favourite video game? ",
    answer: "assassin\'s creed"
  },
  {
    question: "Who\'s my favourite avenger? ",
    answer: "iron man"
  }
]

var highscores = [
  {
    name: "Sree",
    score: 3
  },
  {
    name: "Karthik",
    score: 2
  }
]

function play(quiz) {
  var userans = readlineSync.question(quiz.question);
    if (userans.toLowerCase() == quiz.answer) {
      score = score + 1;
      console.log('Correct!');
      console.log('');
    }
    else {
      console.log('Oops, Wrong!');
      console.log('');
    }
  console.log('Current score: ' + score);
  console.log('----------------------');
}

function game() {
  for(var i = 0; i < 3; i++) {
    play(quiz[i]);
  }
}

function final() {
  console.log('');
  console.log('Final Score: ' + score);
  if (score === 3) {
    console.log('Congrats, you got one of the top scores!');
    console.log('----------------------');
    console.log('');
    console.log('Scores: ');
    console.log('-------------------------------------');
    console.log(highscores[0].name + ' ' + highscores[0].score);
    console.log(username + ' ' + score);
    console.log(highscores[1].name + ' ' + highscores[1].score);
    console.log('-------------------------------------');
  } else if (score === 2) {
    console.log('Congrats, you scored well!');
    console.log('----------------------');
    console.log('');
    console.log('Scores: ');
    console.log('-------------------------------------');
    console.log(highscores[0].name + ' ' + highscores[0].score);
    console.log(username + ' ' + score);
    console.log(highscores[1].name + ' ' + highscores[1].score);
    console.log('-------------------------------------');
  } else if (score === 1) {
    console.log('Huh, You don\'t know me that well');
    console.log('----------------------');
    console.log('');
    console.log('Scores: ');
    console.log('-------------------------------------');
    console.log(highscores[0].name + ' ' + highscores[0].score);
    console.log(highscores[1].name + ' ' + highscores[1].score);
    console.log(username + ' ' + score);
    console.log('-------------------------------------');
  } else if (score === 0) {
    console.log('Do you even know me?');
    console.log('----------------------');
    console.log('');
    console.log('High Scores: ');
    console.log('-------------------------------------');
    console.log(highscores[0].name + ' ' + highscores[0].score);
    console.log(highscores[1].name + ' ' + highscores[1].score);
    console.log(username + ' ' + score);
    console.log('-------------------------------------');
  }
}

var username = welcome();
game();
final();