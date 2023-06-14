/*******
 * isSubsequence
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Constraints:

Time Complexity - O(N + M)
******/

const frequencyCounter = (str) => {
  const frequencies = new Map();
  for (let char of str) {
    let charCount = frequencies.get(char) || 0;
    frequencies.set(char, charCount + 1);
  }
  return frequencies;
};

const isSubsequence = (str1, str2) => {
  // set freqCounters
  const str1Counter = frequencyCounter(str1);
  const str2Counter = frequencyCounter(str2);

  for (let key in str1Counter.keys()) {
    // check if key in str1 exists in str2
    if (str2Counter.has(key) === false) return false;

    // check if value of char in str1 matches in str2
    if (str1Counter.get(key) !== str2Counter.get(key)) return false;
  }

  return true;
};
