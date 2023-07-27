// Task 2 : 
// Create a function that takes an array of numbers as input 
// returns the sum of all positive numbers in the array.
// Example Input: [2, -5, 10, -3, 7] 
// Example Output: 19


const sumOfPositiveNumbers = numArray => {
    if (Array.isArray(numArray)) {
        let sum = 0;
        for (const i of numArray) {
            if (typeof (i) === 'number') {
                if (i > 0) {
                    sum += i;
                };
            };
        };
        return sum;
    } else {
        return 'Your input is not a valid array';
    };
};
const inputArray = [-1, -2, 34, 'ziad', 3, 'fuad', -4];
const result = sumOfPositiveNumbers(inputArray);
console.log(result);