import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
console.log(form);
const LOCALSTORAGE_KEY = "feedback-form-state";

let data = {};
form.addEventListener('input', throttle(onInputDataSave, 500));
form.addEventListener('submit', onFormSubmit);


function onInputDataSave(e) {
    data[e.target.name] = e.target.value;
    const currentData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify({...currentData, ...data}));
    
};

function onFormSubmit (e) {
    e.preventDefault(); 
    e.currentTarget.reset();
    console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
    localStorage.removeItem(LOCALSTORAGE_KEY);
   
};
function savedDataOutput () {
    const savedDataForm = JSON.parse(localStorage.getItem("feedback-form-state"));
    //  switch (true) {
    //     case savedDataForm?.email:
    //         form.email.value = savedDataForm.email;
    //         break;
    //     case savedDataForm?.message:
    //         form.message.value = savedDataForm.email;
    //         break;
    //     default:
    //         break;
    // }
    if(savedDataForm?.email){
        form.email.value = savedDataForm.email;
    };
    if(savedDataForm?.message){
        form.message.value = savedDataForm.email;}
};

savedDataOutput();
