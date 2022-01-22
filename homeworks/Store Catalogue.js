function solve (input) {
    let catalog = {};

    for(el of input) {
        let [productName, productPrice] = el.split(' : ');
        catalog[productName] = productPrice;
    }

    let sortedCatalog = Object.keys(catalog).sort((a, b) => a.localeCompare(b));

    let initial = sortedCatalog[0][0];
    console.log(initial);

    for (key of sortedCatalog) {
        if (key[0] === initial) {
            console.log(`  ${key}: ${catalog[key]}`);

        } else {
            initial = key[0];
            console.log(initial);
            console.log(`  ${key}: ${catalog[key]}`);
        }
    }
}

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)