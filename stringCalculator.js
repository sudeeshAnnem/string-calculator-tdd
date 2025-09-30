function add(numbers) {
    if (!numbers) return 0;
    const nums = numbers.replace(/\n/g, ',').split(',').map(n => parseInt(n));
    return nums.reduce((a, b) => a + b, 0);
}
module.exports = { add };