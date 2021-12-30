function colorize() {
    // TODO Teal
    let array = document.getElementsByTagName('tr')
    
    for(let i = 0; i < array.length; i++) {
        if (i % 2 !== 0) {
            array[i].style.backgroundColor = 'Teal';
        }
    }
}