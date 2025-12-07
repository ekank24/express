const book = {
  bookArray: [
    {
      book_id: 1,
      book_name: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      isbn: "978-0-618-64015-7"
    },
    {
      book_id: 2,
      book_name: "Pride and Prejudice",
      author: "Jane Austen",
      isbn: "978-1-5032-9056-3"
    },
    {
      book_id: 3,
      book_name: "To Kill a Mockingbird",
      author: "Harper Lee",
      isbn: "978-0-446-31078-9"
    }
  ],

  getAllBooks: function() {
    console.log("kaikki kirjat");
    console.log(this.bookArray);
  },

  getOneBook: function(index) {
    console.log(`kirja indeksillä ${index}`);
    if (index >= 0 && index < this.bookArray.length) {
      console.log(this.bookArray[index]);
    } else {
      console.log("virheellinen indeksi");
    }
  },

  addBook: function(id_book, name, author, isbn) {
    console.log(`lisätään uusi kirja: ${name}`);
    const newBook = {
      book_id: id_book,
      book_name: name,
      author: author,
      isbn: isbn
    };
    this.bookArray.push(newBook);
  }
};

book.getAllBooks();
console.log("\n");

book.getOneBook(1);
console.log("\n");

book.addBook(4, "The Hobbit", "J.R.R. Tolkien", "978-0-345-33968-3");
console.log("\n");

console.log("tarkistus että kirja on lisätty:");
book.getAllBooks();