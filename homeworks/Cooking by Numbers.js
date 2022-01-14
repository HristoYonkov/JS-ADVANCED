function solve(num, string1, string2, string3, string4, string5) {
    let number = Number(num);
    
    let arr = [string1, string2, string3, string4, string5].forEach(element => {
        if(element === 'chop') {
            number = number / 2;
            console.log(number);

        } else if (element === 'dice') {
            number = Math.sqrt(number);
            console.log(number);

        } else if (element === 'spice') {
            number = number + 1;
            console.log(number);

        } else if (element === 'bake') {
            number = number * 3;
            console.log(number);

        } else if (element === 'fillet') {
            number = number - number * 0.2;
            console.log(number);

        }
    });

}

solve('9','dice', 'spice', 'chop', 'bake', 'fillet');