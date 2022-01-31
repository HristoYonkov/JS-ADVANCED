function solve() {
  let generateButtonElement = document.getElementsByTagName('button')[0];
  let buyButtonElement = document.getElementsByTagName('button')[1];

  generateButtonElement.addEventListener('click', generate);
  buyButtonElement.addEventListener('click', buy);

  function generate(e) {
    let incomingText = document.getElementsByTagName('textarea')[0].value;
    incomingText = JSON.parse(incomingText);

    for (let el of incomingText) {
      let tableRow = document.createElement('tr');

      let imgData = document.createElement('td');
      let nameData = document.createElement('td');
      let priceData = document.createElement('td');
      let decFactorData = document.createElement('td');
      let checkBoxData = document.createElement('td');

      let imgElement = document.createElement('img');
      let nameElement = document.createElement('p');
      let priceElement = document.createElement('p');
      let decFactorElement = document.createElement('p');
      imgElement.setAttribute('src', el.img);
      nameElement.textContent = el.name;
      priceElement.textContent = el.price;
      decFactorElement.textContent = el.decFactor;
      imgData.appendChild(imgElement);
      nameData.appendChild(nameElement);
      priceData.appendChild(priceElement);
      decFactorData.appendChild(decFactorElement);
      
      let inputCheckElement = document.createElement('input');
      inputCheckElement.setAttribute('type', 'checkbox');
      checkBoxData.appendChild(inputCheckElement);
      tableRow.appendChild(imgData);
      tableRow.appendChild(nameData);
      tableRow.appendChild(priceData);
      tableRow.appendChild(decFactorData);
      tableRow.appendChild(checkBoxData);
      
      let tBodyElement = document.getElementsByTagName('tbody')[0];
      tBodyElement.appendChild(tableRow);
    }
  }

  function buy(e) {
    let checkboxes = document.querySelectorAll('input');
    let furnitures = [];
    let totalPrice = 0;
    let decFactor = 0;

    for(box of checkboxes) {
      if(box.checked) {
        let info = box.parentElement.parentElement.querySelectorAll('p');
        furnitures.push(info[0].textContent);
        totalPrice += Number(info[1].textContent);
        decFactor += Number(info[2].textContent);

      }
    }
    decFactor /= furnitures.length;

    if(furnitures.length > 0) {
      console.log(`Bought furniture: ${furnitures.join(', ')}`);
      console.log(`Total price: ${totalPrice.toFixed(2)}`);
      console.log(`Average decoration factor: ${decFactor}`);
      let outputText = document.getElementsByTagName('textarea')[1];

      outputText.value = `Bought furniture: ${furnitures.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${decFactor}`;
    }
  }
}