import getGame, { getGeneratedNumber } from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const startingGame = () => {
  const generatedNumber = getGeneratedNumber(1000);
  const question = `Question: ${generatedNumber}`;
  const correctAnswer = generatedNumber % 2 === 0 ? 'yes' : 'no';

  return [correctAnswer, question];
};

export default () => {
  getGame(rules, startingGame);
};
