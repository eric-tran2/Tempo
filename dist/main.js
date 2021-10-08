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

eval("//selectors\nvar todoInput = document.querySelector('.todo-input');\nvar todoButton = document.querySelector('.todo-button');\nvar todoList = document.querySelector('.todo-list'); //event listeners \n\ntodoButton.addEventListener(\"click\", addTodo); //functions\n\nfunction addTodo(event) {\n  event.preventDefault();\n  var todoDiv = document.createElement('div');\n  todoDiv.classList.add(\"todo\");\n  var newTodo = document.createElement('li');\n  newTodo.innerText = 'testing';\n  newTodo.classList.add('todo-item');\n  todoDiv.appendChild(newTodo);\n  var completedButton = document.createElement('button');\n  completedButton.innerHTML = '<i class=fas fa-check\"></i>';\n  completedButton.classList.add(\"complete-btn\");\n  todoDiv.appendChild(completedButton);\n  var trashButton = document.createElement('button');\n  trashButton.innerHTML = '<i class=fas fa-trash\"></i>';\n  trashButton.classList.add(\"complete-btn\");\n  todoDiv.appendChild(trashButton);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UZW1wby8uL3NyYy9pbmRleC5qcz9iNjM1Il0sIm5hbWVzIjpbInRvZG9JbnB1dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRvZG9CdXR0b24iLCJ0b2RvTGlzdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZGRUb2RvIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRvZG9EaXYiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwibmV3VG9kbyIsImlubmVyVGV4dCIsImFwcGVuZENoaWxkIiwiY29tcGxldGVkQnV0dG9uIiwiaW5uZXJIVE1MIiwidHJhc2hCdXR0b24iXSwibWFwcGluZ3MiOiJBQUFBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBbEI7QUFDQSxJQUFNQyxVQUFVLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixDQUFuQjtBQUNBLElBQU1FLFFBQVEsR0FBR0gsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLENBQWpCLEMsQ0FHQTs7QUFFQUMsVUFBVSxDQUFDRSxnQkFBWCxDQUE0QixPQUE1QixFQUFxQ0MsT0FBckMsRSxDQUlBOztBQUVBLFNBQVNBLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXVCO0FBQ3JCQSxFQUFBQSxLQUFLLENBQUNDLGNBQU47QUFDQSxNQUFNQyxPQUFPLEdBQUdSLFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixLQUF2QixDQUFoQjtBQUNBRCxFQUFBQSxPQUFPLENBQUNFLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLE1BQXRCO0FBRUEsTUFBTUMsT0FBTyxHQUFHWixRQUFRLENBQUNTLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBaEI7QUFDQUcsRUFBQUEsT0FBTyxDQUFDQyxTQUFSLEdBQW9CLFNBQXBCO0FBRUFELEVBQUFBLE9BQU8sQ0FBQ0YsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsV0FBdEI7QUFDQUgsRUFBQUEsT0FBTyxDQUFDTSxXQUFSLENBQW9CRixPQUFwQjtBQUVBLE1BQU1HLGVBQWUsR0FBR2YsUUFBUSxDQUFDUyxhQUFULENBQXVCLFFBQXZCLENBQXhCO0FBQ0FNLEVBQUFBLGVBQWUsQ0FBQ0MsU0FBaEIsR0FBNEIsNkJBQTVCO0FBQ0FELEVBQUFBLGVBQWUsQ0FBQ0wsU0FBaEIsQ0FBMEJDLEdBQTFCLENBQThCLGNBQTlCO0FBQ0FILEVBQUFBLE9BQU8sQ0FBQ00sV0FBUixDQUFvQkMsZUFBcEI7QUFHQSxNQUFNRSxXQUFXLEdBQUdqQixRQUFRLENBQUNTLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBcEI7QUFDQVEsRUFBQUEsV0FBVyxDQUFDRCxTQUFaLEdBQXdCLDZCQUF4QjtBQUNBQyxFQUFBQSxXQUFXLENBQUNQLFNBQVosQ0FBc0JDLEdBQXRCLENBQTBCLGNBQTFCO0FBQ0FILEVBQUFBLE9BQU8sQ0FBQ00sV0FBUixDQUFvQkcsV0FBcEI7QUFHRCIsInNvdXJjZXNDb250ZW50IjpbIi8vc2VsZWN0b3JzXG5cbmNvbnN0IHRvZG9JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWlucHV0Jyk7XG5jb25zdCB0b2RvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tYnV0dG9uJyk7XG5jb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QnKTtcblxuXG4vL2V2ZW50IGxpc3RlbmVycyBcblxudG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkVG9kbyk7XG5cblxuXG4vL2Z1bmN0aW9uc1xuXG5mdW5jdGlvbiBhZGRUb2RvKGV2ZW50KXtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuICBcbiAgY29uc3QgbmV3VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIG5ld1RvZG8uaW5uZXJUZXh0ID0gJ3Rlc3RpbmcnO1xuXG4gIG5ld1RvZG8uY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtJyk7XG4gIHRvZG9EaXYuYXBwZW5kQ2hpbGQobmV3VG9kbyk7XG5cbiAgY29uc3QgY29tcGxldGVkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbXBsZXRlZEJ1dHRvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9ZmFzIGZhLWNoZWNrXCI+PC9pPic7XG4gIGNvbXBsZXRlZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGUtYnRuXCIpO1xuICB0b2RvRGl2LmFwcGVuZENoaWxkKGNvbXBsZXRlZEJ1dHRvbik7XG5cbiAgXG4gIGNvbnN0IHRyYXNoQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHRyYXNoQnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1mYXMgZmEtdHJhc2hcIj48L2k+JztcbiAgdHJhc2hCdXR0b24uY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlLWJ0blwiKTtcbiAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh0cmFzaEJ1dHRvbik7XG5cblxufVxuXG4iXSwiZmlsZSI6Ii4vc3JjL2luZGV4LmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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