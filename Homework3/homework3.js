document.addEventListener('DOMContentLoaded', () => {
 const form = document.querySelector('#form');
 const input = document.querySelector('#input');
 const dateInput = document.querySelector('#date');
 const list = document.querySelector('#list');

 form.addEventListener('submit', (e) => {
  e.preventDefault();
  const todoText = input.value.trim();
  const todoDate = dateInput.value;
  if (todoText !== '' && todoDate !== '') {
   addTodoItem(todoText, todoDate);
   input.value = '';
   dateInput.value = '';
  }
 });

 function addTodoItem(text, date) {
  const li = document.createElement('li');
  li.textContent = text;

  const timestamp = document.createElement('span');
  timestamp.textContent = ` (${new Date(date).toLocaleDateString()})`;
  li.appendChild(timestamp);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
   list.removeChild(li);
  });

  li.appendChild(deleteButton);
  list.appendChild(li);
 }
});