function solve(input) {
    input.shift();

    let format = [];

    for (el of input) {
        el = el.slice(2, el.length - 2).split(' | ');
        
        let obj = {
            Town: el[0],
            Latitude: Number(Number(el[1]).toFixed(2)),
            Longitude: Number(Number(el[2]).toFixed(2)),
        }
        
        format.push(obj);
    }
    

    console.log(JSON.stringify(format));
}

solve(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |'])