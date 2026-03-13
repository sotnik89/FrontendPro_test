// Доробити TODO лист, в якому буде можливість:
// Додати завдання
// Видалити завдання
// Відзначити як виконану
// Усі дані повинні зберегтися після перезавантаження сторінки.
const input = document.querySelector(".js--form__input");
const form = document.querySelector(".js--form");
const wrapper = document.querySelector(".js--todos-wrapper");

let todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];
function renderTodos() {
    wrapper.innerHTML = todos
        .map((todo, index) => `
        <li class="todo-item ${todo.checked ? 'todo-item--checked' : ''}" data-index="${index}">
            <input type="checkbox" class="js--todo-check" ${todo.checked ? 'checked' : ''}>
            <span class="todo-item__description">${todo.text}</span>
            <button class="todo-item__delete js--todo-delete">Видалити</button>
        </li>
    `)
        .join('');
    localStorage.setItem('todos', JSON.stringify(todos));
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = input.value.trim();
    if (val) {
        todos.push({ text: val, checked: false });
        input.value = '';
        renderTodos();
    }
});
wrapper.addEventListener('click', (e) => {
    e.preventDefault();
    const index = e.target.closest('.todo-item').dataset.index;
    if (e.target.classList.contains('js--todo-delete')) {
        todos.splice(index, 1);
        renderTodos();
    }
    if (e.target.classList.contains('js--todo-check')) {
        todos[index].checked = e.target.checked;
        renderTodos();
    }
});
renderTodos();
