/*In this challenge, you have to implement an algorithm to establish if a given positive 
integer  num  is a Happy number, and how many steps of the algorithm are needed to establish 
it. 
You have to repeatedly transform the given  num  into the sum of its squared digits: 
• If after the transformation the new number is equal to  1 ,  num  is a Happy number and 
the algorithm stops. 
• If after the transformation, the new number is not equal to  1 , you have to transform it 
again. If a number can't be reduced to  1 , sooner or later the algorithm will enter into an infinitely 
repeating loop: 
... 20, 4, 16, 37, 58, 89, 145, 42, 20, 4 ... 
Given a positive integer  num , implement a function that returns: 
• If  num  is a Happy number, the string  "HAPPY x"  with the "x" being the number of 
steps necessary to reduce  num  to 1. 
• If  num  is not a Happy number, the string  "SAD x"  with the "x" being the number of 
steps necessary to enter into the infinite loop reaching so any number in the series  4,  
16, 37, 58, 89, 145, 42, 20 , plus the number of steps necessary to obtain again 
that number.
*/

function happyAlgorithm(num) {
  if (num === 1) {
    return "HAPPY 1";
  }
  let sums = [];
  sums.push(num);
  let steps = 1;
  let newSum = squareSum(num);
  while (!sums.includes(newSum)) {
    steps++;
    sums.push(newSum);
    newSum = squareSum(newSum);
  }
  if (newSum == 1) {
    return "HAPPY " + (steps - 1);
  } else {
    return "SAD " + steps;
  }
}
function squareSum(num) {
  let sum = 0;
  let str = num.toString();
  for (i in str) {
    sum = sum + str[i] * str[i];
  }
  return sum;
}

console.log(happyAlgorithm(139));
console.log(happyAlgorithm(67));
console.log(happyAlgorithm(1));
console.log(happyAlgorithm(89));
