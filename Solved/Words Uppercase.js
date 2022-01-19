function solve(input) {
    let pattern = /[a-zA-Z]+/g;
    let wordsArr = [];
    let exec = pattern.exec(input);

    while(exec!== null) {
        wordsArr.push(exec[0].toUpperCase());
        exec = pattern.exec(input);
    }

    console.log(wordsArr.join(', '));

}

solve('Hi, How are you?');