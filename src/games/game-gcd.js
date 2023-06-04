import getGame, { getGeneratedNumber } from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const hasGcd = (n, m) => {
  if (m !== 0) {
    const k = n % m;
    return hasGcd(m, k);
  }
  return n;
};

const startingGame = () => {
  const generatedNumberOne = getGeneratedNumber(10);
  const generatedNumberTwo = getGeneratedNumber(10);

  const question = `Question: ${generatedNumberOne} ${generatedNumberTwo}`;

  const correctAnswer = hasGcd(generatedNumberOne, generatedNumberTwo);

  return [String(correctAnswer), question];
};
export default () => {
  getGame(rules, startingGame);
};
