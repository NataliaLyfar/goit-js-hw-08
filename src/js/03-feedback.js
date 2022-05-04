import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = "feedback-form-state";
// I variant
// let data = {};
// savedDataOutput();
// const onInputDataSave = (e) => {
//     data[e.target.name] = e.target.value;
//     const storageDate = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  
//     localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify({ ...storageDate, ...data }));
    
// };
// const onFormSubmit = (e) => {
//     e.preventDefault(); 
//     if (form.elements.email.value == '' || form.elements.message.value == '') {
//         alert('Error, all fields must be filled!!');
//         return;
//     } 
//         e.currentTarget.reset();
//         console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
//         localStorage.removeItem(LOCALSTORAGE_KEY);
//         data = {};
//         savedDataOutput();
// };
// function savedDataOutput () {
//     const savedDataForm = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
//     Object.keys(savedDataForm || {}).forEach((item) => form[item].value = savedDataForm[item]);
// };
// II variant
const data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) ?? {};

form.elements.email.value = data.email ?? '';
form.elements.message.value = data.message ?? '';

const onInputDataSave = e => {
  data[e.target.name] = e.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
};

const onFormSubmit = e => {
  e.preventDefault();

  const formElements = e.currentTarget.elements;
  const email = formElements.email.value;
  const message = formElements.message.value;

  console.log({ email, message });

  localStorage.removeItem(LOCALSTORAGE_KEY);
  e.currentTarget.reset();
};

form.addEventListener('input', throttle(onInputDataSave,500));
form.addEventListener('submit', onFormSubmit);


