function getFibonator() {
    let a = 0;
    let b = 1;

    return function () {
        let sum = a + b;
        a = b;
        b = sum;
        
        return a;
    }
}