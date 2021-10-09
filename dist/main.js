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

eval("document.addEventListener('DOMContentLoaded', function () {\n  //selectors\n  var todoInput = document.querySelector('.todo-input');\n  var todoButton = document.querySelector('.todo-button');\n  var todoList = document.querySelector('.todo-list'); //event listeners \n\n  todoButton.addEventListener(\"click\", addTodo);\n  todoList.addEventListener(\"click\", deleteCheck); //functions\n\n  function addTodo(event) {\n    event.preventDefault();\n    var todoDiv = document.createElement('div');\n    todoDiv.classList.add(\"todo\");\n    var newTodo = document.createElement('li');\n    newTodo.innerText = todoInput.value;\n    newTodo.classList.add('todo-item');\n    todoDiv.appendChild(newTodo);\n    var completedButton = document.createElement('button');\n    completedButton.innerHTML = '<i class=\"fa fa-check\"></i>';\n    completedButton.classList.add(\"complete-btn\");\n    todoDiv.appendChild(completedButton);\n    var trashButton = document.createElement('button');\n    trashButton.innerHTML = '<i class=\"fa fa-trash\"></i>';\n    trashButton.classList.add(\"trash-btn\");\n    todoDiv.appendChild(trashButton);\n    todoList.appendChild(todoDiv);\n    todoInput.value = \"\";\n  }\n\n  function deleteCheck(event) {\n    var task = event.target;\n\n    if (task.classList[0] === \"trash-btn\") {\n      todoInput.remove();\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UZW1wby8uL3NyYy9pbmRleC5qcz9iNjM1Il0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZG9JbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJ0b2RvQnV0dG9uIiwidG9kb0xpc3QiLCJhZGRUb2RvIiwiZGVsZXRlQ2hlY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidG9kb0RpdiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJuZXdUb2RvIiwiaW5uZXJUZXh0IiwidmFsdWUiLCJhcHBlbmRDaGlsZCIsImNvbXBsZXRlZEJ1dHRvbiIsImlubmVySFRNTCIsInRyYXNoQnV0dG9uIiwidGFzayIsInRhcmdldCIsInJlbW92ZSJdLCJtYXBwaW5ncyI6IkFBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFFcEQ7QUFFRSxNQUFNQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixhQUF2QixDQUFsQjtBQUNBLE1BQU1DLFVBQVUsR0FBR0osUUFBUSxDQUFDRyxhQUFULENBQXVCLGNBQXZCLENBQW5CO0FBQ0EsTUFBTUUsUUFBUSxHQUFHTCxRQUFRLENBQUNHLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBakIsQ0FOa0QsQ0FTbEQ7O0FBQ0FDLEVBQUFBLFVBQVUsQ0FBQ0gsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUNLLE9BQXJDO0FBQ0FELEVBQUFBLFFBQVEsQ0FBQ0osZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUNNLFdBQW5DLEVBWGtELENBZ0JsRDs7QUFFQSxXQUFTRCxPQUFULENBQWlCRSxLQUFqQixFQUF1QjtBQUNyQkEsSUFBQUEsS0FBSyxDQUFDQyxjQUFOO0FBQ0EsUUFBTUMsT0FBTyxHQUFHVixRQUFRLENBQUNXLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBaEI7QUFDQUQsSUFBQUEsT0FBTyxDQUFDRSxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixNQUF0QjtBQUVBLFFBQU1DLE9BQU8sR0FBR2QsUUFBUSxDQUFDVyxhQUFULENBQXVCLElBQXZCLENBQWhCO0FBQ0FHLElBQUFBLE9BQU8sQ0FBQ0MsU0FBUixHQUFvQmIsU0FBUyxDQUFDYyxLQUE5QjtBQUVBRixJQUFBQSxPQUFPLENBQUNGLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLFdBQXRCO0FBQ0FILElBQUFBLE9BQU8sQ0FBQ08sV0FBUixDQUFvQkgsT0FBcEI7QUFFQSxRQUFNSSxlQUFlLEdBQUdsQixRQUFRLENBQUNXLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBeEI7QUFDQU8sSUFBQUEsZUFBZSxDQUFDQyxTQUFoQixHQUE0Qiw2QkFBNUI7QUFDQUQsSUFBQUEsZUFBZSxDQUFDTixTQUFoQixDQUEwQkMsR0FBMUIsQ0FBOEIsY0FBOUI7QUFDQUgsSUFBQUEsT0FBTyxDQUFDTyxXQUFSLENBQW9CQyxlQUFwQjtBQUdBLFFBQU1FLFdBQVcsR0FBR3BCLFFBQVEsQ0FBQ1csYUFBVCxDQUF1QixRQUF2QixDQUFwQjtBQUNBUyxJQUFBQSxXQUFXLENBQUNELFNBQVosR0FBd0IsNkJBQXhCO0FBQ0FDLElBQUFBLFdBQVcsQ0FBQ1IsU0FBWixDQUFzQkMsR0FBdEIsQ0FBMEIsV0FBMUI7QUFDQUgsSUFBQUEsT0FBTyxDQUFDTyxXQUFSLENBQW9CRyxXQUFwQjtBQUVBZixJQUFBQSxRQUFRLENBQUNZLFdBQVQsQ0FBcUJQLE9BQXJCO0FBRUFSLElBQUFBLFNBQVMsQ0FBQ2MsS0FBVixHQUFrQixFQUFsQjtBQUNEOztBQUVELFdBQVNULFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTJCO0FBQ3pCLFFBQU1hLElBQUksR0FBR2IsS0FBSyxDQUFDYyxNQUFuQjs7QUFDQSxRQUFJRCxJQUFJLENBQUNULFNBQUwsQ0FBZSxDQUFmLE1BQXNCLFdBQTFCLEVBQXVDO0FBQ3JDVixNQUFBQSxTQUFTLENBQUNxQixNQUFWO0FBQ0Q7QUFDQTtBQUNKLENBbkREIiwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcblxuLy9zZWxlY3RvcnNcblxuICBjb25zdCB0b2RvSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1pbnB1dCcpO1xuICBjb25zdCB0b2RvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tYnV0dG9uJyk7XG4gIGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdCcpO1xuXG5cbiAgLy9ldmVudCBsaXN0ZW5lcnMgXG4gIHRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFRvZG8pO1xuICB0b2RvTGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVsZXRlQ2hlY2spO1xuXG5cblxuXG4gIC8vZnVuY3Rpb25zXG5cbiAgZnVuY3Rpb24gYWRkVG9kbyhldmVudCl7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKFwidG9kb1wiKTtcbiAgICBcbiAgICBjb25zdCBuZXdUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBuZXdUb2RvLmlubmVyVGV4dCA9IHRvZG9JbnB1dC52YWx1ZTtcblxuICAgIG5ld1RvZG8uY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtJyk7XG4gICAgdG9kb0Rpdi5hcHBlbmRDaGlsZChuZXdUb2RvKTtcblxuICAgIGNvbnN0IGNvbXBsZXRlZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbXBsZXRlZEJ1dHRvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiPjwvaT4nO1xuICAgIGNvbXBsZXRlZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGUtYnRuXCIpO1xuICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQoY29tcGxldGVkQnV0dG9uKTtcblxuICAgIFxuICAgIGNvbnN0IHRyYXNoQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdHJhc2hCdXR0b24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEgZmEtdHJhc2hcIj48L2k+JztcbiAgICB0cmFzaEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidHJhc2gtYnRuXCIpO1xuICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQodHJhc2hCdXR0b24pO1xuXG4gICAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQodG9kb0Rpdik7XG5cbiAgICB0b2RvSW5wdXQudmFsdWUgPSBcIlwiO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlQ2hlY2soZXZlbnQpe1xuICAgIGNvbnN0IHRhc2sgPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKHRhc2suY2xhc3NMaXN0WzBdID09PSBcInRyYXNoLWJ0blwiKSB7XG4gICAgICB0b2RvSW5wdXQucmVtb3ZlKCk7XG4gICAgfVxuICAgIH1cbn0pXG5cblxuXG4iXSwiZmlsZSI6Ii4vc3JjL2luZGV4LmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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