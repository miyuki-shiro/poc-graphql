const { getBooks, getBook } = require('../service/booksService');

const books = async (_, data, context) => {
  const booksData = await getBooks();
  return booksData;
}

const book = async (_, data, context) => {
  const bookData = await getBook(data.id);
  return bookData;
}

module.exports = { books, book };