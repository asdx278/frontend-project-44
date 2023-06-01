/*  eslint comma-dangle: ["error", "never"] */

const rules = 'What number is missing in the progression?';

const gameProcess = () => {
  const maxRange = 6;
  const minRange = 1;
  const stepProgression = Math.floor(
    Math.random() * (maxRange - minRange) + minRange
  );
  const rowProgression = [];
  const startProgression = Math.floor(Math.random() * 100);
  let elementProgression = startProgression;
  for (let i = 0; i < 10; i += 1) {
    rowProgression.push(elementProgression);
    elementProgression += stepProgression;
  }
  const hiddenElementIndex = Math.floor(Math.random() * rowProgression.length);
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

export { rules, gameProcess };
