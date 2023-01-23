/* a function that takes a number  n  as an argument and checks whether the given 
number can be expressed as a sum of two or more consecutive positive numbers.*/

function consecutiveSum(num) {
  for (let i = 1; i <= num / 2; i++) {
    let sum = 0;
    for (let j = i; sum < num; j++) {
      sum += j;
      console.log(sum)
      if (sum === num) {
        return true;
      }
    }
  }
  return false;
}

console.log(consecutiveSum(10));
