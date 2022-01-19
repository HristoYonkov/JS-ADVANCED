function solve(input) {
    let arr = [input[0]];

    for(let i = 1; i < input.length; i++) {
        let current = input[i];
        let last = input[i - 1];

        if(current >= last) {
            arr.push(current);
        }

    }

    return arr;
}

solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]);