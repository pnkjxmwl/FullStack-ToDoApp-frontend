//backend API URL
const apiUrl = 'https://todoapp-backend-iic4.onrender.com';

async function loadTodos() {
    try {

        const response = await fetch(apiUrl);
        const todos = await response.json();
        console.log(todos)
        const filteredTodos = todos.filter(todo => todo.status !== "deleted");
        filteredTodos.sort((a, b) => a.priority - b.priority);
        const todoList = document.getElementById('todo-list');
        todoList.innerHTML = '';
        for (const todo of filteredTodos) {
            const tr = document.createElement('tr');
            let taskText = todo.text;
            if (todo.status == "completed") {
                taskText = `${taskText} (&#10004;)`;
            } else if (todo.status == "cancelled") {
                taskText = `${taskText} (&#10007;)`;
            }
            else {
                taskText = `${taskText} (-)`;
            }
            tr.innerHTML = `
                <td>${taskText}</td>
                <td>${todo.priority}</td>
                <td>
                    <button type="button" onclick="editTodo('${todo._id}')">Edit</button>
                    <button type="button" onclick="deleteTodo('${todo._id}')">Delete</button>
                    <button type="button" onclick="completeTodo('${todo._id}')">Complete</button>
                    <button type="button" onclick="cancelTodo('${todo._id}')">Cancel</button>
                </td>
            `;
            todoList.appendChild(tr);
        }
    } catch (error) {
        console.error(error);
    }
}
async function showDeletedTasks() {
    try {
        const response = await fetch(apiUrl);
        const todos = await response.json();
        const deletedTodos = todos.filter(todo => todo.status === 'deleted');

        deletedTodos.sort((a, b) => a.priority - b.priority);

        const deletedCount = document.getElementById('deleted-count');
        deletedCount.innerText = deletedTodos.length;

        const deletedTasks = document.getElementById('deleted-tasks');
        deletedTasks.innerHTML = '';
        for (const todo of deletedTodos) {
            const taskText = `${todo.text} (${todo.priority})`;
            const li = document.createElement('li');
            li.innerText = taskText;
            deletedTasks.appendChild(li);
        }
    } catch (error) {
        console.error(error);
    }
}

async function showCancelledTasks() {
    try {
        const response = await fetch(apiUrl);
        const todos = await response.json();

        const cancelledTodos = todos.filter(todo => todo.status === 'cancelled');

        cancelledTodos.sort((a, b) => a.priority - b.priority);

        const cancelledCount = document.getElementById('cancelled-count');
        cancelledCount.innerText = cancelledTodos.length;

        const cancelledTasks = document.getElementById('cancelled-tasks');
        cancelledTasks.innerHTML = '';
        for (const todo of cancelledTodos) {
            const taskText = `${todo.text} (${todo.priority})`;
            const li = document.createElement('li');
            li.innerText = taskText;
            cancelledTasks.appendChild(li);
        }
    } catch (error) {
        console.error(error);
    }
}

async function showPendingTasks() {
    try {
        const response = await fetch(apiUrl);
        const todos = await response.json();

        const pendingTodos = todos.filter(todo => todo.status === 'pending');

        pendingTodos.sort((a, b) => a.priority - b.priority);
        const pendingCount = document.getElementById('pending-count');
        pendingCount.innerText = pendingTodos.length;

        const pendingTasks = document.getElementById('pending-tasks');
        pendingTasks.innerHTML = '';
        for (const todo of pendingTodos) {
            const taskText = `${todo.text} (${todo.priority})`;
            const li = document.createElement('li');
            li.innerText = taskText;
            pendingTasks.appendChild(li);
        }
    } catch (error) {
        console.error(error);
    }
}

async function showCompletedTasks() {
    try {
        const response = await fetch(apiUrl);
        const todos = await response.json();

        const completedTodos = todos.filter(todo => todo.status === 'completed');

        completedTodos.sort((a, b) => a.priority - b.priority);

        const completedCount = document.getElementById('completed-count');
        completedCount.innerText = completedTodos.length;

        const completedTasks = document.getElementById('completed-tasks');
        completedTasks.innerHTML = '';
        for (const todo of completedTodos) {
            const taskText = `${todo.text} (${todo.priority})`;
            const li = document.createElement('li');
            li.innerText = taskText;
            completedTasks.appendChild(li);
        }
    } catch (error) {
        console.error(error);
    }
}


async function completeTodo(id) {
    try {
        await fetch(apiUrl + '/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                _id: id,
                status: 'completed'
            })
        });
        loadTodos();
        showCompletedTasks();
        showDeletedTasks();
        showCancelledTasks();
        showPendingTasks();
    } catch (error) {
        console.error(error);
    }
}
async function cancelTodo(id) {
    try {
        await fetch(apiUrl + '/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                _id: id,
                status: 'cancelled'
            })
        });
        loadTodos();
        showCompletedTasks();
        showDeletedTasks();
        showCancelledTasks();
        showPendingTasks();
    } catch (error) {
        console.error(error);
    }
}

async function editTodo(id) {
    console.log("editing")
    try {

        const newText = prompt('Enter new text:');
        const newPriority = prompt('Enter new priority (1-9):');

        await fetch(apiUrl + '/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "_id": id,
                "text": newText,
                "priority": newPriority
            })
        });

        loadTodos();
        showCompletedTasks();
        showDeletedTasks();
        showCancelledTasks();
        showPendingTasks();
    } catch (error) {
        console.error(error);
    }
}

async function deleteTodo(id) {
    console.log("deleting")
    try {
        await fetch(apiUrl + '/delete', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "_id": id
            })
        });
        loadTodos();
        showCompletedTasks();
        showDeletedTasks();
        showCancelledTasks();
        showPendingTasks();
    } catch (error) {
        console.error(error);
    }
}
async function addTodo() {
    try {
        const description = document.getElementById('description').value;
        const priority = document.getElementById('priority').value;
        await fetch(apiUrl + '/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: description,
                priority: priority
            })
        });
        document.getElementById('description').value = '';
        document.getElementById('priority').value = '';
        loadTodos();
        showCompletedTasks();
        showDeletedTasks();
        showCancelledTasks();
        showPendingTasks();
    } catch (error) {
        console.error(error);
    }
}

loadTodos();
showCompletedTasks();
showDeletedTasks();
showCancelledTasks();
showPendingTasks();