const rules = 'Find the greatest common divisor of given numbers.';

const gcd = (n, m) => {
  if (m !== 0) {
    const k = n % m;
    return gcd(m, k);
  }
  return n;
};

const gameProcess = () => {
  const generatedNumberOne = Math.floor(Math.random() * 10);
  const generatedNumberTwo = Math.floor(Math.random() * 10);

  const question = `Question: ${generatedNumberOne} ${generatedNumberTwo}`;

  const correctAnswer = gcd(generatedNumberOne, generatedNumberTwo);

  return [String(correctAnswer), question];
};
export { rules, gameProcess };
