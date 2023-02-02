/*Create a function that takes a word and returns true if the word has two consecutive 
identical letters. */
function doubleLetters(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      return true;
    }
  }
  return false;
}

function doubleLettersCursive(str) {
  if (str.length <= 1) {
    return false;
  } else if (str[0] === str[1]) {
    return true;
  }
  return doubleLettersCursive(str.slice(1));
}

console.log(doubleLettersCursive("loop"));
console.log(doubleLettersCursive("yummy"));

console.log(doubleLettersCursive("orange"));

console.log(doubleLettersCursive("munchkin"));
