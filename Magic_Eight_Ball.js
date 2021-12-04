let userName = '';
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

let userQuestion = 'Am I old?';
console.log(`Aaron: ${userQuestion}`);

const randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

switch (randomNumber){
  case 0:
  eightBall = 'Cannot predict now';
  break;
  case 1:
  eightBall = 'Do not count on it';
  break;
  case 2:
  eightBall = 'Reply hazy try again';
  break;
  case 3:
  eightBall = 'My sources say no';
  break;
  case 5:
  eightBall = 'Outlook not so good';
  break;
  case 6:
  eightBall = 'Signs point to yes';
  break;
  case 7:
  eightBall = 'It is decidedly so ';
  break;
  case 8:
  eightBall = 'It is certain';
  break;
  default:
  eightBall = 'Nothing to predict';
  break;
}

console.log(`The eight ball answered: ${eightBall}`);