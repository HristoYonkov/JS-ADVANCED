function solve (num) {
    let arr = num.toString().split('').map(Number);
    let ifSame = true;
    let fisrt = arr[0];
    let sum = 0;

    for (let el = 0; el < arr.length; el++) {
        sum += arr[el];
        
        if (arr[el] !== fisrt) {
            ifSame = false;
        }
    }
    console.log(ifSame);
    console.log(sum);
}

solve(1234)