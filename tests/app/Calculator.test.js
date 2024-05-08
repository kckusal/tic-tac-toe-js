import { beforeEach, describe, expect, test } from "vitest";
import { Calculator } from "../../src/app/Calculator";

describe("Calculator", () => {
  let calculator;

  beforeEach(() => {
    // get new instance of Calculator before each test to ensure tests are independent
    calculator = new Calculator();
  });

  test("adds two numbers correctly", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test("subtracts second number from first correctly", () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
  });

  test("multiplies two numbers correctly", () => {
    expect(calculator.multiply(1, 2)).toBe(2);
  });

  test("divides first number by second correctly", () => {
    expect(calculator.divide(1, 2)).toBe(0.5);
  });

  test("dividing first number by zero throws error", () => {
    expect(() => calculator.divide(1, 0)).toThrow("Cannot divide by zero");
  });
});
