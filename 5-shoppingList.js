const inputEl = document.getElementById('input');
const btnEl = document.getElementById('btn');
const formEl = document.getElementById('form');
const carpiEl = document.getElementsByClassName('sil');

btnEl.addEventListener('click', () => {
  if (!inputEl.value) {
    return (inputEl.placeholder = `This Field Cannot Be Left Blank...`);
  }
  let input = inputEl.value;

  addToDo(input);
  inputEl.value = ``;
  inputEl.focus();
  inputEl.placeholder = `Enter Item`;
});

const addToDo = (text) => {
  const newItem = document.createElement('div');
  newItem.classList.add(
    'd-flex',
    'px-4',
    'align-items-center',
    'mb-4',
    'border',
    'border-5',
    'justify-content-between',
    'w-100'
  );
  newItem.innerHTML = `
    <h3>${text}</h3>
    <i class="fa-solid fa-xmark fa-2x sil" style="color: #b81e1e"></i>
  `;

  formEl.appendChild(newItem);
};

formEl.addEventListener('click', (e) => {
  if (e.target.classList.contains('sil')) {
    const parentDiv = e.target.parentNode;
    parentDiv.remove();
  }
});
