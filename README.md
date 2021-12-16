# Tempo
[Tempo](https://eric-tran2.github.io/Tempo) is a project based on the Pomodoro Technique to improve productivity and workflow. The Pomodoro Technique is a time management method that encourages people to maximize their time rather than waste it. This method involves breaking your workday up into 25-minute chunks followed by five-minute breaks.  Approximately four pomodoros are followed by a longer break of between 15 and 20 minutes. Tempo is also designed to look like a watch and helps you keep track of time and helps become more productive. An organized and visualized day's work aids the user psychologically, as well as providing a sense of accomplishment as you knock off each task one by one. With all your tasks set up in one place, a timer to help you pace your work, and a live clock to track your time, this allows the user to be more focused on trying to have a productive day.

Here's the [live site](https://eric-tran2.github.io/Tempo)

![default_splash](https://creatr-seed.s3.amazonaws.com/tempo_splash.gif)

## Technologies
* Javascript
* SCSS
* HTML


## Functionality
* There is a timer that has a limit of up to an hour's worth of minutes based on the preferences of the user.
* There is a task tracker that helps visualize what the user wants to accomplish.
* A live clock is included for aesthetic reasons and to prevent the user from losing track of time.

## Task Tracker
![task_tracker](https://creatr-seed.s3.amazonaws.com/tempo_task.gif)
```javascript
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
```
* Allows user to jot down tasks for the day, assignments that you want to accomplish for the day, short term goal obtainable goals.
* Each task can be deleted or crossed out, as well as a single task or all tasks. Although the goal of the day is to complete all the tasks, it is okay to leave some for the next day.
* Allows users to visually see all the tasks at hand.
* Users won't be required to create an account for the purposes of storing tasks since tasks will be stored on the browsers local storage. Quick, easy, plug and play.

## Timer
![timer](https://creatr-seed.s3.amazonaws.com/tempo_timer.gif)
```javascript
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
    

    updateTime() {
      const minutes = Math.floor(this.remainingSeconds / 60);
      const seconds = this.remainingSeconds % 60;

      this.times.minutes.textContent = minutes.toString().padStart(2, "0");
      this.times.seconds.textContent = seconds.toString().padStart(2, "0");
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
    
    ding() {
      const bell = document.querySelector("audio");
      bell.play();
    }

```
* Using the timer feature, users can set the timer for any duration in increments of minutes up to an hour. Timer limits are limited to an hour because too long a period of work will generally tire out the user and result in burnouts which will reduce their productivity.and then productivity will decline. Furthermore, it is based on the pomodoro technique, which recommends 25 minutes of work followed by a 5-minute break. 
* When the timer reaches zero, the timer will ring.
* A reset and an adjustment will be available for the timer.


# Bonus
## Live clock
![live_clock](https://creatr-seed.s3.amazonaws.com/tempo_liveclock.gif)
```javascript
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
```
* This feature grabs the current users time on their computer or device and translates into a live clock
