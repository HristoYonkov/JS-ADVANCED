function solve (input) {
    let products = {};

    for(el of input) {
        let [town, product, price] = el.split(' | ');
        price = Number(price);

        if (products[product] === undefined) {
            products[product] = {
                town,
                price,
            }
        } else {
            if (products[product].price > price) {
                products[product].town = town;
                products[product].price = price;
            }
        }
    }

    for(pr in products) {
        console.log(`${pr} -> ${products[pr].price} (${products[pr].town})`);
    }
    
}

solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10'])