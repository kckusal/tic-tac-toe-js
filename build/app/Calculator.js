"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
class Calculator {
    add(x, y) {
        return x + y;
    }
    subtract(x, y) {
        return x - y;
    }
    multiply(x, y) {
        return x * y;
    }
    divide(p, q) {
        if (q === 0) {
            throw new Error("Cannot divide by zero");
        }
        return p / q;
    }
}
exports.Calculator = Calculator;
