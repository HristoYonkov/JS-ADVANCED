function solve(input) {
    let output = [];

    for(let i = 0; i < input.length; i++) {
        if (i % 2 !== 0) {
            output.push(input[i] * 2);
        }
    }

    console.log(output.reverse().join(' '));
}

solve([10, 15, 20, 25]);