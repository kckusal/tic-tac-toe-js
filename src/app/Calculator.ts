export class Calculator {
	add(x: number, y: number): number {
		return x + y;
	}

	subtract(x: number, y: number): number {
		return x - y;
	}

	multiply(x: number, y: number): number {
		return x * y;
	}

	divide(p: number, q: number): number {
		if (q === 0) {
			throw new Error("Cannot divide by zero");
		}
		return p / q;
	}
}
