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

eval("document.addEventListener('DOMContentLoaded', function () {\n  //selectors\n  var todoInput = document.querySelector('.todo-input');\n  var todoButton = document.querySelector('.todo-button');\n  var todoList = document.querySelector('.todo-list'); //event listeners \n\n  todoButton.addEventListener(\"click\", addTodo); //functions\n\n  function addTodo(event) {\n    event.preventDefault();\n    var todoDiv = document.createElement('div');\n    todoDiv.classList.add(\"todo\");\n    var newTodo = document.createElement('li');\n    newTodo.innerText = todoInput.value;\n    newTodo.classList.add('todo-item');\n    todoDiv.appendChild(newTodo);\n    var completedButton = document.createElement('button');\n    completedButton.innerHTML = '<i class=\"fa fa-check\"></i>';\n    completedButton.classList.add(\"complete-btn\");\n    todoDiv.appendChild(completedButton);\n    var trashButton = document.createElement('button');\n    trashButton.innerHTML = '<i class=\"fa fa-trash\"></i>';\n    trashButton.classList.add(\"trash-btn\");\n    todoDiv.appendChild(trashButton);\n    todoList.appendChild(todoDiv);\n    todoInput.value = \"\";\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UZW1wby8uL3NyYy9pbmRleC5qcz9iNjM1Il0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZG9JbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJ0b2RvQnV0dG9uIiwidG9kb0xpc3QiLCJhZGRUb2RvIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRvZG9EaXYiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwibmV3VG9kbyIsImlubmVyVGV4dCIsInZhbHVlIiwiYXBwZW5kQ2hpbGQiLCJjb21wbGV0ZWRCdXR0b24iLCJpbm5lckhUTUwiLCJ0cmFzaEJ1dHRvbiJdLCJtYXBwaW5ncyI6IkFBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFFcEQ7QUFFRSxNQUFNQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixhQUF2QixDQUFsQjtBQUNBLE1BQU1DLFVBQVUsR0FBR0osUUFBUSxDQUFDRyxhQUFULENBQXVCLGNBQXZCLENBQW5CO0FBQ0EsTUFBTUUsUUFBUSxHQUFHTCxRQUFRLENBQUNHLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBakIsQ0FOa0QsQ0FTbEQ7O0FBQ0FDLEVBQUFBLFVBQVUsQ0FBQ0gsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUNLLE9BQXJDLEVBVmtELENBY2xEOztBQUVBLFdBQVNBLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXVCO0FBQ3JCQSxJQUFBQSxLQUFLLENBQUNDLGNBQU47QUFDQSxRQUFNQyxPQUFPLEdBQUdULFFBQVEsQ0FBQ1UsYUFBVCxDQUF1QixLQUF2QixDQUFoQjtBQUNBRCxJQUFBQSxPQUFPLENBQUNFLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLE1BQXRCO0FBRUEsUUFBTUMsT0FBTyxHQUFHYixRQUFRLENBQUNVLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBaEI7QUFDQUcsSUFBQUEsT0FBTyxDQUFDQyxTQUFSLEdBQW9CWixTQUFTLENBQUNhLEtBQTlCO0FBRUFGLElBQUFBLE9BQU8sQ0FBQ0YsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsV0FBdEI7QUFDQUgsSUFBQUEsT0FBTyxDQUFDTyxXQUFSLENBQW9CSCxPQUFwQjtBQUVBLFFBQU1JLGVBQWUsR0FBR2pCLFFBQVEsQ0FBQ1UsYUFBVCxDQUF1QixRQUF2QixDQUF4QjtBQUNBTyxJQUFBQSxlQUFlLENBQUNDLFNBQWhCLEdBQTRCLDZCQUE1QjtBQUNBRCxJQUFBQSxlQUFlLENBQUNOLFNBQWhCLENBQTBCQyxHQUExQixDQUE4QixjQUE5QjtBQUNBSCxJQUFBQSxPQUFPLENBQUNPLFdBQVIsQ0FBb0JDLGVBQXBCO0FBR0EsUUFBTUUsV0FBVyxHQUFHbkIsUUFBUSxDQUFDVSxhQUFULENBQXVCLFFBQXZCLENBQXBCO0FBQ0FTLElBQUFBLFdBQVcsQ0FBQ0QsU0FBWixHQUF3Qiw2QkFBeEI7QUFDQUMsSUFBQUEsV0FBVyxDQUFDUixTQUFaLENBQXNCQyxHQUF0QixDQUEwQixXQUExQjtBQUNBSCxJQUFBQSxPQUFPLENBQUNPLFdBQVIsQ0FBb0JHLFdBQXBCO0FBRUFkLElBQUFBLFFBQVEsQ0FBQ1csV0FBVCxDQUFxQlAsT0FBckI7QUFFQVAsSUFBQUEsU0FBUyxDQUFDYSxLQUFWLEdBQWtCLEVBQWxCO0FBQ0Q7QUFDRixDQTFDRCIsInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG5cbi8vc2VsZWN0b3JzXG5cbiAgY29uc3QgdG9kb0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8taW5wdXQnKTtcbiAgY29uc3QgdG9kb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWJ1dHRvbicpO1xuICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QnKTtcblxuXG4gIC8vZXZlbnQgbGlzdGVuZXJzIFxuICB0b2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUb2RvKTtcblxuXG5cbiAgLy9mdW5jdGlvbnNcblxuICBmdW5jdGlvbiBhZGRUb2RvKGV2ZW50KXtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuICAgIFxuICAgIGNvbnN0IG5ld1RvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIG5ld1RvZG8uaW5uZXJUZXh0ID0gdG9kb0lucHV0LnZhbHVlO1xuXG4gICAgbmV3VG9kby5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW0nKTtcbiAgICB0b2RvRGl2LmFwcGVuZENoaWxkKG5ld1RvZG8pO1xuXG4gICAgY29uc3QgY29tcGxldGVkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29tcGxldGVkQnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhIGZhLWNoZWNrXCI+PC9pPic7XG4gICAgY29tcGxldGVkQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZS1idG5cIik7XG4gICAgdG9kb0Rpdi5hcHBlbmRDaGlsZChjb21wbGV0ZWRCdXR0b24pO1xuXG4gICAgXG4gICAgY29uc3QgdHJhc2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0cmFzaEJ1dHRvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYSBmYS10cmFzaFwiPjwvaT4nO1xuICAgIHRyYXNoQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0cmFzaC1idG5cIik7XG4gICAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh0cmFzaEJ1dHRvbik7XG5cbiAgICB0b2RvTGlzdC5hcHBlbmRDaGlsZCh0b2RvRGl2KTtcblxuICAgIHRvZG9JbnB1dC52YWx1ZSA9IFwiXCI7XG4gIH1cbn0pXG5cblxuXG4iXSwiZmlsZSI6Ii4vc3JjL2luZGV4LmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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