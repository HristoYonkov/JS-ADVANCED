function printN(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      let rowSum = 0;
      let colSum = 0;
      for (let j = 0; j < arr.length; j++) {
        rowSum += arr[i][j];
        colSum += arr[j][i];
      }
      newArr.push(rowSum)
      newArr.push(colSum)
    }
    console.log(newArr.every(a => a === newArr[0]))
}