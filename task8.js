// Task 8: 
// Implement a JavaScript function to find the second smallest element in an array of numbers. 
// The function should return the second smallest number.

const findSecondSmallest = arr => {
    if (!Array.isArray(arr) || arr.length < 2) {
        throw new Error("Input must be an array with at least two elements.");
    }

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let num of arr) {
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }

    if (secondSmallest === Infinity) {
        throw new Error("There is no second smallest element in the array.");
    }

    return secondSmallest;
}

const numbers = [5, 2, 8, 3, 1, 7, 4, 6];
const secondSmallest = findSecondSmallest(numbers);
console.log("Second smallest element:", secondSmallest); // Output: 2
