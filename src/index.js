// localStorage.clear();
import "./styles/index.scss";
import "./styles/watch.scss";
import "./styles/timer.scss";


document.addEventListener('DOMContentLoaded', () => {



  const todoInput = document.querySelector('.todo-input');
  const todoButton = document.querySelector('.todo-button');
  const todoList = document.querySelector('.todo-list');
  const filterOption = document.querySelector('.filter-todo');
  const hourHand = document.querySelector('[hourHand]')
  const minuteHand = document.querySelector('[minuteHand]')
  const secondHand = document.querySelector('[secondHand]')


  setInterval(setClock, 1000)


  // ERROR for if entry is empty
  
  
  // const todoInputError = document.getElementById('.todo-input');
  // todoInputError.addEventListener("submit", (e) => {
    //   let messages = [];
    //   if (todoInput.value === '') {
      //     messages.push('Cannot be left blank');
      //   }
      // })
      
      
      setClock();
      getTodos();
  
  todoButton.addEventListener("click", addTodo);
  todoList.addEventListener("click", deleteCheck);
  filterOption.addEventListener("click", filterTodo);




  function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
  }

  function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
  }

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
    trashButton.innerHTML = '<i class="fa fa-times" ></i>';
    trashButton.classList.add("delete-btn");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);

    todoInput.value = "";
  }

  function deleteCheck(event){
    const task = event.target;
    if (task.classList[0] === "delete-btn") {
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
    // console.log("testing");
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
      trashButton.innerHTML = '<i class="fa fa-times" ></i>';

      trashButton.classList.add("delete-btn");
      todoDiv.appendChild(trashButton);

      todoList.appendChild(todoDiv);
    });
  }


  ////////////////////////

  class Timer {
    constructor(root) {
      this.el = {
        minutes: root.querySelector(".timer__part--minutes"),
        seconds: root.querySelector(".timer__part--seconds"),
        control: root.querySelector(".timer__btn--control"),
        reset: root.querySelector(".timer__btn--reset")
      };

      this.interval = null;
      this.remainingSeconds = 0;

      this.el.control.addEventListener("click", () => {
        if (this.interval === null) {
          this.start();
        } else {
          this.stop();
        }
      });

      this.el.reset.addEventListener("click", () => {
        const inputMinutes = prompt("Enter number of minutes:");

        if (inputMinutes < 60) {
          this.stop();
          this.remainingSeconds = inputMinutes * 60;
          this.updateInterfaceTime();
        }
      });
    }

    updateInterfaceTime() {
      const minutes = Math.floor(this.remainingSeconds / 60);
      const seconds = this.remainingSeconds % 60;

      this.el.minutes.textContent = minutes.toString().padStart(2, "0");
      this.el.seconds.textContent = seconds.toString().padStart(2, "0");
    }

    updateInterfaceControls() {
      if (this.interval === null) {
        this.el.control.classList.add("timer__btn--start");
        this.el.control.classList.remove("timer__btn--stop");
      } else {
        this.el.control.classList.add("timer__btn--stop");
        this.el.control.classList.remove("timer__btn--start");
      }
    }

    start() {
      if (this.remainingSeconds === 0) return;

      this.interval = setInterval(() => {
        this.remainingSeconds--;
        this.updateInterfaceTime();

        if (this.remainingSeconds === 0) {
          this.stop();
        }
      }, 1000);

      this.updateInterfaceControls();
    }

    stop() {
      clearInterval(this.interval);

      this.interval = null;

      this.updateInterfaceControls();
    }
  }

  new Timer(
    document.querySelector(".timer")
  );

})



