// Validating Input Fields Function
export const bookName = document.querySelector('#title');
export const author = document.querySelector('#author');
export const msg = document.querySelector('#msg');

export const fieldValidation = () => {
  if (bookName.value === '' || author.value === '') {
    msg.innerHTML = 'Please fields can not be blank';
  } else {
    msg.innerHTML = 'Success!';
  }
};

export default (fieldValidation);
