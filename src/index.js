import "./styles/index.scss"

document.addEventListener('DOMContentLoaded', () => {

//selectors

  const todoInput = document.querySelector('.todo-input');
  const todoButton = document.querySelector('.todo-button');
  const todoList = document.querySelector('.todo-list');
  const filterOption = document.querySelector('.filter-todo');

  //event listeners 
  document.addEventListener('DOMContentLoaded', getTodos);
  todoButton.addEventListener("click", addTodo);
  todoList.addEventListener("click", deleteCheck);
  filterOption.addEventListener("click", filterTodo);




  //functions

  function addTodo(event){
    event.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;

    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    saveToLocalStorage(todoInput.value);

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fa fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);

    todoInput.value = "";
  }

  function deleteCheck(event){
    const task = event.target;
    if (task.classList[0] === "trash-btn") {
      const todo = task.parentElement;
      todo.classList.add("drop");
      removeFromLocalStorage(todo);
      todo.addEventListener("transitionend", function(){
        todo.remove();
      })
    }
    if (task.classList[0] === "complete-btn"){
      const todo = task.parentElement;
      todo.classList.toggle("completed");
    }
  }

  function filterTodo(event) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
      switch (event.target.value) {
        case "all":
          todo.style.display = "flex";
          break;
        case "finished":
          if (todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
        case "unfinished":
          if (!todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
      }
    });
  }

  function saveToLocalStorage(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  function removeFromLocalStorage(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todo = [];
    } else { 
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function getTodos() {
    console.log("testing");
    let todos;
    if (localStorage.getItem('todos') === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo){
      const todoDiv = document.createElement('div');
      todoDiv.classList.add("todo");

      const newTodo = document.createElement('li');
      newTodo.innerText = todo;

      newTodo.classList.add('todo-item');
      todoDiv.appendChild(newTodo);

      const completedButton = document.createElement('button');
      completedButton.innerHTML = '<i class="fa fa-check"></i>';
      completedButton.classList.add("complete-btn");
      todoDiv.appendChild(completedButton);


      const trashButton = document.createElement('button');
      trashButton.innerHTML = '<i class="fa fa-trash"></i>';
      trashButton.classList.add("trash-btn");
      todoDiv.appendChild(trashButton);

      todoList.appendChild(todoDiv);

    });
  }
})


