export class Calculator {
	add(x: number, y: number): number {
		return x + y;
	}

	subtract(x: number, y: number): number {
		return x - y;
	}

	multiply(a: number, b: number, c: number): number {
		return a * b * c;
	}

	divide(x: number, y: number): number {
		if (y === 0) {
			throw new Error("Cannot divide by zero");
		}
		return x / y;
	}
}
