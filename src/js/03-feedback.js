import throttle from "lodash.throttle";
const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(handlerInput), 500);
form.addEventListener('submit', handlerClear);
 
const KEY_STORAGE = "feedback-form-state";

let formValue = JSON.parse(localStorage.getItem(KEY_STORAGE)) ?? {};
const { email, message } = form.elements;
email.value = formValue.email ?? "";
message.value = formValue.message ?? "";

function handlerInput(evt) {
    formValue[evt.target.name] = evt.target.value;
    localStorage.setItem(KEY_STORAGE, JSON.stringify(formValue));
    
}


function handlerClear(evt) {
     evt.preventDefault();
    console.log(formValue);
    formValue = {};
     form.reset();
    localStorage.removeItem(KEY_STORAGE);
    
}
