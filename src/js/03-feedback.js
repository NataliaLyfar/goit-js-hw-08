import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = "feedback-form-state";
const formData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) ?? {};

form.elements.email.value = formData.email ?? "";
form.elements.message.value = formData.message ?? "";

const onInputDataSave = (e) => {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
};

const onFormSubmit = (e) => {
    e.preventDefault(); 
    const formElements = e.currentTarget.elements;
    const email = formElements.email.value;
    const message = formElements.message.value;

    const  formData = { email, message };
    console.log(formData);
    
    localStorage.removeItem(LOCALSTORAGE_KEY);
    e.currentTarget.reset();
};

form.addEventListener('input', onInputDataSave);
form.addEventListener('submit', throttle(onFormSubmit, 500));
