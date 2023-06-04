import getGame, { getGeneratedNumber } from '../index.js';

const rules = 'What number is missing in the progression?';

const startingGame = () => {
  const maxStep = 6;
  const minStep = 1;
  const stepProgression = getGeneratedNumber(maxStep - minStep + minStep);
  const rowProgression = [];
  const startProgression = getGeneratedNumber(100);
  const maxRowLength = 10;
  let elementProgression = startProgression;

  for (let i = 0; i < maxRowLength; i += 1) {
    rowProgression.push(elementProgression);
    elementProgression += stepProgression;
  }

  const hiddenElementIndex = getGeneratedNumber(rowProgression.length);
  let hiddenElement = '';

  for (let i = 0; i < rowProgression.length; i += 1) {
    if (i === hiddenElementIndex) {
      hiddenElement = rowProgression.splice(i, 1);
      rowProgression.splice(i, 0, '..');
    }
  }

  const question = `Question: ${rowProgression.join(' ')}`;
  const correctAnswer = hiddenElement;

  return [String(correctAnswer), question];
};

export default () => {
  getGame(rules, startingGame);
};
