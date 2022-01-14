function solve (fruit, weight, price) {
    weight = weight / 1000;
    price = price * weight;
    console.log(`I need $${price.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}

solve('apple', 1000, 2.35);