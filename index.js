import { pushItems } from './modules/pushItems.js';
import { Collection } from './modules/collectionClass.js';
import { } from './modules/time.js';
// Declaring Global Variables
const form = document.querySelector('#form');

// Navigation Variables
const navList = document.querySelector('#nav-list');
const navAdd = document.querySelector('#nav-add');
const navContact = document.querySelector('#nav-contact');
const sectionList = document.querySelector('#list');
const sectionAdd = document.querySelector('#add-book');
const sectionContact = document.querySelector('#contact');

const collection = new Collection();

// window onload function to get array items from the local storage and display them
window.onload = () => {
  collection.getBooks();
};

const addBtn = document.querySelector('.addBtn');

// event Listener to triger add Class
addBtn.addEventListener('click', () => {
  collection.getBooks();
  collection.addBook();
  form.reset();
});

navList.addEventListener('click', () => {
  sectionList.style.display = 'block';
  sectionAdd.style.display = 'none';
  sectionContact.style.display = ' none';
  pushItems();
});

navAdd.addEventListener('click', () => {
  sectionList.style.display = 'none';
  sectionAdd.style.display = 'block';
  sectionContact.style.display = ' none';
});

navContact.addEventListener('click', () => {
  sectionList.style.display = 'none';
  sectionAdd.style.display = 'none';
  sectionContact.style.display = ' flex';
});
