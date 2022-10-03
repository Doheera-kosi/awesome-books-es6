export const elements = document.querySelector('#elements');

export function pushItems() {
  let bookHtml = '';
  const booksArray = JSON.parse(localStorage.getItem('bookList'));
  if (booksArray !== null) {
    booksArray.forEach((item, index) => {
      bookHtml += `
      <li class='list_item' style="background-color: ${index % 2 && 'rgb(225, 223, 223)'}">
        <p class="book-name"> "${item.title}" by ${item.author}</p> <br>
        <button type="button" id=${item.id} onclick="collection.removeBook(this.id)">Remove <i class="fas fa-plus-circle"></i></button>
      </li>
      `;
    });
    elements.innerHTML = bookHtml;
  }
}

export default (pushItems);