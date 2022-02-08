function solve() {
    
    let inputNameElement = document.querySelectorAll('input')[0]
    let inputHallElement = document.querySelectorAll('input')[1]
    let inputPriceElement = document.querySelectorAll('input')[2];
    let onScreenBtnElement = document.querySelectorAll('button')[0];

    let archiveElement = document.getElementById('archive');
    let clearBtnElement = document.querySelectorAll('button')[1];

    onScreenBtnElement.addEventListener('click', (e) => {
        e.preventDefault();
        let name = inputNameElement.value;
        let hall = inputHallElement.value;
        let price = Number(inputPriceElement.value);
        
        if (name !== '' && hall !== '' && price === Number(price) && price > 0) {
            let onScreenSection = document.querySelector('#movies ul');
            let newMovie = document.createElement('li');
            let newSpan = document.createElement('span');
            let newStrong = document.createElement('strong');
            newSpan.textContent = name;
            newStrong.textContent = `Hall: ${hall}`;
            newMovie.appendChild(newSpan);
            newMovie.appendChild(newStrong);

            let newDiv = document.createElement('div');
            let strongPrice = document.createElement('strong');
            strongPrice.textContent = price.toFixed(2);
            let newInput = document.createElement('input');
            newInput.setAttribute('placeholder', "Tickets Sold");
            let archiveBtn = document.createElement('button');
            archiveBtn.textContent = 'Archive';
            archiveBtn.addEventListener('click', archive);
            newDiv.appendChild(strongPrice);
            newDiv.appendChild(newInput);
            newDiv.appendChild(archiveBtn);

            newMovie.appendChild(newDiv);
            onScreenSection.appendChild(newMovie);

            onScreenSection.appendChild(newMovie);

            inputNameElement.value = '';
            inputHallElement.value = '';
            inputPriceElement.value = '';
        }
    });

    function archive(e) {
        let ticketsCountElement = e.target.parentElement.children[1].value;
        

        if (ticketsCountElement!== '' && Number(ticketsCountElement) === Number(ticketsCountElement)) {
            let newLiElement = document.createElement('li');

            let newSpanElement = document.createElement('span');
            let newStrongElement = document.createElement('strong');
            let newBtnElement = document.createElement('button');
            newSpanElement.textContent = e.target.parentElement.parentElement.children[0].textContent;
            let num = ticketsCountElement * Number(e.target.parentElement.children[0].textContent);
            newStrongElement.textContent = `Total amount: ${num.toFixed(2)}`;
            newBtnElement.textContent = 'Delete';
            newBtnElement.addEventListener('click', deleteFn);
            
            newLiElement.appendChild(newSpanElement);
            newLiElement.appendChild(newStrongElement);
            newLiElement.appendChild(newBtnElement);

            archiveElement.children[1].appendChild(newLiElement);
            
            let removed = e.target.parentElement.parentElement;
            removed.remove();

        }
        
    }

    function deleteFn(e) {
        let deleteElement = e.target.parentElement;
        deleteElement.remove();
    }

    clearBtnElement.addEventListener('click', (e) => {
        let deletedElementsArray = archiveElement.querySelectorAll('li');
        if (deletedElementsArray.length > 0) {
            for (el of deletedElementsArray) {
                el.remove();
            }
        }
    });
}