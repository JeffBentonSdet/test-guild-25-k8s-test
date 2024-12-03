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
