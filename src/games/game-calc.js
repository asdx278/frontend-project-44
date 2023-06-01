const rules = 'What is the result of the expression?';

const gameProcess = () => {
  const generatedNumberOne = Math.floor(Math.random() * 10);
  const generatedNumberTwo = Math.floor(Math.random() * 10);
  let correctAnswer = 0;

  const hasOperation = () => {
    const operation = ['+', '-', '*'];
    const selectedOperationIndex = Math.floor(Math.random() * 3);
    return operation[selectedOperationIndex];
  };

  const selectedOperation = hasOperation();
  const question = `Question: ${generatedNumberOne} ${selectedOperation} ${generatedNumberTwo}`;

  if (selectedOperation === '+') {
    correctAnswer = generatedNumberOne + generatedNumberTwo;
  } else if (selectedOperation === '-') {
    correctAnswer = generatedNumberOne - generatedNumberTwo;
  } else if (selectedOperation === '*') {
    correctAnswer = generatedNumberOne * generatedNumberTwo;
  }

  return [String(correctAnswer), question];
};

export { rules, gameProcess };
