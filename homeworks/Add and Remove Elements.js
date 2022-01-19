function solve (input) {

    let output = [];
    let initial = 1;

    for(let i = 0; i < input.length; i++) {
        if (input[i] === 'add') {
            output.push(initial);
            initial++;
        } else {
            output.pop();
            initial++;
        }
    }

    if (output.length === 0) {
        console.log('Empty');

    } else {
        console.log(output.join('\n'));
    }
}