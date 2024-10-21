function main() {
    const numbers = [3, 4, 7, 10, 13]; // Example array of numbers
    const results = numbers.map(support); // Check each number
    console.log(results);
}

function support(num) {
    if (num <= 1) {
        return `${num} is not a prime`;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i !== 0) {
            return `${num} is not a prime`;
        }
    }
    return `${num} is a prime`;
}

main();
