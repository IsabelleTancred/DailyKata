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
  let str = "" + num;
  for (i in str) {
    sum = sum + str[i] * str[i];
  }
  return sum;
}

console.log(happyAlgorithm(139));
console.log(happyAlgorithm(67));
console.log(happyAlgorithm(1));
console.log(happyAlgorithm(89));
