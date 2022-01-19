function solve(input) {
    let elements = [];

    for(let i = 0; i<input.length; i++) {
        if(i % 2 === 0){
            elements.push(input[i]);
        }
    }

    console.log(elements.join(' '));
}

solve(['20', '30', '40', '50', '60'])