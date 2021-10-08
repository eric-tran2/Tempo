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

eval("document.addEventListener('DOMContentLoaded', function () {\n  //selectors\n  var todoInput = document.querySelector('.todo-input');\n  var todoButton = document.querySelector('.todo-button');\n  var todoList = document.querySelector('.todo-list'); //event listeners \n\n  todoButton.addEventListener(\"click\", addTodo); //functions\n\n  function addTodo(event) {\n    event.preventDefault();\n    var todoDiv = document.createElement('div');\n    todoDiv.classList.add(\"todo\");\n    var newTodo = document.createElement('li');\n    newTodo.innerText = 'testing';\n    newTodo.classList.add('todo-item');\n    todoDiv.appendChild(newTodo);\n    var completedButton = document.createElement('button');\n    completedButton.innerHTML = '<i class=fas fa-check\"></i>';\n    completedButton.classList.add(\"complete-btn\");\n    todoDiv.appendChild(completedButton);\n    var trashButton = document.createElement('button');\n    trashButton.innerHTML = '<i class=fas fa-trash\"></i>';\n    trashButton.classList.add(\"complete-btn\");\n    todoDiv.appendChild(trashButton);\n    todoList.appendChild(todoDiv);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UZW1wby8uL3NyYy9pbmRleC5qcz9iNjM1Il0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZG9JbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJ0b2RvQnV0dG9uIiwidG9kb0xpc3QiLCJhZGRUb2RvIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRvZG9EaXYiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwibmV3VG9kbyIsImlubmVyVGV4dCIsImFwcGVuZENoaWxkIiwiY29tcGxldGVkQnV0dG9uIiwiaW5uZXJIVE1MIiwidHJhc2hCdXR0b24iXSwibWFwcGluZ3MiOiJBQUFBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBRXBEO0FBRUUsTUFBTUMsU0FBUyxHQUFHRixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBbEI7QUFDQSxNQUFNQyxVQUFVLEdBQUdKLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixjQUF2QixDQUFuQjtBQUNBLE1BQU1FLFFBQVEsR0FBR0wsUUFBUSxDQUFDRyxhQUFULENBQXVCLFlBQXZCLENBQWpCLENBTmtELENBU2xEOztBQUNBQyxFQUFBQSxVQUFVLENBQUNILGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDSyxPQUFyQyxFQVZrRCxDQWNsRDs7QUFFQSxXQUFTQSxPQUFULENBQWlCQyxLQUFqQixFQUF1QjtBQUNyQkEsSUFBQUEsS0FBSyxDQUFDQyxjQUFOO0FBQ0EsUUFBTUMsT0FBTyxHQUFHVCxRQUFRLENBQUNVLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBaEI7QUFDQUQsSUFBQUEsT0FBTyxDQUFDRSxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixNQUF0QjtBQUVBLFFBQU1DLE9BQU8sR0FBR2IsUUFBUSxDQUFDVSxhQUFULENBQXVCLElBQXZCLENBQWhCO0FBQ0FHLElBQUFBLE9BQU8sQ0FBQ0MsU0FBUixHQUFvQixTQUFwQjtBQUVBRCxJQUFBQSxPQUFPLENBQUNGLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLFdBQXRCO0FBQ0FILElBQUFBLE9BQU8sQ0FBQ00sV0FBUixDQUFvQkYsT0FBcEI7QUFFQSxRQUFNRyxlQUFlLEdBQUdoQixRQUFRLENBQUNVLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBeEI7QUFDQU0sSUFBQUEsZUFBZSxDQUFDQyxTQUFoQixHQUE0Qiw2QkFBNUI7QUFDQUQsSUFBQUEsZUFBZSxDQUFDTCxTQUFoQixDQUEwQkMsR0FBMUIsQ0FBOEIsY0FBOUI7QUFDQUgsSUFBQUEsT0FBTyxDQUFDTSxXQUFSLENBQW9CQyxlQUFwQjtBQUdBLFFBQU1FLFdBQVcsR0FBR2xCLFFBQVEsQ0FBQ1UsYUFBVCxDQUF1QixRQUF2QixDQUFwQjtBQUNBUSxJQUFBQSxXQUFXLENBQUNELFNBQVosR0FBd0IsNkJBQXhCO0FBQ0FDLElBQUFBLFdBQVcsQ0FBQ1AsU0FBWixDQUFzQkMsR0FBdEIsQ0FBMEIsY0FBMUI7QUFDQUgsSUFBQUEsT0FBTyxDQUFDTSxXQUFSLENBQW9CRyxXQUFwQjtBQUVBYixJQUFBQSxRQUFRLENBQUNVLFdBQVQsQ0FBcUJOLE9BQXJCO0FBQ0Q7QUFDRixDQXhDRCIsInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG5cbi8vc2VsZWN0b3JzXG5cbiAgY29uc3QgdG9kb0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8taW5wdXQnKTtcbiAgY29uc3QgdG9kb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWJ1dHRvbicpO1xuICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QnKTtcblxuXG4gIC8vZXZlbnQgbGlzdGVuZXJzIFxuICB0b2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUb2RvKTtcblxuXG5cbiAgLy9mdW5jdGlvbnNcblxuICBmdW5jdGlvbiBhZGRUb2RvKGV2ZW50KXtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuICAgIFxuICAgIGNvbnN0IG5ld1RvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIG5ld1RvZG8uaW5uZXJUZXh0ID0gJ3Rlc3RpbmcnO1xuXG4gICAgbmV3VG9kby5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW0nKTtcbiAgICB0b2RvRGl2LmFwcGVuZENoaWxkKG5ld1RvZG8pO1xuXG4gICAgY29uc3QgY29tcGxldGVkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29tcGxldGVkQnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1mYXMgZmEtY2hlY2tcIj48L2k+JztcbiAgICBjb21wbGV0ZWRCdXR0b24uY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlLWJ0blwiKTtcbiAgICB0b2RvRGl2LmFwcGVuZENoaWxkKGNvbXBsZXRlZEJ1dHRvbik7XG5cbiAgICBcbiAgICBjb25zdCB0cmFzaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRyYXNoQnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1mYXMgZmEtdHJhc2hcIj48L2k+JztcbiAgICB0cmFzaEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGUtYnRuXCIpO1xuICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQodHJhc2hCdXR0b24pO1xuXG4gICAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQodG9kb0Rpdik7XG4gIH1cbn0pXG5cblxuXG4iXSwiZmlsZSI6Ii4vc3JjL2luZGV4LmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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