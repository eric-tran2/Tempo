/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ \"./src/styles/index.scss\");\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  //selectors\n  var todoInput = document.querySelector('.todo-input');\n  var todoButton = document.querySelector('.todo-button');\n  var todoList = document.querySelector('.todo-list'); //event listeners \n\n  todoButton.addEventListener(\"click\", addTodo);\n  todoList.addEventListener(\"click\", deleteCheck); //functions\n\n  function addTodo(event) {\n    event.preventDefault();\n    var todoDiv = document.createElement('div');\n    todoDiv.classList.add(\"todo\");\n    var newTodo = document.createElement('li');\n    newTodo.innerText = todoInput.value;\n    newTodo.classList.add('todo-item');\n    todoDiv.appendChild(newTodo);\n    var completedButton = document.createElement('button');\n    completedButton.innerHTML = '<i class=\"fa fa-check\"></i>';\n    completedButton.classList.add(\"complete-btn\");\n    todoDiv.appendChild(completedButton);\n    var trashButton = document.createElement('button');\n    trashButton.innerHTML = '<i class=\"fa fa-trash\"></i>';\n    trashButton.classList.add(\"trash-btn\");\n    todoDiv.appendChild(trashButton);\n    todoList.appendChild(todoDiv);\n    todoInput.value = \"\";\n  }\n\n  function deleteCheck(event) {\n    var task = event.target;\n\n    if (task.classList[0] === \"trash-btn\") {\n      var todo = task.parentElement;\n      todo.classList.add(\"fall\");\n      todo.addEventListener(\"transitionend\", function () {\n        todo.remove();\n      });\n    }\n\n    if (task.classList[0] === \"complete-btn\") {\n      var _todo = task.parentElement;\n\n      _todo.classList.toggle(\"completed\");\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIlxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuXG4vL3NlbGVjdG9yc1xuXG4gIGNvbnN0IHRvZG9JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWlucHV0Jyk7XG4gIGNvbnN0IHRvZG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1idXR0b24nKTtcbiAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1saXN0Jyk7XG5cblxuICAvL2V2ZW50IGxpc3RlbmVycyBcbiAgdG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkVG9kbyk7XG4gIHRvZG9MaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVDaGVjayk7XG5cblxuXG5cbiAgLy9mdW5jdGlvbnNcblxuICBmdW5jdGlvbiBhZGRUb2RvKGV2ZW50KXtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuICAgIFxuICAgIGNvbnN0IG5ld1RvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIG5ld1RvZG8uaW5uZXJUZXh0ID0gdG9kb0lucHV0LnZhbHVlO1xuXG4gICAgbmV3VG9kby5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW0nKTtcbiAgICB0b2RvRGl2LmFwcGVuZENoaWxkKG5ld1RvZG8pO1xuXG4gICAgY29uc3QgY29tcGxldGVkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29tcGxldGVkQnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhIGZhLWNoZWNrXCI+PC9pPic7XG4gICAgY29tcGxldGVkQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZS1idG5cIik7XG4gICAgdG9kb0Rpdi5hcHBlbmRDaGlsZChjb21wbGV0ZWRCdXR0b24pO1xuXG4gICAgXG4gICAgY29uc3QgdHJhc2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0cmFzaEJ1dHRvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYSBmYS10cmFzaFwiPjwvaT4nO1xuICAgIHRyYXNoQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0cmFzaC1idG5cIik7XG4gICAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh0cmFzaEJ1dHRvbik7XG5cbiAgICB0b2RvTGlzdC5hcHBlbmRDaGlsZCh0b2RvRGl2KTtcblxuICAgIHRvZG9JbnB1dC52YWx1ZSA9IFwiXCI7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVDaGVjayhldmVudCl7XG4gICAgY29uc3QgdGFzayA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAodGFzay5jbGFzc0xpc3RbMF0gPT09IFwidHJhc2gtYnRuXCIpIHtcbiAgICAgIGNvbnN0IHRvZG8gPSB0YXNrLnBhcmVudEVsZW1lbnQ7XG4gICAgICB0b2RvLmNsYXNzTGlzdC5hZGQoXCJmYWxsXCIpO1xuICAgICAgdG9kby5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCBmdW5jdGlvbigpe1xuICAgICAgICB0b2RvLnJlbW92ZSgpO1xuICAgICAgfSlcbiAgICB9XG4gICAgaWYgKHRhc2suY2xhc3NMaXN0WzBdID09PSBcImNvbXBsZXRlLWJ0blwiKXtcbiAgICAgIGNvbnN0IHRvZG8gPSB0YXNrLnBhcmVudEVsZW1lbnQ7XG4gICAgICB0b2RvLmNsYXNzTGlzdC50b2dnbGUoXCJjb21wbGV0ZWRcIik7XG4gICAgfVxuICB9XG59KVxuXG5cblxuIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZG9JbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJ0b2RvQnV0dG9uIiwidG9kb0xpc3QiLCJhZGRUb2RvIiwiZGVsZXRlQ2hlY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidG9kb0RpdiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJuZXdUb2RvIiwiaW5uZXJUZXh0IiwidmFsdWUiLCJhcHBlbmRDaGlsZCIsImNvbXBsZXRlZEJ1dHRvbiIsImlubmVySFRNTCIsInRyYXNoQnV0dG9uIiwidGFzayIsInRhcmdldCIsInRvZG8iLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlIiwidG9nZ2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UZW1wby8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vVGVtcG8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/YWU5YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;