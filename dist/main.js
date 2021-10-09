/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("document.addEventListener('DOMContentLoaded', function () {\n  //selectors\n  var todoInput = document.querySelector('.todo-input');\n  var todoButton = document.querySelector('.todo-button');\n  var todoList = document.querySelector('.todo-list'); //event listeners \n\n  todoButton.addEventListener(\"click\", addTodo);\n  todoList.addEventListener(\"click\", deleteCheck); //functions\n\n  function addTodo(event) {\n    event.preventDefault();\n    var todoDiv = document.createElement('div');\n    todoDiv.classList.add(\"todo\");\n    var newTodo = document.createElement('li');\n    newTodo.innerText = todoInput.value;\n    newTodo.classList.add('todo-item');\n    todoDiv.appendChild(newTodo);\n    var completedButton = document.createElement('button');\n    completedButton.innerHTML = '<i class=\"fa fa-check\"></i>';\n    completedButton.classList.add(\"complete-btn\");\n    todoDiv.appendChild(completedButton);\n    var trashButton = document.createElement('button');\n    trashButton.innerHTML = '<i class=\"fa fa-trash\"></i>';\n    trashButton.classList.add(\"trash-btn\");\n    todoDiv.appendChild(trashButton);\n    todoList.appendChild(todoDiv);\n    todoInput.value = \"\";\n  }\n\n  function deleteCheck(event) {}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UZW1wby8uL3NyYy9pbmRleC5qcz9iNjM1Il0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZG9JbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJ0b2RvQnV0dG9uIiwidG9kb0xpc3QiLCJhZGRUb2RvIiwiZGVsZXRlQ2hlY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidG9kb0RpdiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJuZXdUb2RvIiwiaW5uZXJUZXh0IiwidmFsdWUiLCJhcHBlbmRDaGlsZCIsImNvbXBsZXRlZEJ1dHRvbiIsImlubmVySFRNTCIsInRyYXNoQnV0dG9uIl0sIm1hcHBpbmdzIjoiQUFBQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUVwRDtBQUVFLE1BQU1DLFNBQVMsR0FBR0YsUUFBUSxDQUFDRyxhQUFULENBQXVCLGFBQXZCLENBQWxCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHSixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBbkI7QUFDQSxNQUFNRSxRQUFRLEdBQUdMLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixZQUF2QixDQUFqQixDQU5rRCxDQVNsRDs7QUFDQUMsRUFBQUEsVUFBVSxDQUFDSCxnQkFBWCxDQUE0QixPQUE1QixFQUFxQ0ssT0FBckM7QUFDQUQsRUFBQUEsUUFBUSxDQUFDSixnQkFBVCxDQUEwQixPQUExQixFQUFtQ00sV0FBbkMsRUFYa0QsQ0FnQmxEOztBQUVBLFdBQVNELE9BQVQsQ0FBaUJFLEtBQWpCLEVBQXVCO0FBQ3JCQSxJQUFBQSxLQUFLLENBQUNDLGNBQU47QUFDQSxRQUFNQyxPQUFPLEdBQUdWLFFBQVEsQ0FBQ1csYUFBVCxDQUF1QixLQUF2QixDQUFoQjtBQUNBRCxJQUFBQSxPQUFPLENBQUNFLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLE1BQXRCO0FBRUEsUUFBTUMsT0FBTyxHQUFHZCxRQUFRLENBQUNXLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBaEI7QUFDQUcsSUFBQUEsT0FBTyxDQUFDQyxTQUFSLEdBQW9CYixTQUFTLENBQUNjLEtBQTlCO0FBRUFGLElBQUFBLE9BQU8sQ0FBQ0YsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsV0FBdEI7QUFDQUgsSUFBQUEsT0FBTyxDQUFDTyxXQUFSLENBQW9CSCxPQUFwQjtBQUVBLFFBQU1JLGVBQWUsR0FBR2xCLFFBQVEsQ0FBQ1csYUFBVCxDQUF1QixRQUF2QixDQUF4QjtBQUNBTyxJQUFBQSxlQUFlLENBQUNDLFNBQWhCLEdBQTRCLDZCQUE1QjtBQUNBRCxJQUFBQSxlQUFlLENBQUNOLFNBQWhCLENBQTBCQyxHQUExQixDQUE4QixjQUE5QjtBQUNBSCxJQUFBQSxPQUFPLENBQUNPLFdBQVIsQ0FBb0JDLGVBQXBCO0FBR0EsUUFBTUUsV0FBVyxHQUFHcEIsUUFBUSxDQUFDVyxhQUFULENBQXVCLFFBQXZCLENBQXBCO0FBQ0FTLElBQUFBLFdBQVcsQ0FBQ0QsU0FBWixHQUF3Qiw2QkFBeEI7QUFDQUMsSUFBQUEsV0FBVyxDQUFDUixTQUFaLENBQXNCQyxHQUF0QixDQUEwQixXQUExQjtBQUNBSCxJQUFBQSxPQUFPLENBQUNPLFdBQVIsQ0FBb0JHLFdBQXBCO0FBRUFmLElBQUFBLFFBQVEsQ0FBQ1ksV0FBVCxDQUFxQlAsT0FBckI7QUFFQVIsSUFBQUEsU0FBUyxDQUFDYyxLQUFWLEdBQWtCLEVBQWxCO0FBQ0Q7O0FBRUQsV0FBU1QsV0FBVCxDQUFxQkMsS0FBckIsRUFBMkIsQ0FFMUI7QUFDRixDQWhERCIsInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG5cbi8vc2VsZWN0b3JzXG5cbiAgY29uc3QgdG9kb0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8taW5wdXQnKTtcbiAgY29uc3QgdG9kb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWJ1dHRvbicpO1xuICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QnKTtcblxuXG4gIC8vZXZlbnQgbGlzdGVuZXJzIFxuICB0b2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUb2RvKTtcbiAgdG9kb0xpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZUNoZWNrKTtcblxuXG5cblxuICAvL2Z1bmN0aW9uc1xuXG4gIGZ1bmN0aW9uIGFkZFRvZG8oZXZlbnQpe1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9EaXYuY2xhc3NMaXN0LmFkZChcInRvZG9cIik7XG4gICAgXG4gICAgY29uc3QgbmV3VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbmV3VG9kby5pbm5lclRleHQgPSB0b2RvSW5wdXQudmFsdWU7XG5cbiAgICBuZXdUb2RvLmNsYXNzTGlzdC5hZGQoJ3RvZG8taXRlbScpO1xuICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQobmV3VG9kbyk7XG5cbiAgICBjb25zdCBjb21wbGV0ZWRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb21wbGV0ZWRCdXR0b24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEgZmEtY2hlY2tcIj48L2k+JztcbiAgICBjb21wbGV0ZWRCdXR0b24uY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlLWJ0blwiKTtcbiAgICB0b2RvRGl2LmFwcGVuZENoaWxkKGNvbXBsZXRlZEJ1dHRvbik7XG5cbiAgICBcbiAgICBjb25zdCB0cmFzaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRyYXNoQnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhIGZhLXRyYXNoXCI+PC9pPic7XG4gICAgdHJhc2hCdXR0b24uY2xhc3NMaXN0LmFkZChcInRyYXNoLWJ0blwiKTtcbiAgICB0b2RvRGl2LmFwcGVuZENoaWxkKHRyYXNoQnV0dG9uKTtcblxuICAgIHRvZG9MaXN0LmFwcGVuZENoaWxkKHRvZG9EaXYpO1xuXG4gICAgdG9kb0lucHV0LnZhbHVlID0gXCJcIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZUNoZWNrKGV2ZW50KXtcblxuICB9XG59KVxuXG5cblxuIl0sImZpbGUiOiIuL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UZW1wby8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;