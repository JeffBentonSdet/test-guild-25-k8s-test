const Calculator = require("./calculator");

describe('add', () => {
    test('basic add', () => {
        expect(Calculator.add(5, 3)).toBe(8);
    });
});

describe('subtract', () => {
    test('basic subtract', () => {
        expect(Calculator.subtract(10, 4)).toBe(6);
    });
});

describe('long_division', () => {
    test('basic division', async () => {
        const result = await Calculator.long_division(10, 2);
        expect(result).toBe(5);
    });

    test('division by zero', async () => {
        await expect(Calculator.long_division(10, 0)).rejects.toThrow("Division by zero is not allowed");
    });

    test('division with delay', async () => {
        const start = Date.now();
        const result = await Calculator.long_division(10, 2, 2);
        const end = Date.now();
        expect(result).toBe(5);
        expect(end - start).toBeGreaterThanOrEqual(2000);
    });
});