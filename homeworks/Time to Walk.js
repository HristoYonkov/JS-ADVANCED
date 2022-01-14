function solve(steps, lengthOfSteps, speed) {
    let distance = steps * lengthOfSteps;
    let breaks = Math.floor(distance / 500);
    let ms = speed * 1000 / 60 / 60;
    let secondsNeeded = (distance / ms);

    let minutes = Math.floor(secondsNeeded / 60) + breaks;
    let hours = Math.floor(minutes / 60);
    let seconds = Math.round(secondsNeeded % 60);
    minutes = minutes - hours * 60;

    if (seconds <= 9) {
        seconds = '0' + seconds;
    }
    
    if (minutes <= 9) {
        minutes = '0' + minutes;
    }

    if(hours < 1) {
        hours = '00';

    } else {
        if (hours <= 9) {
            hours = '0' + hours;
        }
    }
    
    console.log(`${hours}:${minutes}:${seconds}`);
}

solve(8000, 0.60, 5);