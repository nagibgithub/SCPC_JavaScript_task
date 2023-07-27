const romanToInteger = roman => {
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    let prevValue = 0;

    for (let i = roman.length - 1; i >= 0; i--) {
        const numeral = roman[i];
        const value = romanValues[numeral];

        if (value < prevValue) {
            total -= value;
        } else {
            total += value;
        }

        prevValue = value;
    }

    return total;
}

const inputRoman = 'IX';
const result = romanToInteger(inputRoman);
console.log(result);