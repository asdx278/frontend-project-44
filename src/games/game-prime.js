import getGame, { getGeneratedNumber } from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (value) => {
  if (value < 2) {
    return 'no';
  }
  let divider = 2;
  while (divider <= value / 2) {
    if (value % divider === 0) {
      return 'no';
    }
    divider += 1;
  }
  return 'yes';
};

const startingGame = () => {
  const generatedNumber = getGeneratedNumber(30);

  const question = `Question: ${generatedNumber}`;

  const correctAnswer = isPrime(generatedNumber);

  return [String(correctAnswer), question];
};

export default () => {
  getGame(rules, startingGame);
};
