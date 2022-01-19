function solve(input) {
    let result = input.reduce((a, x, i, arr) => {
        if (i !== 0) {
            if (x >= arr[i-1]) {
                a.push(x);
            }

        } else {
            a.push(x);
        }

        return a;

    }, []);

    return result;
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