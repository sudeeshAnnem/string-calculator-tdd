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

test('handles newlines as delimiters', () => {
    expect(add("1\n2,3")).toBe(6);
});

test('supports custom delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
});


test('throws on negative numbers', () => {
    expect(() => add("1,-2,-3")).toThrow("negative numbers not allowed -2,-3");
});