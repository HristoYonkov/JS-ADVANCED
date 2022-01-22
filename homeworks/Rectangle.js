function solve(width, height, color) {
    function capitalize(word) {
      return word[0].toUpperCase() + word.slice(1);
    }
  
    function calcArea() {
      return this.width * this.height;
    }
  
    return {
      width,
      height,
      color: capitalize(color),
      calcArea
    }
}

let rect = solve(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());