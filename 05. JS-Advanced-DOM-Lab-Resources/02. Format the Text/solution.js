function solve() {
  //TODO...
  let input = document.getElementById('input').innerText;

  input = input.split('. ');

  let paragraph = document.createElement('p');
  let counter = 0;

  for(let i = 0; i < input.length; i++) {
    let sentence = input[i];
    if (counter !== 3) {
      paragraph.innerHTML += sentence + '. ';
      counter++

    } else {
      document.getElementById('output').appendChild(paragraph);
      paragraph = document.createElement('p');
      paragraph.innerHTML += sentence + '. ';
      counter = 1;
    }
    
  }

  if(paragraph.innerHTML !== '') {
    document.getElementById('output').appendChild(paragraph);
  }

}