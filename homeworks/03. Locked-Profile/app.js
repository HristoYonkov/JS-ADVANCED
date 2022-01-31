function lockedProfile() {
    let buttonElements = document.querySelectorAll('button');

    for(button of buttonElements) {
        button.addEventListener('click', personInfo);
    }

    function personInfo(e) {
        let hiddenElement = e.target.parentElement.querySelector('div');
        let buttonText = e.target;

        if (!e.target.parentElement.querySelector('input').checked) {
            if (buttonText.innerText === 'Show more') {
                hiddenElement.style.display = 'block';
                buttonText.innerText = 'Hide it';
            } else {
                hiddenElement.style.display = 'none';
                buttonText.innerText = 'Show more';
            }
        }
    }
    
}