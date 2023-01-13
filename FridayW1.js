/* a function that takes a number  n  as an argument and checks whether the given 
number can be expressed as a sum of two or more consecutive positive numbers.*/

function consecutiveSum(num) {
        for (let i = 1; i <= (num/2); ii++) {           //the first number in a consecutive order can't be grater than half of the input value if the sum is gonna be the input value, hen num/2.
            for (let j = i + 1; sum < num; j++) {
                sum += j;
                if (sum === num) {
                    return true;
                }
            }
        }
        return false;
    
}
    
    
