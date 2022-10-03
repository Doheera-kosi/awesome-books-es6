import { pushItems } from './pushItems.js';
import { fieldValidation, bookName, author } from './fieldValidation.js';

export class Collection {
  constructor() {
    this.arr = JSON.parse(localStorage.getItem('bookList'));
  }

  // class to check array items in the local storage
  getBooks() {
    if (localStorage.getItem('bookList') === null) {
      this.arr = [];
    } else {
      this.arr = JSON.parse(localStorage.getItem('bookList'));
    }
  }

  // Class to update bookList in the LocalStorage
  UpdateLocalStorage() {
    localStorage.setItem('bookList', JSON.stringify(this.arr));
  }

  // class to push items into array and display them
  addBook() {
    const bookObject = {
      id: new Date().getTime().toString(),
      title: bookName.value,
      author: author.value,
    };
    this.arr.push(bookObject);
    this.UpdateLocalStorage();
    pushItems();
    fieldValidation();
  }

  setUpArray() {
    this.arr = JSON.parse(localStorage.getItem('bookList'));
  }

  // Class to Remove from the local Storage
  removeBook(id) {
    this.arr = this.arr.filter((e) => e.id !== id);
    this.UpdateLocalStorage();
    pushItems();
  }
}
const collection = new Collection();

// window onload function to get array items from the local storage and display them
window.onload = () => {
  collection.getBooks();
};

export default (Collection);