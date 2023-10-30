const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Введіть початкове число: ', (startNumber) => {
  rl.question('Введіть довжину масиву: ', (arrayLength) => {
    startNumber = parseInt(startNumber);
    arrayLength = parseInt(arrayLength);

    if (isNaN(startNumber) || isNaN(arrayLength) || arrayLength <= 0) {
      console.log('Будь ласка, введіть правильні значення.');
      rl.close();
      return;
    }

    const primeNumbers = [];
    let currentNumber = startNumber;

    while (primeNumbers.length < arrayLength) {
      if (isPrime(currentNumber)) {
        primeNumbers.push(currentNumber);
      }
      currentNumber++;
    }

    console.log('Масив простих чисел:', primeNumbers);
    rl.close();
  });
});

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}
