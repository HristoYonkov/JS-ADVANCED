function solve(n1, n2) {
    let smallest;
    let common;

    if (n1 > n2) {
        smallest = n2;
        common = smallest;
    } else {
        smallest = n1;
        common = smallest;
    }

    while(n1 % common !== 0 || n2 % common !== 0) {
        common --;
    }

    console.log(common);
}

solve(2154, 458)