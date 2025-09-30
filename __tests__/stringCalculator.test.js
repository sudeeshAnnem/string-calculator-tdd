const { add } = require('../stringCalculator')


test('empty string returns 0', () => {
    expect(add("")).toBe(0);
});


test('single number returns its value', () => {
    expect(add("1")).toBe(1);
});


test('two numbers comma separated', () => {
    expect(add("1,5")).toBe(6);
});

test('multiple numbers', () => {
    expect(add("1,2,3,4")).toBe(10);
});