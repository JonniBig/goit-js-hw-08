import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

fromLocalStorage();

refs.form.addEventListener('submit', onSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));

function onInput(e) {
  const formsData = {
    email: refs.input.value,
    message: refs.textarea.value,
  };
  localStorage.setItem('STORAGE_KEY', JSON.stringify(formsData));
}

function onSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem('STORAGE_KEY')));
  localStorage.removeItem('STORAGE_KEY');
  refs.form.reset();
}

function fromLocalStorage() {
  const defaulValue = JSON.parse(localStorage.getItem('STORAGE_KEY'));
  if (!defaulValue) {
    return;
  } else refs.input.value = defaulValue.email || '';
  refs.textarea.value = defaulValue.message || '';
}
