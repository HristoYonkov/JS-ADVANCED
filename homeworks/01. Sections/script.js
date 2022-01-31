function create(words) {
   let input = words;
   
   for (el of input) {
      let divElement = document.createElement('div');
      let pElement = document.createElement('p');
      pElement.style.display = 'none';

      pElement.textContent = el;
      divElement.appendChild(pElement);
      divElement.addEventListener('click', e => e.target.children[0]
      .style.display = 'block');
      document.getElementById('content').appendChild(divElement);
   }

}