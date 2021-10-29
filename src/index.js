// localStorage.clear();
import "./styles/index.scss";
import "./styles/watch.scss";
import "./styles/timer.scss";
import "./styles/modal.scss";


document.addEventListener('DOMContentLoaded', () => {


  const deleteAll = document.querySelector('.delete-all')
  const todoInput = document.querySelector('.todo-input');
  const todoButton = document.querySelector('.todo-button');
  const todoList = document.querySelector('.todo-list');
  const filterOption = document.querySelector('.filter-todo');
  const hourHand = document.querySelector('[hourHand]')
  const minuteHand = document.querySelector('[minuteHand]')
  const secondHand = document.querySelector('[secondHand]')
  const instructions = document.querySelector('.instructions_button');


  setInterval(setClock, 1000)
      
      setClock();
      getTodos();

  
  todoButton.addEventListener("click", addTodo);
  todoList.addEventListener("click", deleteCheck);
  filterOption.addEventListener("click", filterTodo);
  instructions.addEventListener("click", instructionsModal)
  deleteAll.addEventListener("click", deleteAllTasks) 



  function deleteAllTasks(event) {
    event.preventDefault();
    localStorage.removeItem("todos")
    if (todoList.hasChildNodes()) todoList.innerHTML = '';
    
  }




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
    completedButton.innerHTML = '<i class="completemark fa fa-check"></i>';


    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="deletemark fa fa-times" ></i>';
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
    if (task.classList[0] === "deletemark") {
      const todo = task.parentElement.parentElement;
      todo.classList.add("drop");
      removeFromLocalStorage(todo);
      todo.addEventListener("transitionend", function () {
        todo.remove();
      })
    }
    if (task.classList[0] === "completemark") {
      const todo = task.parentElement.parentElement;
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
    constructor(base) {
      this.times = {
        minutes: base.querySelector(".timer__part--minutes"),
        seconds: base.querySelector(".timer__part--seconds"),
        control: base.querySelector(".timer__btn--control"),
        reset: base.querySelector(".timer__btn--reset")
      };

      this.interval = null;
      this.remainingSeconds = 0;

      
      this.times.control.addEventListener("click", () => {
        if (this.interval === null) {
          this.start();
        } else {
          this.stop();
        }
      });
      
      this.times.reset.addEventListener("click", () => {
        const inputMinutes = prompt("Enter number of minutes:");
        
        if (inputMinutes < 60) {
          this.stop();
          this.remainingSeconds = inputMinutes * 60;
          this.updateTime();
        }
      });
    }
    
    ding() {
      const bell = document.querySelector("audio");
      bell.play();
    }

    updateTime() {
      const minutes = Math.floor(this.remainingSeconds / 60);
      const seconds = this.remainingSeconds % 60;

      this.times.minutes.textContent = minutes.toString().padStart(2, "0");
      this.times.seconds.textContent = seconds.toString().padStart(2, "0");
    }

    updateControls() {
      if (this.interval === null) {
        this.times.control.classList.add("timer__btn--start");
        this.times.control.classList.remove("timer__btn--stop");
      } else {
        this.times.control.classList.add("timer__btn--stop");
        this.times.control.classList.remove("timer__btn--start");
      }
    }

    start() {
      if (this.remainingSeconds === 0) return;
      
      this.interval = setInterval(() => {
        this.remainingSeconds--;
        this.updateTime();
        
        if (this.remainingSeconds === 0) {
          this.stop();
          this.ding();
        }
      }, 1000);
      
      this.updateControls();
    }

    stop() {
      clearInterval(this.interval);

      this.interval = null;

      this.updateControls();
    }
  }

  new Timer(
    document.querySelector(".timer")
  );

  function instructionsModal() {
    const instructionBtn = document.createElement('div');
    instructionBtn.className = "modal";
    instructionBtn.innerHTML = `
        <div class="modal-screen">
        </div>
        <div class="modal-form">
        <form>
        <div id="instructions">
        <ul>
        <h1>Timer<h1>
        <h3>To help space out work sessions, there is a countdown timer on the left side of the screen. 
        You can enter the number of minutes for studying or taking a break using the power button.
        Tip: A popular time management technique called Pomodoro is to work for 25 minutes and take 5 minute breaks.
        <h3>
        <h1>Daily Tasks<h1>
        <h3>Enter the tasks to be completed.
        The arrow button submits the task, garbage button clears all tasks, check mark completes the task, and cross deletes a singular task.
        <h3>
        </ul>
        </div>
        <button id="submit">Close</button>
        </form>
        </div>
    `
    document.body.appendChild(instructionBtn)
  }

})



