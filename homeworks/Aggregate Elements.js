function solve(arr) {
    let sum = 0;
    let joined = arr.join('');
    let inverted = 0;
    
    arr.map((el) => inverted += 1 / el);
    arr.map((el) => sum += el);

    console.log(`${sum}\n${inverted}\n${joined}`);
}

solve([1, 2, 3]);