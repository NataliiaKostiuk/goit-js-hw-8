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
        formValue.email = form.email.value;
        console.log(form.email.value);
    }
     if (evt.target.name === 'message') {
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
      const obj = JSON.parse(localStorage.getItem(KEY_STORAGE));
      form.email.value = obj.email;
      form.message.value = obj.message;
     
  }
    
}

console.log(JSON.parse(localStorage.getItem(KEY_STORAGE)))
form.addEventListener('submit', handlerClear);
function handlerClear(evt) {
    evt.preventDefault();
    form.email.value = '';
    form.message.value = '';
     localStorage.removeItem(KEY_STORAGE);
    
}



