import _throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const button = document.querySelector('button[type="submit"]');

const LOCALSTORAGE_KEY = 'feedback-form-state';

if (form.elements.email.value === "" && form.elements.message.value === "") {
  button.disabled = true;
} 

form.addEventListener('input', _throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

formFilling();

function onFormInput(event) {

  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };   
  
  if (form.elements.email.value != "" && form.elements.message.value != "") {
    button.disabled = false;
  } else {
    button.disabled = true;
  }  

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
};

function onFormSubmit(event) {
  event.preventDefault();  

  console.log('Entered Data: ', parseLocalData());

  event.currentTarget.reset(); // * очищає поля форми
  localStorage.removeItem(LOCALSTORAGE_KEY); // * очищає локальне сховище  

  if (form.elements.email.value === "" && form.elements.message.value === "") {
    button.disabled = true;
  } 
};

function formFilling() { // * виймає дані з локального сховища та ставить у форму при оновленні
  const data = parseLocalData();  

  if (data) {             
    form.elements.email.value = data.email;
    form.elements.message.value = data.message;
  }
};

// * виймає об'єкт з локального сховища
function parseLocalData() {  
  const savedFormData = localStorage.getItem(LOCALSTORAGE_KEY);
  const parsedFormData = JSON.parse(savedFormData);

  return JSON.parse(savedFormData);
}

