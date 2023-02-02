/*write a function that converts a sentence into a simplified pig latin. 
Rules for converting to pig latin: 
• For words that begin with a vowel (a, e, i, o, u), add "way" to the end of the word. 
• Otherwise, move all letters before the first vowel to the end and add "ay". 
• For simplicity, no punctuation will be present in the inputs.*/

function pigLatinSentence(string) {
  let words = string.split(" ");
  let pigString = "";
  const vowel = /[aeiou]/i;
  words.forEach((word) => {
    if (vowel.test(word)) {
      if (vowel.test(word[0])) {
        pigString += word + "way ";
      } else {
        let tempWord = "";
        for (let i in word) {
          if (!vowel.test(word[i])) {
            tempWord += word[i];
          } else if (vowel.test(word[i])) {
            pigString += word.slice(i) + tempWord + "ay ";
            break;
          }
        }
      }
    } else {
      pigString += word;
    }
  });
  return pigString;
}

console.log(pigLatinSentence("this is pig latin"));
console.log(pigLatinSentence("wall street journal"));
console.log(pigLatinSentence("raise the bridge"));
console.log(pigLatinSentence("all pigs oink"));
