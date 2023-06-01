/*  eslint comma-dangle: ["error", "never"] */

import readlineSync from 'readline-sync';

export default (rules, gameProcess) => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  const maxQuantityRound = 3;
  let countCorrectAnswer = 0;
  console.log(rules);
  for (let i = 0; i < maxQuantityRound; i += 1) {
    const [correctAnswer, question] = gameProcess();

    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer === userAnswer) {
      countCorrectAnswer += 1;
      console.log('Correct!');
    } else if (correctAnswer !== userAnswer) {
      console.log(
        `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`
      );
      console.log(`Let's try again, ${userName}`);
      break;
    }
  }
  if (countCorrectAnswer === maxQuantityRound) {
    console.log(`Congratulations, ${userName}!`);
  }
};
