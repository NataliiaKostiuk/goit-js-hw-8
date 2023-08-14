import throttle from "lodash.throttle";
const throttle = require('lodash.throttle');
 
const KEY_STORAGE = "feedback-form-state";
const formValue = {
    email: '',
    message: '', 
}
const form = document.querySelector('.feedback-form');
storageValueToInput();


form.addEventListener('input',
    throttle(evt => {
        if (evt.target.name === 'email') {
        KEY_STORAGE.email = evt.target.value;
        formValue.email = form.email.value;  
    }
        if (evt.target.name === 'message') {
         KEY_STORAGE.message = evt.target.value;
         formValue.message = form.message.value;
     } 
        localStorage.setItem(KEY_STORAGE, JSON.stringify(formValue))
 }
     , 500   ))


function storageValueToInput() {
  if (
    localStorage.length > 0 &&
    Object.keys(localStorage).includes(KEY_STORAGE)
  ) { 
      form.email.value = JSON.parse(localStorage.getItem(KEY_STORAGE)).email;
      form.message.value = JSON.parse(localStorage.getItem(KEY_STORAGE)).message;
      formValue.email = JSON.parse(localStorage.getItem(KEY_STORAGE)).email;
      formValue.message = JSON.parse(localStorage.getItem(KEY_STORAGE)).message;   
  }
    
}


form.addEventListener('submit', handlerClear);
function handlerClear(evt) {
    evt.preventDefault();
    if (localStorage.length > 0 &&
    Object.keys(localStorage).includes(KEY_STORAGE)) {
console.log(JSON.parse(localStorage.getItem(KEY_STORAGE)))
    }
    formValue.email = '';
    formValue.message = '';
    form.email.value = '';
    form.message.value = '';
     localStorage.removeItem(KEY_STORAGE);
    
}



