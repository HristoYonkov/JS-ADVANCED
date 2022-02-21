class LibraryCollection {
    constructor(capacity) {
        this.capacity = Number(capacity);
        this.books = [];
    }

    addBook (bookName, bookAuthor) {
        if(this.books.length >= this.capacity) {
            throw new Error("Not enough space in the collection.");
        }

        let obj = {
            bookName,
            bookAuthor,
            payed: false,
        }

        this.books.push(obj);

        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        let currentBook = this.books.find(x => x.bookName === bookName) 
        if(!currentBook) {
            throw new Error(`${bookName} is not in the collection.`);
        }

        if(currentBook.payed === true) {
            throw new Error(`${bookName} has already been paid.`);
        }

        currentBook.payed = true;
        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName) {
        let currentBook = this.books.find(x => x.bookName === bookName);
        if(!currentBook) {
            throw new Error(`The book, you're looking for, is not found.`);
        }

        if(currentBook.payed === false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        let index = this.books.findIndex(x => x.currentBook === bookName);
        this.books.splice(index, 1);

        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor) {

        if(bookAuthor) {
            let author = this.books.find(x => x.bookAuthor === bookAuthor)
            if (author) {
                if (author.payed === true) {
                    return `${author.bookName} == ${bookAuthor} - Has Paid.`;  
                } else {
                    return `${author.bookName} == ${bookAuthor} - Not Paid.`;
                }
            } else {
                throw new Error(`${bookAuthor} is not in the collection.`);
            }

        } else {
            let output = [];
            let slots = this.capacity - this.books.length;
            let fl = `The book collection has ${slots} empty spots left.`;
            output.push(fl);

            let booksSorted = this.books.sort((a, b) => a.bookName.localeCompare(b.bookName)).forEach(book => {
                if(book.payed === true) {
                    let str = `${book.bookName} == ${book.bookAuthor} - Has Paid.`;
                    output.push(str)
                } else {
                    let str = `${book.bookName} == ${book.bookAuthor} - Not Paid.`;
                    output.push(str)
                }
            });

            return output.join('\n');

        }
    }

}

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());



