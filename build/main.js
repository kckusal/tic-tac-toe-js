"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Calculator_1 = require("./app/Calculator");
function runApp() {
    const calculator = new Calculator_1.Calculator();
    console.log("Add: 1 + 2 = ", calculator.add(1, 2));
    console.log("Subtract: 1 - 2 = ", calculator.subtract(1, 2));
    console.log("Multiply: 1 * 2 =", calculator.multiply(1, 2));
    console.log("Divide: 1 / 2 =", calculator.divide(1, 2));
}
runApp();
