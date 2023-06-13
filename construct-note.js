// letterCount helper function
const letterCount = (str) => {
  let count = new Map();

  for (let val of str) {
    let valCount = count.get(val) || 0;
    count.set(val, valCount + 1);
  }

  return count;
};

function constructNote(message, letter) {
  // count letter in message and letter
  let messageMap = letterCount(message);
  let letterMap = letterCount(letter);

  // Loop over each letter in the message.
  for (let letter of messageMap.keys()) {
    // Check if letter exists in letterMap and if the count is enough.
    if (
      !letterMap.has(letter) ||
      messageMap.get(letter) > letterMap.get(letter)
    ) {
      return false;
    }
  }

  return true;
}
