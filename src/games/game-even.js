const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const gameProcess = () => {
  const generatedNumber = Math.floor(Math.random() * 1000);
  const question = `Question: ${generatedNumber}`;
  const correctAnswer = generatedNumber % 2 === 0 ? 'yes' : 'no';

  return [correctAnswer, question];
};

export { rules, gameProcess };
