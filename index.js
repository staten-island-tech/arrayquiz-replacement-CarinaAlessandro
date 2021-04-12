const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];

// //Sort books from oldest to most recent
const ordered = books.sort((a, b) => (a.publishDate > b.publishDate ? 1 : -1));
console.table(ordered);
//sort books alphabetically
const alpha = books.sort(function (a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});
console.log(alpha);
//Find who wrote War and Peace
const find = books.find((book) => book.name === "War and Peace");
console.log(find);
//was there at least one book published within the last 100 years?
const isHundred = books.some(function (book) {
  const currentYear = new Date().getFullYear();
  if (currentYear - book.publishDate <= 100) {
    return true;
  }
});
console.log(isHundred);
//was every book published within the last 100 years?
const isEvery = books.every(function (book) {
  const currentYear = new Date().getFullYear();
  if (currentYear - book.publishDate <= 100) {
    return true;
  }
});
console.log(isEvery);
//Array of authors and the book they wrote "--- wrote --- in ---"
books.forEach((book) =>
  console.log(
    authorFirst + " " + authorLast + " wrote " + name + " in " + publishDate
  )
); //i tried $ but no

//how many books were written before 1900?

console.log[
  books.filter(function (book) {
    if (book.publishDate <= 1900) {
    }
  })
].reduce((a, b) => a + b, 0);
