import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = "feedback-form-state";
let data = {};
console.log(form);

const onInputDataSave = (e) => {
    data[e.target.name] = e.target.value;
    const storageDate = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify({ ...storageDate, ...data }));
};

const onFormSubmit = (e) => {
    e.preventDefault(); 
    if (form.elements.email.value == '' || form.elements.message.value == '') {
        alert('Error, all fields must be filled!!');
        return;
    } 
        e.currentTarget.reset();
        console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
        localStorage.removeItem(LOCALSTORAGE_KEY);
        data = {};
};

function savedDataOutput () {
    const savedDataForm = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    Object.keys(savedDataForm || {}).forEach((item) => form[item].value = savedDataForm[item]);
};

form.addEventListener('input', throttle(onInputDataSave,500));
form.addEventListener('submit', onFormSubmit);
savedDataOutput();

