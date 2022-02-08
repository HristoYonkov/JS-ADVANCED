function solve() {
    let arg = Array.from(arguments);

    let obj = {};

    for(el of arg) {
        let type = typeof el;

        console.log(`${type}: ${el}`);

        if (!obj[type]) {
            obj[type] = 0;
        }

        obj[type] += 1;
    }

    let sortedObj = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);

    for(key of sortedObj) {
        console.log(`${key} = ${obj[key]}`);
    }
      
}