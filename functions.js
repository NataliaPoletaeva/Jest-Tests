const stringLength = (str) => {
    if (str.length < 1 || str.length > 10) {
        throw new Error("String length should be between 1 to 10 chars");
    }
    return str.length;
}

const reverseString = (str) => reversed = str.split('').reverse().join('');

class Calculator {
    add = (num1, num2) => num1 + num2;

    subtract = (num1, num2) => num1 - num2;

    multiply = (num1, num2) => num1 * num2;

    divide = (num1, num2) => num1 / num2;
}

const calculator = new Calculator();

const capitalizeString = (str) => str.charAt(0).toUpperCase() + str.slice(1);

module.exports = { stringLength, reverseString, calculator, capitalizeString };