function solve(order) {
    let car = {};
    car.model = order.model;

    if (order.power <= 90) {
        car.engine = { power: 90, volume: 1800 }

    } else if (order.power <= 120) {
        car.engine = { power: 120, volume: 2400 };

    } else {
        car.engine = { power: 200, volume: 3500 }
    }

    if (order.carriage === 'hatchback') {
        car.carriage = { type: 'hatchback', color: order.color}

    } else {
        car.carriage = { type: 'coupe', color: order.color}
    }

    if (order.wheelsize % 2 == 0) {
        order.wheelsize--;
    } 

    order.wheelsize = Math.floor(order.wheelsize);

    car.wheels = (order.wheelsize.toString() + ' ').repeat(4).split(' ').map(Number).slice(0, 4);
    
    return car;
}

solve({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 });