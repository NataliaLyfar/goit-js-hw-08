import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = "feedback-form-state";
// I variant
let data = {};
const storageDate = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
const onInputDataSave = (e) => {
    data[e.target.name] = e.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
};
const onFormSubmit = (e) => {
    e.preventDefault(); 
    if (form.elements.email.value == '' || form.elements.message.value == '') {
        alert('Error, all fields must be filled!!');
        return;
    } 
    localStorage.removeItem(LOCALSTORAGE_KEY);
    e.currentTarget.reset();
    console.log(storageDate);
};
const savedDataOutput = () => {
  if(storageDate){
  Object.keys(storageDate).forEach((item) => form[item].value = storageDate[item])
}
};
savedDataOutput();
// II variant
// const data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) ?? {};
// form.elements.email.value = data.email ?? '';
// form.elements.message.value =data.message ?? '';

// const onInputDataSave = e => {
//   data[e.target.name] = e.target.value;
//   localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
// };

// const onFormSubmit = e => {
//   e.preventDefault();
//   if (form.elements.email.value == '' || form.elements.message.value == '') {
//             alert('Error, all fields must be filled!!');
//             return;
//         } 
//   const formElements = e.currentTarget.elements;
//   const email = formElements.email.value;
//   const message = formElements.message.value;
//   console.log({ email, message });
//   localStorage.removeItem(LOCALSTORAGE_KEY);
//   e.currentTarget.reset();
// };

form.addEventListener('input', throttle(onInputDataSave,500));
form.addEventListener('submit', onFormSubmit);


