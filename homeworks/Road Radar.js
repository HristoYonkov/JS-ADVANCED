function solve(currentSpeed, area) {
    let limit = 0;
    let difference = 0;

    if (area === 'motorway') {
        limit = 130;
    } else if (area === 'interstate') {
        limit = 90;
    } else if (area === 'city') {
        limit = 50;
    } else if (area === 'residential') {
        limit = 20;
    }

    if (currentSpeed <= limit) {
        console.log(`Driving ${currentSpeed} km/h in a ${limit} zone`);
    } else {
        difference = currentSpeed - limit;
        let status = '';

        if (difference <= 20) {
            status = 'speeding';

        } else if (difference <= 40) {
            status = 'excessive speeding';

        } else {
            status = 'reckless driving';
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
    }

}

solve(21, 'residential');