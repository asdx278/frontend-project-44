import readlineSync from 'readline-sync';

const isEven = (num) => {
  let result = 'yes';
  if (num % 2 !== 0) {
    result = 'no';
  }
  return result;
};

const gameEven = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const maxQuantityRound = 3;
  let correctAnswer = 0;

  for (let i = 0; i < maxQuantityRound; i += 1) {
    const generatedNumber = Math.floor(Math.random() * 1000);
    console.log(`Question: ${generatedNumber}`);
    const answerUser = readlineSync.question('Your answer: ');

    if (isEven(generatedNumber) === answerUser && answerUser === 'yes') {
      correctAnswer += 1;
      console.log('Correct!');
    } else if (isEven(generatedNumber) === answerUser && answerUser === 'no') {
      correctAnswer += 1;
      console.log('Correct!');
    } else if (isEven(generatedNumber) !== answerUser && answerUser === 'yes') {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log(`Let's try again, ${userName}!`);
      break;
    } else {
      break;
    }
  }
  if (correctAnswer === maxQuantityRound) {
    console.log(`Congratulations, ${userName}`);
  }
};

export default gameEven;
