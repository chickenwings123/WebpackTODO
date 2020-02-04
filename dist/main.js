/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/domContent.js":
/*!***************************!*\
  !*** ./src/domContent.js ***!
  \***************************/
/*! exports provided: listCard, listBUtton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listCard\", function() { return listCard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listBUtton\", function() { return listBUtton; });\n \nconst mainDiv = document.getElementById(\"mainDiv\") \nconst sidebarDiv = document.getElementById(\"sidebarDiv\") \n\nconst listBUtton = () => { \nconst hide_show_listCard = document.createElement('button')\nhide_show_listCard.innerHTML=\"Your Todos\"\nhide_show_listCard.addEventListener('click', ()=> {\n    if (listDiv.style.display === \"none\") {\n            listDiv.style.display = \"block\";\n          } else {\n            listDiv.style.display = \"none\";\n          }\n    })\n    sidebarDiv.appendChild(hide_show_listCard)\n}\nlistBUtton();\n \n\n\nconst listCard = ( i) => {\n    const listDiv = document.getElementById(\"listDiv\")\n    \n    const listcardDiv = document.createElement('div');\n    \n    listcardDiv.id=('listDivID'+i)\n\n    const title_h1 = document.createElement('h1');\n    title_h1.id=('title_h1'+i)\n    const due_h3 = document.createElement('h3');\n    due_h3.id = ('due_id'+i)\n    const description_h3 = document.createElement('h3');\n    description_h3.id = ('description_id'+i)\n    const priority_h3 = document.createElement('h3');\n    priority_h3.id = ('priority_id'+i)\n\n    listcardDiv.appendChild(title_h1);\n    listcardDiv.appendChild(due_h3);\n    listcardDiv.appendChild(description_h3);\n    listcardDiv.appendChild(priority_h3);\n\n    listDiv.appendChild(listcardDiv);\n    sidebarDiv.appendChild(listDiv)\n\n}\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/domContent.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domContent */ \"./src/domContent.js\");\n/* harmony import */ var _todoFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoFormat */ \"./src/todoFormat.js\");\n/* harmony import */ var _todoInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoInfo */ \"./src/todoInfo.js\");\n/* harmony import */ var _projectFormat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectFormat */ \"./src/projectFormat.js\");\n\n\n\n\n\n\n Object(_todoFormat__WEBPACK_IMPORTED_MODULE_1__[\"todoAddForm\"])();\n\n Object(_projectFormat__WEBPACK_IMPORTED_MODULE_3__[\"projectAddForm\"])();\n \n \n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/projContent.js":
/*!****************************!*\
  !*** ./src/projContent.js ***!
  \****************************/
/*! exports provided: project_Div, projectButon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"project_Div\", function() { return project_Div; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projectButon\", function() { return projectButon; });\n\nconst projectButon = () => { \n    const createProjButton = document.createElement('button');\n    createProjButton.innerHTML =\"Add a Project\"\n    createProjButton.addEventListener('click', () => {\n      \n        if (projHold.style.display === \"none\"){\n          projHold.style.display = \"block\";\n          } else {\n            projHold.style.display = \"none\";\n          }\n    }  );\n    mainDiv.appendChild(createProjButton);\n}\n \nconst project_Div =  (y) => {\n\n    const projHold = document.getElementById('projHold')\n\n    const newProjectDiv = document.createElement('div');\n    newProjectDiv.id = \"proj_create\"\n\n    const projectTitle = document.createElement('h1');\n    projectTitle.id=('title'+y)\n    newProjectDiv.appendChild(projectTitle);\n\n    const projectDescription = document.createElement('h3');\n    projectDescription.id = ('description'+y)\n    newProjectDiv.appendChild(projectDescription);\n\n    projHold.appendChild(newProjectDiv);\n    const mainDiv = document.getElementById('mainDiv')\n    mainDiv.appendChild(projHold)\n \n \n}\n\n\n \n\n\n//# sourceURL=webpack:///./src/projContent.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Project\", function() { return Project; });\n\nclass Project {\n    constructor(title,description,num){\n        this.title=title;\n        this.description=description;\n        this.num = num;\n\n        this.mergeProj = (y) => {\n            let projTitle = document.getElementById('title'+y);\n            projTitle.textContent = this.title;\n             \n            let projDescription = document.getElementById('description'+y);\n            projDescription.textContent=this.description;\n            \n        }\n    }     \n\n}\n   \n\n\n//# sourceURL=webpack:///./src/project.js?");

/***/ }),

/***/ "./src/projectFormat.js":
/*!******************************!*\
  !*** ./src/projectFormat.js ***!
  \******************************/
