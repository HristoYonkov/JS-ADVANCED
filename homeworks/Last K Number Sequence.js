function solve(n, k) {
    let newArr = [1,];

    for(let i = 1; i < n; i++) {
        let sum = 0;

        for(let si = 1; si <= k; si++) {
            if(newArr[i - si] !== undefined) {
                sum += newArr[i - si];

            } else {
                break;
            }
        }

        newArr[i] = sum;
    }

    return newArr;
}

solve(8, 2);