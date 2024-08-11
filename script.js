function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        const todoList = document.getElementById('todo-list');

        const li = document.createElement('li');
        li.textContent = todoText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.style.marginLeft = '10px';
        deleteBtn.onclick = function () {
            todoList.removeChild(li);
        };

        li.onclick = function () {
            li.classList.toggle('completed');
        };

        li.appendChild(deleteBtn);
        todoList.appendChild(li);

        todoInput.value = '';
    }
}