import { Calculator } from "./app/Calculator";

function runApp() {
	const calculator = new Calculator();

	console.log("Add: 1 + 2 = ", calculator.add(1, 2));

	console.log("Subtract: 1 - 2 = ", calculator.subtract(1, 2));

	console.log("Multiply: 1 * 2 * 3 =", calculator.multiply(1, 2, 3));

	console.log("Divide: 1 / 2 =", calculator.divide(1, 2));
}

runApp();
