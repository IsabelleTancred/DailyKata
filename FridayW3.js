/*For this challenge, the input will be a (long) string. 
• A word encountered for the first time is a stranger.  
• A word encountered thrice becomes an acquaintance.  
• A word encountered 5 times becomes a friend. 
Create a function that takes the string and returns an array of two arrays.  
The first is an array of acquaintances in the order they became an acquaintance (see 
example).  
The second is an array of friends in the order they became a friend. Words in the friend 
array should no longer be in the acquaintance array*/

function noStrangers(string) {
  const strangers = [];
  const acquaintance = [];
  const friends = [];
  const withoutPunctuation = string
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .replace(/\s{2,}/g, " ");
  const lowerCaseWords = withoutPunctuation.toLowerCase().split(" ");
  for (let i in lowerCaseWords) {
    if (friends.includes(lowerCaseWords[i])) {
    } else if (acquaintance.includes(lowerCaseWords[i])) {
      friends.push(lowerCaseWords[i]);
    } else if (strangers.includes(lowerCaseWords[i])) {
      acquaintance.push(lowerCaseWords[i]);
    } else {
      strangers.push(lowerCaseWords[i]);
    }
  }
  return [acquaintance, friends];
}

console.log(
  noStrangers("See Spot run. See Spot jump. Spot likes jumping. See Spot fly.")
);
