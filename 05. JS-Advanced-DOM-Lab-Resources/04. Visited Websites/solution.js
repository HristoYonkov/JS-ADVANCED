function solve() {
    //TODO...

    let array = document.getElementsByTagName('a');
    for (let i = 0; i < array.length; i++) {
        array[i].addEventListener('click', function(e) {
            let pEl = document.getElementsByTagName('p');
            pEl = pEl[i];

            let text = pEl.innerText.split(' ')
            let num = ++text[1];
            pEl.innerText = `${text[0]} ${num} ${text[2]}`;
            
        });
    }

}