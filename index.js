const multiplesOfSixAndNine = () => {
  for (i = 0; i <= 100; i++) {
    if (i % 6 === 0 && i % 9 === 0) {
      console.log(i);
    }
  }
  return multiplesOfSixAndNine;
};
multiplesOfSixAndNine();
console.log("\n");

const greaterNum = (num1, num2) => {
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return null;
  }
  if (num1 === num2) {
    return "both integers are equal";
  }
  return num1 > num2 ? num1 : num2;
};
console.log(greaterNum("10", "10"));
console.log("\n");

const sumOfFourAndSix = () => {
  let sum = 0;
  for (let i = 12; i <= 1000; i += 12) {
    sum += i;
  }
  return sum;
};

console.log(sumOfFourAndSix());
console.log("\n");

const offAndEvenToN = (int) => {
  for (i = 0; i <= int; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    } else {
      console.log(`${i} is odd`);
    }
  }
};

console.log(offAndEvenToN(5));
console.log("\n");

const simOfNotDivisibleByTen = () => {};
