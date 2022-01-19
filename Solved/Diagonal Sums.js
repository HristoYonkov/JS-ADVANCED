function solve(input) {
    let leftSum = 0;
    let rightSum = 0;

    let lastElement = input.length - 1;

    for(let i = 0; i < input.length; i++) {
        leftSum += input[i][i];
        rightSum += input[i][lastElement];
        
        lastElement--;
    }

    console.log(leftSum, rightSum);
}

solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);