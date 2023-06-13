/***
sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Examples:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
Constraints

Time Complexity - O(N + M)
 * ***/

const freqCounter = (num) => {
  const str = num.toString();
  let frequencies = new Map();
  for (let digit of str) {
    let digitCount = frequencies.get(digit) || 0;
    frequencies.set(digit, digitCount + 1);
  }
  return frequencies;
};

const sameFrequency = (num1, num2) => {
  const num1freq = freqCounter(num1);
  const num2freq = freqCounter(num2);

  //   check if length of two digits is same
  if (num1freq.length !== num2freq.length) return false;

  for (let key in num1freq.keys()) {
    // check if key exist in num2freq
    if (num2freq.has(key) === false) return false;

    // check if count of key matches
    if (num1freq.get(key) !== num2freq.get(key)) return false;
  }
  return true;
};
