function solve(input, n) {
    for(let i = 0; i < n; i ++) {
        let buffer = input.pop();
        input.unshift(buffer);
    }
    console.log(input.join(' '));
}