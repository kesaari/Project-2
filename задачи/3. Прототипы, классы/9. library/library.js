function Book(name, author, year) {
  this.name = name;
  this.author = author;
  this.year = year;
  this.reader = null;
}

Book.prototype.changeBookName = function(newBookName) {
  if (this.name === newBookName) { return false };
    this.name = newBookName;
    return true;
};
Book.prototype.changeAuthorName = function(newAuthorName) {
  if (this.author === newAuthorName) { return false };
    this.author = newAuthorName;
    return true;
};
Book.prototype.getCurrentReader = function() {
  return this.reader
};
Book.prototype.isAvailable = function() {
  return this.reader === null
};
Book.prototype.takeBook = function(readerName) {
  if (this.reader === null) {
    this.reader = readerName;
    return true;
  } else {
    return false
  }
}
Book.prototype.returnBook = function() {
  if (this.reader !== null) {
    this.reader = null;
    return true;
  } else {
    return false
  }
}


export { Book };
// Для запуска теста вводим в терминале команду: npm run test:current -- library.test.js
