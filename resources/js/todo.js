
function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if(todos_str !== null){
todos = JSON.parse(todos_str);
    }
    return todos;
}

function add() {
    var task = document.getElementById('task').value;
    if (task == "") {
        alert("please enter a valid task")
    }
    else{
    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();
    return false;
}
}

function show() {
    var todos = get_todos();
    if (todos.length < 1) {
        var html = "No task added";
        document.getElementById("todos").innerHTML = html;
    }
    else{
    var html = '<ul>';
    for (var  i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button class = "remove" id = " ' + i + ' ">X</button></li>';
        
    };
    html += '</ul>';
    document.getElementById("todos").innerHTML = html;

    var button = document.getElementsByClassName('remove');
    for (var i = 0; i < button.length; i++) {
        button[i].addEventListener('click', remove);
        
    };
}
}

function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos))
    show();
    return false;
}
document.getElementById('add').addEventListener('click', add);
show();