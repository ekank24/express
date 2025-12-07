const bookArray = [
  {
    book_id: 1,
    book_name: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    isbn: "978-0-618-64015-7",
    publication_year: 1954,
    lending_period_days: 28
  },
  {
    book_id: 2,
    book_name: "Pride and Prejudice",
    author: "Jane Austen",
    isbn: "978-1-5032-9056-3",
    publication_year: 1813,
    lending_period_days: 21
  },
  {
    book_id: 3,
    book_name: "To Kill a Mockingbird",
    author: "Harper Lee",
    isbn: "978-0-446-31078-9",
    publication_year: 1960,
    lending_period_days: 28
  }
];

console.log("bookarrayn tietotyyppi on:", typeof bookArray);
console.log("-----------------------------------");

console.log("koko bookarrayn sisältö:");
console.log(bookArray);
console.log("-----------------------------------");

console.log("ensimmäinen rivi (ensimmäinen olio):");
console.log(bookArray[0]);
console.log("-----------------------------------");

console.log("ensimmäisen kirjan nimi:");
console.log(bookArray[0].book_name);
console.log("-----------------------------------");

console.log("rivien määrä:");
console.log(bookArray.length);
console.log("-----------------------------------");

console.log("kaikkien kirjojen nimet:");
bookArray.forEach(book => {
  console.log(book.book_name);
});
console.log("-----------------------------------");