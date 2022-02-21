const library = require('./library');
const assert = require('chai').assert;

describe('Testing library', () => {

    describe('Testing calcPriceOfBook ', () => {
        it('year testings', () => {
            assert(library.calcPriceOfBook('throy', 1990) === 'Price of throy is 20.00')
        })
        it('year testing', () => {
            assert(library.calcPriceOfBook('throy', 1980) === 'Price of throy is 10.00')
        })
        it('year testing', () => {
            assert(library.calcPriceOfBook('throy', 1970) === 'Price of throy is 10.00')
        })

        it('Book is not string', () => {
            assert.throws(() => {library.calcPriceOfBook(123, 1980)}, 'Invalid input')
        })
        it('Year is not integer', () => {
            assert.throws(() => {library.calcPriceOfBook('book', 1980.523)}, 'Invalid input')
        })
    });

    describe('Testing findBook', () => {
        it('Testing with empty array', () => {
            assert.throws(() => {library.findBook([], 'book')}, "No books currently available")
        })
        it('Testing with empty array', () => {
            assert(library.findBook(["Troy", "Life Style", "Torronto"], 'Torronto') === "We found the book you want.")
        })
        it('Testing with empty array', () => {
            assert(library.findBook(["Troy", "Life Style", "Torronto"], 'mook') === "The book you are looking for is not here!")
        })
    });

    describe('Testing arrangeTheBooks', () => {
        it('Testing with empty array', () => {
            assert.throws(() => {library.arrangeTheBooks('str')}, "Invalid input")
        })
        it('Testing with empty array', () => {
            assert.throws(() => {library.arrangeTheBooks(0)}, "Great job, the books are arranged.")
        })
        it('Testing with empty array', () => {
            assert.throws(()=>{library.arrangeTheBooks(2.5)}, "Invalid input")
        })
        it('Testing with empty array', () => {
            assert.throws(()=> {library.arrangeTheBooks(-1)}, "Invalid input")
        })
        it('Testing with empty array', () => {
            assert(library.arrangeTheBooks(40) === "Great job, the books are arranged.")
        })
        it('Testing with empty array', () => {
            assert(library.arrangeTheBooks(30) === "Great job, the books are arranged.")
        })
        it('Testing with empty array', () => {
            assert(library.arrangeTheBooks(41) === "Insufficient space, more shelves need to be purchased.")
        })
        
    });
    
});

