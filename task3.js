// Task 3: 
// Write a JavaScript program to find the most frequent element in an array and return it. 
// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] 
// Example Output: 3

const mostFrequentElement = arr => {
    if (Array.isArray(arr)) {
        const arrElements = [];
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            if (!arrElements.includes(element)) {
                arrElements.push(element);
            };
        };
        let highestElementLength = 0;
        let highestElement;
        for (let i = 0; i < arrElements.length; i++) {
            const element = arrElements[i];
            const sameElementArray = arr.filter(pd => pd === element);
            if (highestElementLength < sameElementArray.length) {
                highestElementLength = sameElementArray.length;
                highestElement = element;
            } else if (highestElementLength === sameElementArray.length) {
                if (Array.isArray(highestElement)) {
                    highestElement.push(element);
                } else {
                    highestElement = [highestElement, element];
                };
            };
        };
        return highestElement;
    } else {
        return `"${arr}" is not a valid Array`;
    };
};
const inputArray = ['fuad', 'ziad', 'asha', 'abbu', 'abbu', 'abbu', 'ammu', 'ammu', 'ammu', 'vugi', 'chugi', 'dot', 'com', 'com', 'com', 'com', 'hudai'];
const result = mostFrequentElement(inputArray);
console.log(result);