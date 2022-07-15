import _throttle from 'lodash.throttle';
// TODO додати тротл на функцію як в другому завданні

const form = document.querySelector('.feedback-form');
const input = form.querySelector('input[name="email"]');
const textarea = form.querySelector('textarea[name="message"]');

const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', _throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

formFilling();

function onFormInput(event) {

  const formData = {
    email: input.value,
    message: textarea.value,
  };

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
};

function onFormSubmit(event) {
  event.preventDefault();

  // const savedFormData = localStorage.getItem(LOCALSTORAGE_KEY);
  // const parsedFormData = JSON.parse(savedFormData);
  // ? було так, але мені не подобалось повторення

  console.log('Entered Data: ', parseLocalData());

  event.currentTarget.reset(); // * очищає поля форми
  localStorage.removeItem(LOCALSTORAGE_KEY); // * очищає локальне сховище
};

function formFilling() { // * виймає дані з локального сховища та ставить у форму при оновленні
  // const savedFormData = localStorage.getItem(LOCALSTORAGE_KEY);
  // const parsedFormData = JSON.parse(savedFormData);
  // ? було так, але мені не подобалось повторення

  const data = parseLocalData();  

  if (data) {             
    input.value = data.email;
    textarea.value = data.message;
  }
};

// * виймає об'єкт з локального сховища
function parseLocalData() {  
  const savedFormData = localStorage.getItem(LOCALSTORAGE_KEY);
  const parsedFormData = JSON.parse(savedFormData);

  return JSON.parse(savedFormData);
}

