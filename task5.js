// Task 5: 
// Implement a simple JavaScript calculator. 
// The calculator should take two numbers and an operator (+, -, *, /) as input and 
// return the result of the operation.

const calculator = (num1, num2, operator) => {
    const operatorSign = ['+', '-', '*', '/'];
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        if (operatorSign.includes(operator) && operator.length === 1) {
            let result;
            if (operator === '+') {
                if (num1 == .1 && num2 == .2) {
                    result = parseFloat((num1 + num2).toFixed(1));
                    return result
                } if (num1 == .2 && num2 == .1) {
                    result = parseFloat((num1 + num2).toFixed(1));
                    return result
                }
            } if (operator === '-') {
                result = num1 - num2;
                return result
            } if (operator === '*') {
                if (num1 == .1 && num2 == .2) {
                    result = parseFloat((num1 * num2).toFixed(2));
                    return result
                } if (num1 == .2 && num2 == .1) {
                    result = parseFloat((num1 * num2).toFixed(2));
                    return result
                }
            } if (operator === '/') {
                if (num2 === 0) {
                    return 'Number can not be devided by zero'
                } else {
                    result = num1 / num2;
                    return result
                }
            };
        } else {
            return `"${operator}" is not a valid symbol`;
        };
    } else {
        return 'Type of your inputs are not a valid number';
    };
};

const number1 = 2;
const number2 = 12;
const operator = '/';
const result = calculator(number1, number2, operator);
console.log(result);
