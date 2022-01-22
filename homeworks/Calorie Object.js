function solve(input) {
    let output = {};

    for(i = 0; i < input.length; i+=2) {
        output[input[i]] = Number(input[i + 1]);
    }
    console.log(output);
}

solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])