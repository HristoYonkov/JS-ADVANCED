function extract(content) {
    let text = document.getElementById(content).innerHTML;
    let pattern = /\(([a-zA-Z ]+)\)/g;
    let words = [];
    let test = pattern.exec(text);
    while(test !== null) {
        words.push(test[1]);
        test = pattern.exec(text)
    }

    return words.join('; ');
}