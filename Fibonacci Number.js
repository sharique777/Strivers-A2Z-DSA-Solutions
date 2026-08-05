function calculateFibonacciNumberRecursively(n) {
    if (n === 1) {
        return 1;
    } else if (n === 0) {
        return 0;
    }
    return (
        calculateFibonacciNumberRecursively(n - 1) +
        calculateFibonacciNumberRecursively(n - 2)
    );
}
console.log(calculateFibonacciNumberRecursively(8));
