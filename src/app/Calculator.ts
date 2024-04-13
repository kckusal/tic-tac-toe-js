export class Calculator {
	add(a: number, b: number): number {
		return a + b;
	}

	subtract(a: number, b: number): number {
		return a - b;
	}

	multiply(a: number, b: number): number {
		return a * b;
	}

	divide(p: number, q: number): number {
		if (q === 0) {
			throw new Error("Cannot divide by zero");
		}
		return p / q;
	}
}
