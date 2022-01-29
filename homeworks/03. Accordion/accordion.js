function toggle() {

    let buttonInput = document.getElementsByClassName('button')[0];
    let workingText = document.getElementById('extra');

    if (buttonInput.textContent === 'More') {
        buttonInput.textContent = 'Less';
        workingText.style.display = 'block';
    } else {
        buttonInput.textContent = 'More'
        workingText.style.display = 'none'
    }

}