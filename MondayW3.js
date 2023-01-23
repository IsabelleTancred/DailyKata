/*A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a 
boomerang can be defined as: sub-array of length 3, with the first and last digits being the 
same and the middle digit being different. (triple identical digits) is NOT considered a boomerang because the middle digit 
is identical to the first and last 
An appropriate error should be thrown if an empty array is passed into the function, or if an 
array with too few elements for a boomerang to exist. 
Throw an appropriate error if an element of the input array is not a number. */

function countBoomerangs(arr) {
  let count = 0;
  if (arr.length < 3) {
    return "error";
  }
  for (let i = 0; i < arr.length - 2; i++) {
    if (isNaN(arr[i])) {
      return "error";
    } else if (arr[i] == arr[i + 2] && arr[i] != arr[i + 1]) {
      count++;
    }
  }
  return count;
}

console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]));

console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9]));

console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9]));

console.log(countBoomerangs([1, 7, 1, 7, 1, 7, 1]));

console.log(countBoomerangs([]));

console.log(countBoomerangs([1, 7]));

console.log(countBoomerangs([1, 7, 1, 7, "one", 7, 1]));
