function solve() {
  //TODO
  let inputText = document.getElementById('input').value;
  let output = document.getElementById('output');
  let inputArray = inputText.split('.').filter(e => e.length > 1);

  let arr = [];
  let counter = 0;
  
  for (let i = 0; i < inputArray.length; i++) {
    arr.push(inputArray[i]);
    counter ++;

    if (counter === 3) {
      let paragraph = arr.join('. ') + '.';
      output.innerHTML += `<p>${paragraph}</p>`;
      arr = [];
      counter = 0;
    }

  }

  if(arr.length > 0) {
    let par = arr.join('. ') + '.';
    output.innerHTML += `<p>${par}</p>`;
  }


}