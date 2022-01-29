function solve() {
  let textInput = document.getElementById('text').value;
  let caseTextInput = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');
  textArray = textInput.toLowerCase().split(' ');

  if (caseTextInput == 'Camel Case') {
    for (i = 1; i < textArray.length; i++) {
      let word = textArray[i];
      let letter = word[0].toUpperCase();
      word = word.substring(1, word.length);
      word = letter + word;
      textArray[i] = word;
    }

  } else if (caseTextInput == 'Pascal Case') {
    for (i = 0; i < textArray.length; i++) {
      let word = textArray[i];
      let letter = word[0].toUpperCase();
      word = word.substring(1, word.length);
      word = letter + word;
      textArray[i] = word;
    }

  } else {
    return result.textContent = 'Error!';

  }

  return result.textContent = textArray.join('');
}