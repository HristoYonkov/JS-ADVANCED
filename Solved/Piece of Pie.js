function solve(arr, first, last) {
    let firstInd = arr.indexOf(first);
    let lastInd = arr.lastIndexOf(last) + 1;

    let result = arr.slice(firstInd, lastInd);
    
    return result;
}

solve(["Pumpkin Pie", "Key Lime Pie", "Cherry Pie", "Lemon Meringue Pie", "Sugar Cream Pie"],
'Key Lime Pie',
'Lemon Meringue Pie');