function growingWord() {
  //TODO...
  let element = document.getElementsByTagName('p')[2];
  let count = 2;
  console.log(element);

  if (!element.style.fontSize) {
    element.setAttribute('style', `font-size: ${count}px; color: blue`);

  } else {
    let increment = Number(element.style.fontSize.split('px')[0]) * count;
    element.style.fontSize = `${increment}px`;

    if (element.style.color === 'blue') {
      element.style.color = 'green';

    } else if (element.style.color === 'green') {
      element.style.color = 'red';

    } else if (element.style.color === 'red') {
      element.style.color = 'blue';
    }
  }
}