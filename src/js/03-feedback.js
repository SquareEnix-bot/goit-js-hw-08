import _throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const button = document.querySelector('button[type="submit"]');

const LOCALSTORAGE_KEY = 'feedback-form-state';

// ? запитати в ментора про перевірку на поля
// TODO зробити нормальну перевірку
if (form.elements.email.value === "" && form.elements.message.value === "") {
  button.disabled = true;
} 

const formFieldsData = {
  email: "",
  message: "",
};

form.addEventListener('input', _throttle(onFormInput, 500));

form.addEventListener('submit', onFormSubmit);

formFilling();

// * спосію з об'єктом всередині (сама придумала)
// function onFormInput(event) {

//   const formData = {
//     email: form.elements.email.value,
//     message: form.elements.message.value,
//   };
  
//   if (form.elements.email.value != "" && form.elements.message.value != "") {
//     button.disabled = false;
//   } else {
//     button.disabled = true;
//   }

//   localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
// };

// * спосію з об'єктом зовні (Репета)
// ? іноді вискакує undefined, запитати в ментора
function onFormInput(event) {
  formFieldsData[event.target.name] = event.target.value;

  if (form.elements.email.value != "" && form.elements.message.value != "") {
    button.disabled = false;
  } else {
    button.disabled = true;
  }  

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formFieldsData));
}

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