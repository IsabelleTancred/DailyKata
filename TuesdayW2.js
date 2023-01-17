/*Given a string, return if a given letter always appears immediately before another 
given letter.*/

function bestFriend(string, x, y) {
  let count = 0;
  for (let i = 0; i < string.length - 1; ) {
    if (string[i] === x && string[i + 1] === y) {
      count++;
      i++;
    } else if (string[i] === x) {
      return false;
    } else {
    i++;
    }
  }
  if (count > 0) {
    return true;
  }
  return false;
}
