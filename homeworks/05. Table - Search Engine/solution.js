function search() {
   // TODO
   let list = document.querySelectorAll('#towns li');
   let input = document.getElementById('searchText').value;
   let result = document.getElementById('result');

   let matches = 0;

   for (el of list) {
      let text = el.textContent;
      el.style = '';
      if (el.textContent.includes(input)) {
         matches++;
         el.style = 'font-weight: bold; text-decoration: underline;';
      } 
   }

   if (matches > 0) {
      result.textContent = `${matches} matches found`;
   } else {
      result.textContent = ``;
   }
   
   matches = 0;
}