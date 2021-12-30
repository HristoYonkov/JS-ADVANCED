function sumTable() {
    // TODO Teal
    let array = document.getElementsByTagName('td');
    let sum = 0;

    for(let i = 1; i < array.length - 1; i += 2) {
        let num = Number(array[i].innerHTML);
        sum += num;
    }

    document.getElementById('sum').innerHTML = sum;
}