/*! exports provided: projectAddForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projectAddForm\", function() { return projectAddForm; });\n/* harmony import */ var _projContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projContent */ \"./src/projContent.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\n\n\nlet y=0;    \n\nconst projectAddForm = () => {\n    Object(_projContent__WEBPACK_IMPORTED_MODULE_0__[\"projectButon\"])()\n    const mainDiv = document.getElementById('mainDiv')\n    const projDIV = document.createElement('div')\n    projDIV.id=\"projFormat\"\n\n    const projectForm = document.createElement('form');\n    projectForm.id=\"projFORM\"\n\n    const projTitle = document.createElement('input');\n    projTitle.type = \"text\";\n    projTitle.name=\"projTitle\";\n    projectForm.appendChild(projTitle);\n\n    const proj_Description = document.createElement('input');\n    proj_Description.type = \"text\";\n    proj_Description.name=\"proj_Description\"\n    projectForm.appendChild(proj_Description);\n \n    const proj_submit_btn = document.createElement('input');\n    proj_submit_btn.type=\"submit\";\n    proj_submit_btn.innerText=\"Submit Project\"\n    projectForm.appendChild(proj_submit_btn);\n \n    projDIV.appendChild(projectForm)\n    mainDiv.appendChild(projDIV); \n\n    document.getElementById('projFORM').addEventListener('submit', (e) => {\n\n        Object(_projContent__WEBPACK_IMPORTED_MODULE_0__[\"project_Div\"])(y);\n        \n        const projData = new FormData(e.target);\n        const projTitle = projData.get('projTitle');\n        const proj_Description = projData.get('proj_Description');\n        \n        let projContents = new _project__WEBPACK_IMPORTED_MODULE_1__[\"Project\"](projTitle,proj_Description,y)\n\n        projContents.mergeProj(y);\n        y++\n        e.preventDefault()\n       \n    })\n\n    \n    \n    \n}\n  \n\n\n//# sourceURL=webpack:///./src/projectFormat.js?");

/***/ }),

/***/ "./src/todoFormat.js":
/*!***************************!*\
  !*** ./src/todoFormat.js ***!
  \***************************/
/*! exports provided: todoAddForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todoAddForm\", function() { return todoAddForm; });\n/* harmony import */ var _todoInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoInfo */ \"./src/todoInfo.js\");\n/* harmony import */ var _domContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domContent */ \"./src/domContent.js\");\n\n\n\nlet i = 0;\n\n     \nconst todoAddForm = () => {\n    const mainDiv = document.getElementById('mainDiv')\n    const todoCard = document.createElement('div');\n    todoCard.id=\"todoDiv\";\n   \n    const todoForm = document.createElement('form');\n    todoForm.id=\"listFormID\"\n\n    const todoTitle = document.createElement('input');\n    todoTitle.type = \"text\";\n    todoTitle.name=\"todoTitle\";\n    todoForm.appendChild(todoTitle);\n\n    const todoDescripton = document.createElement('input');\n    todoDescripton.type = \"text\";\n    todoDescripton.name=\"todoDescripton\"\n    todoForm.appendChild(todoDescripton);\n\n    const dueDate = document.createElement('input');\n    dueDate.type = \"text\";\n    dueDate.name=\"dueDate\"\n    todoForm.appendChild(dueDate);\n\n    const priority = document.createElement('input');\n    priority.type = \"text\";\n    priority.name=\"priority\"\n    todoForm.appendChild(priority);\n\n    const todo_submit_btn = document.createElement('input');\n    todo_submit_btn.type=\"submit\";\n    todoForm.appendChild(todo_submit_btn);\n\n    \n    todoCard.appendChild(todoForm);\n    mainDiv.appendChild(todoCard);\n    \n\n    document.getElementById('listFormID').addEventListener('submit', (e) => {\n\n        Object(_domContent__WEBPACK_IMPORTED_MODULE_1__[\"listCard\"])(i);\n        const formData = new FormData(e.target);\n        const todo_title = formData.get('todoTitle');\n        const todo_description = formData.get('todoDescripton');\n        const formdueDate = formData.get('dueDate');\n        const formPriority = formData.get('priority');\n        \n        let formContents = new _todoInfo__WEBPACK_IMPORTED_MODULE_0__[\"getTodoInfo\"](todo_title,todo_description,formdueDate,formPriority,i)\n\n        formContents.mergeContent(i);\n        i++\n        e.preventDefault()\n        \n    }\n    )\n \n}\n \n\n\n//# sourceURL=webpack:///./src/todoFormat.js?");

/***/ }),

/***/ "./src/todoInfo.js":
/*!*************************!*\
  !*** ./src/todoInfo.js ***!
  \*************************/
/*! exports provided: getTodoInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTodoInfo\", function() { return getTodoInfo; });\n\nclass getTodoInfo {\n    constructor(title,description,dueDate,priority,num){\n        this.title=title;\n        this.description=description;\n        this.dueDate=dueDate;\n        this.priority=priority;\n        this.num = num;\n\n        this.mergeContent = (i) => {\n            let listTitle = document.getElementById('title_h1'+i);\n            listTitle.textContent = this.title;\n            let listDue = document.getElementById('due_id'+i);\n            listDue.textContent=this.dueDate;\n            let listDescription = document.getElementById('description_id'+i);\n            listDescription.textContent=this.description;\n            let listPriority = document.getElementById('priority_id'+i);\n            listPriority.textContent= this.priority;\n        }\n    }     \n\n}\n   \n\n\n\n\n//# sourceURL=webpack:///./src/todoInfo.js?");

/***/ })

/******/ });