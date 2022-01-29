function subtract() {

    let fn = Number(document.getElementById('firstNumber').value);
    let sn = Number(document.getElementById('secondNumber').value);
    let output = fn - sn;
    let result = document.getElementById('result').textContent = output

}