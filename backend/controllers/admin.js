const Books = require("../models/Books");
//Import the Books Model

exports.getIndex = (req, res) => {
  res.send("Book Library Home Route");
};
//Create A Route to Get the Home index of the API

exports.getBooks = (req, res) => {
  Books.fetchAll((books) => {
    console.log(books);
    res.json(books);
  });
};
//Create GET Request to retrieve ALL the books

exports.getBook = (req, res) => {
  const bookId = req.params.bookId;

  Books.findById(bookId, (book) => {
    console.log(book);
    res.json(book);
  });
};
//Create GET request to look for book by ID

exports.postAddBook = (req, res) => {
  const {
    name,
    author,
    narrated,
    img,
    bookLength,
    releaseDate,
    language,
  } = req.body;

  const book = new Books(
    null,
    name,
    author,
    narrated,
    img,
    bookLength,
    releaseDate,
    language
  );
  book.save();
  res.json({ msg: "Book Added" });
};
//Create POST request to create a new instance of a Book.
