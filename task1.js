// Task 1 : 
// Create a function that takes a string as input 
// returns the reversed version of the string 
// without using the built-in reverse() method. 
// Example Input: "hello world" 
// Example Output: "dlrow olleh"

const reversedVersion = stringValue => {
    if (typeof (stringValue) === 'string') {
        const splitArr = stringValue.split('');
        const reverseArr = [];
        for (let i = splitArr.length - 1; i >= 0; i--) {
            const element = splitArr[i];
            reverseArr.push(element);
        };
        const reverseWord = reverseArr.join('');
        return reverseWord;
    } else {
        return `type of input must be a string. here type of "${stringValue}" is ${typeof (stringValue)}`;
    }
};

const inputString = '123';
const result = reversedVersion(inputString);
console.log(result);