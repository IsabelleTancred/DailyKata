// Create a function which returns how many Friday 13ths there are in a given year

function howUnlucky(year) {
  let count = 0;
  for (let i = 0; i < 12; i++) {
    let j = new Date(year, i, 13);
    if (j.getDay() == 5) {
      count++;
    }
  }
  return count;
}
console.log(howUnlucky(2023));
console.log(howUnlucky(2020));
console.log(howUnlucky(2026));
console.log(howUnlucky(2016));