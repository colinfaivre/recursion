function sumFromZeroToN(n: number): number {
    // base case
    if (n === 0) return 0;

    // recursive case
    return n + sumFromZeroToN(n - 1);
}

console.log(sumFromZeroToN(4))
console.log(sumFromZeroToN(0))
console.log(sumFromZeroToN(1))
console.log(sumFromZeroToN(2))
console.log(sumFromZeroToN(4000))
// @TODO How to avoid : RangeError: Maximum call stack size exceeded ?
// @TODO Add prettier and eslint
// @TODO Add jest