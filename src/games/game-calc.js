import getGame, { getGeneratedNumber } from '../index.js';

const rules = 'What is the result of the expression?';
const startingGame = () => {
  const generatedNumberOne = getGeneratedNumber(10);
  const generatedNumberTwo = getGeneratedNumber(10);
  let correctAnswer = 0;

  const hasOperation = () => {
    const operation = ['+', '-', '*'];
    const selectedOperationIndex = getGeneratedNumber(3);
    return operation[selectedOperationIndex];
  };

  const selectedOperation = hasOperation();
  const question = `Question: ${generatedNumberOne} ${selectedOperation} ${generatedNumberTwo}`;

  switch (selectedOperation) {
    case '+':
      correctAnswer = generatedNumberOne + generatedNumberTwo;
      break;
    case '-':
      correctAnswer = generatedNumberOne - generatedNumberTwo;
      break;
    case '*':
      correctAnswer = generatedNumberOne * generatedNumberTwo;
      break;
    default:
      break;
  }

  return [String(correctAnswer), question];
};
export default () => {
  getGame(rules, startingGame);
};
