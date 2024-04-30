window.onload = function () {
    var todoList = document.getElementById('todoList');
    var todos = JSON.parse(localStorage.getItem('todos')) || [];

    todos.forEach(function (todoText) {
        addTodoToList(todoText);
    });

    function addTodoToList(todoText) {
        var label = document.createElement("li");
        label.className = 'list-group-item bg-warning';
        label.textContent = todoText;
        todoList.appendChild(label);

        var button = document.createElement('button');
        button.className = 'btn btn-danger float-right';
        button.textContent = 'Remove';
        label.appendChild(button);

        button.onclick = function () {
            var listItem = this.parentNode; // Butonun üst öğesi olan <li> öğesini al
            todoList.removeChild(listItem); // <li> öğesini listeden kaldır

            // Local storage'dan todo'yu kaldır
            var index = todos.indexOf(todoText);
            if (index !== -1) {
                todos.splice(index, 1);
                localStorage.setItem('todos', JSON.stringify(todos));
            }
        };

        label.onclick = function (event) {
            if (event.button === 0) {
                this.className = 'list-group-item bg-success';
            }
        };
    }
}

function addTodo() {
    const todo = document.getElementById('todoInput').value;

    // local storage control
    var todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));

    var label = document.createElement("li");
    label.className = 'list-group-item bg-warning';
    label.textContent = todo;
    var todoList = document.getElementById('todoList');
    todoList.appendChild(label);
    label.onclick = function (event) {
        if (event.button === 0) {
            this.className = 'list-group-item bg-success';
        }
    };
    var button = document.createElement('button');
    button.className = 'btn btn-danger float-right';
    button.textContent = 'Remove';
    label.appendChild(button);

    button.onclick = function () {
        var listItem = this.parentNode; // Butonun üst öğesi olan <li> öğesini al
        todoList.removeChild(listItem); // <li> öğesini listeden kaldır

        // Local storage'dan todo'yu kaldır
        var index = todos.indexOf(todoText);
        if (index !== -1) {
            todos.splice(index, 1);
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    };

}
