function solve(input) {
    let count = 0;

    for(let i = 0; i < input.length; i++) {
        for(let ii = 0; ii < input[i].length; ii++) {
            let element = input[i][ii];
            let rightElement = input[i][ii+1];
            let downElement = undefined;
            
            if(i !== input.length - 1) {
                downElement = input[i+1][ii];
            }

            if (rightElement !== undefined && element === rightElement) {
                count ++;
            }

            if (downElement !== undefined && element === downElement) {
                count++
            }
        }
    }
    console.log(count);
}

solve([
[2, 2, 5, 7, 4],
[4, 0, 5, 3, 4],
[2, 5, 5, 4, 2]
]);

solve([
[ '2', '3', '4', '7', '0' ],
[ '4', '0', '5', '3', '4' ],
[ '2', '3', '5', '4', '2' ],
[ '9', '8', '7', '5', '4' ]
]);