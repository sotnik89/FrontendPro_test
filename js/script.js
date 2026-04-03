
const BASE_URL = "https://jsonplaceholder.typicode.com"

const loadBtn = document.querySelector('#loadBtn');
const addBtn = document.querySelector('#addBtn');
const todoList = document.querySelector('#todoList');
const status = document.querySelector('#status');

let todos = [];

const setStatus = (msg, color) => {
    status.textContent = msg;
    status.style.color = color;
};

loadBtn.addEventListener('click', setStatusFunc);
addBtn.addEventListener('click', newTodoFunc);
todoList.addEventListener('click', deleteBtnFunc);

async function setStatusFunc() {
    try {
        setStatus('loading...', 'yellow')
        const response = await fetch(`${BASE_URL}/todos?_limit=15`);
        if (!response.ok) {
            throw new Error('Fetch failed')
        }
        todos = await response.json()
        render();
        setStatus('✅ Loaded', 'green');
    } catch (err) {
        setStatus('Mistake', 'red');
        console.error(err);
    }
}

const render = () => {
    todoList.innerHTML = todos.slice(0, 15).map((todo, index) => `
    <li>
      <span>${index + 1}.${todo.title}</span>
      <button class="delete-btn" data-id="${todo.id}" data-index="${index + 1}">Delete</button>
    </li>
  `).join("");
};

function newTodoFunc (){
    const newTodo = {id: Date.now(), title: 'New task'};
    todos = [newTodo, ...todos];
    render();
    setStatus('Created new task', 'green');
}

function deleteBtnFunc (e){
    if (e.target.classList.contains('delete-btn')) {
        const displayIndex = +e.target.dataset.index;
        todos = todos.filter(t => t.id !== +e.target.dataset.id);
        render();
        setStatus(`Deleted task #${displayIndex}`, 'blue');
    }
}