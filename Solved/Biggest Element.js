function solve(input) {
    let output = input[0][0];

    for(let first of input) {
        for (let second of first) {
            if (second > output) {
                output = second;
            }
        }
    }
    console.log(output);
}

solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]);