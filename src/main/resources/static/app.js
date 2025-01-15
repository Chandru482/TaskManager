const form = document.getElementById('todoForm');
const taskInput = document.getElementById('task');
const todoList = document.getElementById('todoList');

// Function to fetch tasks and display them
function fetchTasks() {
    fetch('http://localhost:8080/api/todos')
        .then(response => response.json())
        .then(data => {
            todoList.innerHTML = '';
            data.forEach(task => {
                const li = document.createElement('li');
                li.innerHTML = `${task.name} <button onclick="deleteTask(${task.id})">Delete</button>`;
                todoList.appendChild(li);
            });
        });
}

// Function to add a task
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const task = taskInput.value.trim();
    if (task) {
        fetch('http://localhost:8080/api/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: task })
        })
        .then(response => response.json())
        .then(() => {
            taskInput.value = '';
            fetchTasks();
        });
    }
});

// Function to delete a task
function deleteTask(taskId) {
    fetch(`http://localhost:8080/api/todos/${taskId}`, {
        method: 'DELETE'
    })
    .then(() => fetchTasks());
}

// Initial load of tasks
fetchTasks();
