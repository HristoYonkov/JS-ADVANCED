function solve(input) {
    input.sort((a, b) => b - a);
    let output = [];

    for(let i = 0; i < input.length / 2; i++) {
        output.unshift(input[i]);
    }

    return output;
}

solve([3, 19, 14, 7, 2, 19, 6]);