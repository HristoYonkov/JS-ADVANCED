function solve(input) {
    let sorted = input.slice().sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0) {
            result.push(sorted.shift());

        } else {
            result.push(sorted.pop());
        }
    }
    return result;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);