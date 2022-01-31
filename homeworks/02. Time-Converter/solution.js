function attachEventsListeners() {
    let daysBtnElement = document.getElementById('daysBtn');
    let hoursBtnElement = document.getElementById('hoursBtn');
    let minutesBtnElement = document.getElementById('minutesBtn');
    let secondBtnElement = document.getElementById('secondsBtn');

    daysBtnElement.addEventListener('click', getDays);
    hoursBtnElement.addEventListener('click', getHours);
    minutesBtnElement.addEventListener('click', getMinutes);
    secondBtnElement.addEventListener('click', getSeconds);

    function getDays() {
        let infoElement = document.getElementById('days');

        if (infoElement.value !== ''){
            let dayNumber = Number(infoElement.value);
            document.getElementById('hours').value = 24 * dayNumber;
            document.getElementById('minutes').value = 1440 * dayNumber;
            document.getElementById('seconds').value = 86400 * dayNumber;
            
        }
    }


    function getHours() {
        let infoElement = document.getElementById('hours');

        if (infoElement.value !== ''){
            let hourNumber = Number(infoElement.value);

            document.getElementById('days').value = hourNumber / 24;
            document.getElementById('minutes').value = hourNumber * 60;
            document.getElementById('seconds').value = (hourNumber * 60) * 60;
            
        }
    }


    function getMinutes() {
        let infoElement = document.getElementById('minutes');

        if (infoElement.value !== ''){
            let minutesNumber = Number(infoElement.value);

            document.getElementById('days').value = minutesNumber / 1440;
            document.getElementById('hours').value = minutesNumber / 60;
            document.getElementById('seconds').value = minutesNumber * 60;
            
        }
    }


    function getSeconds() {
        let infoElement = document.getElementById('seconds');

        if (infoElement.value !== ''){
            let secondsNumber = Number(infoElement.value);

            document.getElementById('days').value = secondsNumber / 86400;
            document.getElementById('hours').value = (secondsNumber / 60) / 60;
            document.getElementById('minutes').value = secondsNumber / 60;
            
        }
    }
    
}