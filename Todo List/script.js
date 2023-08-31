const todoInput = document.getElementById('todoInput');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');

addButton.addEventListener('click', addTodo);

function addTodo() {
    const task = todoInput.value;
    if (task.trim() !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task}</span>
            <button class="deleteButton">Done</button>
        `;
        todoList.appendChild(li);
        todoInput.value = '';
        li.querySelector('.deleteButton').addEventListener('click', () => {
            li.remove();
        });
    }
}
