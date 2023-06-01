const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameProcess = () => {
  const generatedNumber = Math.floor(Math.random() * 30);

  const question = `Question: ${generatedNumber}`;
  let correctAnswer = 'yes';

  if (generatedNumber < 2) {
    correctAnswer = 'no';
  }
  let divider = 2;
  while (divider <= generatedNumber / 2) {
    if (generatedNumber % divider === 0) {
      correctAnswer = 'no';
    }
    divider += 1;
  }

  return [String(correctAnswer), question];
};

export { rules, gameProcess };
