// Create a function which returns how many Friday 13ths there are in a given year

function howUnlucky(year) {
  let friday13ths = 0;
  for (let month = 0; month < 12; month++) {
    let j = new Date(year, month, 13);
    if (j.getDay() == 5) {
      friday13ths++;
    }
  }
  return friday13ths;
}
console.log(howUnlucky(2023));
console.log(howUnlucky(2020));
console.log(howUnlucky(2026));
console.log(howUnlucky(2016));
