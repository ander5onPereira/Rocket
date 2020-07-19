const $ = document;
var listElement = $.querySelector("#app ul");
var inputElement = $.querySelector("#app input");
var buttonElement = $.querySelector("#app button");

var todos = JSON.parse(localStorage.getItem("list_todos")) || [];

function renderTodos() {
  listElement.innerHTML = "";
  for (todo of todos) {
    var todoElement = $.createElement("li");
    var todoText = $.createTextNode(todo);

    var linkElement = $.createElement("a");
    var varlinkText = $.createTextNode("Excluir");

    linkElement.setAttribute("href", "#");

    var pos = todos.indexOf(todo);

    linkElement.setAttribute("onclick", "deleteTodo(" + pos + ")");

    linkElement.appendChild(varlinkText);

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);

    listElement.appendChild(todoElement);
  }
}
renderTodos();

function addTodo() {
  var todoText = inputElement.value;

  todos.push(todoText);
  inputElement.value = "";
  renderTodos();
  saveToStorage();
}
buttonElement.onclick = addTodo;

function deleteTodo(pos) {
  todos.splice(pos, 1);
  renderTodos();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("list_todos", JSON.stringify(todos));
}
