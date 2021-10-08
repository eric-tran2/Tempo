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

eval("//selectors\nvar todoInput = document.querySelector('.todo-input');\nvar todoButton = document.querySelector('.todo-button');\nvar todoList = document.querySelector('.todo-list'); //event listeners \n\ntodoButton.addEventListener(addTodo); //functions\n\nfunction addTodo(event) {\n  event.preventDefault();\n  var todoDiv = document.createElement('div');\n  todoDiv.classList.add(\"todo\");\n  var newTodo = document.createElement('li');\n  newTodo.innerText = 'testing';\n  newTodo.classList.add('todo-item');\n  todoDiv.appendChild(newTodo);\n  var completedButton = document.createElement('button');\n  completedButton.innerHTML = '<i class=fas fa-check\"></i>';\n  completedButton.classList.add(\"complete-btn\");\n  todoDiv.appendChild(completedButton);\n  var trashButton = document.createElement('button');\n  trashButton.innerHTML = '<i class=fas fa-trash\"></i>';\n  trashButton.classList.add(\"complete-btn\");\n  todoDiv.appendChild(trashButton);\n  todoList.appendChild(todoDiv);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UZW1wby8uL3NyYy9pbmRleC5qcz9iNjM1Il0sIm5hbWVzIjpbInRvZG9JbnB1dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRvZG9CdXR0b24iLCJ0b2RvTGlzdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZGRUb2RvIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRvZG9EaXYiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwibmV3VG9kbyIsImlubmVyVGV4dCIsImFwcGVuZENoaWxkIiwiY29tcGxldGVkQnV0dG9uIiwiaW5uZXJIVE1MIiwidHJhc2hCdXR0b24iXSwibWFwcGluZ3MiOiJBQUFBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBbEI7QUFDQSxJQUFNQyxVQUFVLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixDQUFuQjtBQUNBLElBQU1FLFFBQVEsR0FBR0gsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLENBQWpCLEMsQ0FHQTs7QUFFQUMsVUFBVSxDQUFDRSxnQkFBWCxDQUE2QkMsT0FBN0IsRSxDQUlBOztBQUVBLFNBQVNBLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXVCO0FBQ3JCQSxFQUFBQSxLQUFLLENBQUNDLGNBQU47QUFDQSxNQUFNQyxPQUFPLEdBQUdSLFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixLQUF2QixDQUFoQjtBQUNBRCxFQUFBQSxPQUFPLENBQUNFLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLE1BQXRCO0FBRUEsTUFBTUMsT0FBTyxHQUFHWixRQUFRLENBQUNTLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBaEI7QUFDQUcsRUFBQUEsT0FBTyxDQUFDQyxTQUFSLEdBQW9CLFNBQXBCO0FBRUFELEVBQUFBLE9BQU8sQ0FBQ0YsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsV0FBdEI7QUFDQUgsRUFBQUEsT0FBTyxDQUFDTSxXQUFSLENBQW9CRixPQUFwQjtBQUVBLE1BQU1HLGVBQWUsR0FBR2YsUUFBUSxDQUFDUyxhQUFULENBQXVCLFFBQXZCLENBQXhCO0FBQ0FNLEVBQUFBLGVBQWUsQ0FBQ0MsU0FBaEIsR0FBNEIsNkJBQTVCO0FBQ0FELEVBQUFBLGVBQWUsQ0FBQ0wsU0FBaEIsQ0FBMEJDLEdBQTFCLENBQThCLGNBQTlCO0FBQ0FILEVBQUFBLE9BQU8sQ0FBQ00sV0FBUixDQUFvQkMsZUFBcEI7QUFHQSxNQUFNRSxXQUFXLEdBQUdqQixRQUFRLENBQUNTLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBcEI7QUFDQVEsRUFBQUEsV0FBVyxDQUFDRCxTQUFaLEdBQXdCLDZCQUF4QjtBQUNBQyxFQUFBQSxXQUFXLENBQUNQLFNBQVosQ0FBc0JDLEdBQXRCLENBQTBCLGNBQTFCO0FBQ0FILEVBQUFBLE9BQU8sQ0FBQ00sV0FBUixDQUFvQkcsV0FBcEI7QUFFQWQsRUFBQUEsUUFBUSxDQUFDVyxXQUFULENBQXFCTixPQUFyQjtBQUdEIiwic291cmNlc0NvbnRlbnQiOlsiLy9zZWxlY3RvcnNcblxuY29uc3QgdG9kb0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8taW5wdXQnKTtcbmNvbnN0IHRvZG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1idXR0b24nKTtcbmNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdCcpO1xuXG5cbi8vZXZlbnQgbGlzdGVuZXJzIFxuXG50b2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoIGFkZFRvZG8pO1xuXG5cblxuLy9mdW5jdGlvbnNcblxuZnVuY3Rpb24gYWRkVG9kbyhldmVudCl7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKFwidG9kb1wiKTtcbiAgXG4gIGNvbnN0IG5ld1RvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBuZXdUb2RvLmlubmVyVGV4dCA9ICd0ZXN0aW5nJztcblxuICBuZXdUb2RvLmNsYXNzTGlzdC5hZGQoJ3RvZG8taXRlbScpO1xuICB0b2RvRGl2LmFwcGVuZENoaWxkKG5ld1RvZG8pO1xuXG4gIGNvbnN0IGNvbXBsZXRlZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb21wbGV0ZWRCdXR0b24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPWZhcyBmYS1jaGVja1wiPjwvaT4nO1xuICBjb21wbGV0ZWRCdXR0b24uY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlLWJ0blwiKTtcbiAgdG9kb0Rpdi5hcHBlbmRDaGlsZChjb21wbGV0ZWRCdXR0b24pO1xuXG4gIFxuICBjb25zdCB0cmFzaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICB0cmFzaEJ1dHRvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9ZmFzIGZhLXRyYXNoXCI+PC9pPic7XG4gIHRyYXNoQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZS1idG5cIik7XG4gIHRvZG9EaXYuYXBwZW5kQ2hpbGQodHJhc2hCdXR0b24pO1xuXG4gIHRvZG9MaXN0LmFwcGVuZENoaWxkKHRvZG9EaXYpO1xuXG5cbn1cblxuIl0sImZpbGUiOiIuL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

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