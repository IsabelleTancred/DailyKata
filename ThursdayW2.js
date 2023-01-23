/*Create a function that takes an array of strings and returns an array with only the strings that 
have numbers in them. If there are no strings containing numbers, return an empty array.*/

function numInStr(arr) {
  let newArr = [];
  let numberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < numberArr.length; j++) {
      if (arr[i].includes(numberArr[j])) {
        newArr.push(arr[i]);
        break;
      }
    }
  }
  return newArr;
}

console.log(numInStr(["1a", "a", "2b", "b"]));

console.log(numInStr(["abc", "abc10"]));

console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]));

console.log(numInStr(["this is a test", "test1"]));

console.log(numInStr(["who needs numbers", "not me"]));

console.log(numInStr(["!!", "##", "@"]));
