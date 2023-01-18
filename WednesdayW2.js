/* Create a function that takes a string and replaces the vowels with another character. Also 
output all characters to be lower case. 
a = 1 
• e = 2 
• i = 3 
• o = 4 
• u = 5 
*/

function replaceVowel(string) {
  let str = string.toLowerCase();
  return str
    .replaceAll("a", "1")
    .replaceAll("e", "2")
    .replaceAll("i", "3")
    .replaceAll("o", "4")
    .replaceAll("u", "5");
}

console.log(replaceVowel("karAchi"));

console.log(replaceVowel("chEmBur"));

console.log(replaceVowel("khandbari"));

console.log(replaceVowel("LexiCAl"));

console.log(replaceVowel("fuNctionS"));

console.log(replaceVowel("EASY"));
