function subtract() {
    let elementOne = Number(document.getElementById('firstNumber').value);
    let elementTwo = Number(document.getElementById('secondNumber').value);
    document.getElementById('result').innerText = elementOne - elementTwo; 
}