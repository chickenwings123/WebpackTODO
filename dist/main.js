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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listCard\", function() { return listCard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listBUtton\", function() { return listBUtton; });\nconst list_Div = document.getElementById('listDiv')\nconst mainContent = document.getElementById('mainDiv')\nconst sideDiv = document.getElementById('sidebarDiv')\n\n\nconst listBUtton = () => { \nconst hideTodos = document.getElementById('todos')\nconst hide_show_listCard = document.createElement('button')\nhide_show_listCard.classList.add(\"button2\")\nhide_show_listCard.innerHTML=\"Calendar\"//hides and shows the todos\nhide_show_listCard.addEventListener('click', ()=> {\n    if (hideTodos.style.display === \"grid\") {\n      hideTodos.style.display = \"none\";\n          } else {\n            hideTodos.style.display = \"grid\";\n          }\n    })\n    sideDiv.appendChild(hide_show_listCard)\n}\n \n\n \nconst listCard = (i,projId) => {\n   //creates todo div\n    const listcardDiv = document.createElement('div');\n    const divexpandButton = document.createElement('button');\n   \n    const editBtn = document.createElement('button');\n    editBtn.classList.add('button2');\n    editBtn.innerHTML=\"Edit\"\n    editBtn.value=\"off\"\n    listcardDiv.appendChild(editBtn) ;\n    divexpandButton.classList.add('button2')\n    listcardDiv.classList.add(\"listClass\")\n    divexpandButton.innerHTML= \"View  Details\"\n    listcardDiv.id=('listDivID'+i)\n   \n    const todoDivs= document.getElementById(projId)\n    const mainTodoDiv = document.getElementById('todos')\n    const title_h1 = document.createElement('h1');\n    title_h1.id=('title_h1'+i)\n    const due_h3 = document.createElement('h3');\n    due_h3.id = ('due_id'+i)\n    const description_h3 = document.createElement('h3');\n    description_h3.id = ('description_id'+i)\n    description_h3.style.display=\"none\"\n    const priority_h3 = document.createElement('h3');\n    priority_h3.id = ('priority_id'+i)\n    priority_h3.style.display=\"none\"\n\n    divexpandButton.addEventListener('click', () => {\n      if (description_h3.style.display === \"none\"){\n        description_h3.style.display = \"block\"\n      } else if (description_h3.style.display === \"block\") {\n        description_h3.style.display = \"none\"\n      }\n    })\n    ///button so todos can be edited\n    \n    editBtn.addEventListener('click', () => {\n      let currBtn =  editBtn.value\n      switch(currBtn){\n\n        case 'off':  document.getElementById(('listDivID'+i)).contentEditable = \"true\";\n                      editBtn.value = \"on\";\n                      editBtn.innerHTML=\"Save\"\n                      break;\n\n        case 'on': document.getElementById(('listDivID'+i)).contentEditable = \"false\";\n        editBtn.value = \"off\";\n        editBtn.innerHTML=\"Edit\"\n        break;\n        default:console.log('fa')\n      }\n   })\n\n    \n    listcardDiv.appendChild(title_h1);\n    listcardDiv.appendChild(due_h3);\n    listcardDiv.appendChild(description_h3);\n    listcardDiv.appendChild(priority_h3);\n    listcardDiv.appendChild(divexpandButton);\n    todoDivs.appendChild(listcardDiv);\n    \n \n\n}\n \n\n\n\n//# sourceURL=webpack:///./src/domContent.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domContent */ \"./src/domContent.js\");\n/* harmony import */ var _todoFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoFormat */ \"./src/todoFormat.js\");\n/* harmony import */ var _todoInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoInfo */ \"./src/todoInfo.js\");\n/* harmony import */ var _projectFormat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectFormat */ \"./src/projectFormat.js\");\n/* harmony import */ var _loadtodo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loadtodo */ \"./src/loadtodo.js\");\n\n\n\n\n\n\nlet i = 0;\nObject(_loadtodo__WEBPACK_IMPORTED_MODULE_4__[\"startProgram\"])();\n \n \n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/loadtodo.js":
/*!*************************!*\
  !*** ./src/loadtodo.js ***!
  \*************************/
/*! exports provided: startProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startProgram\", function() { return startProgram; });\n/* harmony import */ var _todoFormat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoFormat */ \"./src/todoFormat.js\");\n/* harmony import */ var _domContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domContent */ \"./src/domContent.js\");\n/* harmony import */ var _projectFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectFormat */ \"./src/projectFormat.js\");\n/* harmony import */ var _todoInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoInfo */ \"./src/todoInfo.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _projContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projContent */ \"./src/projContent.js\");\n\n\n\n\n\n\nconst startProgram = () => {\n    _todoFormat__WEBPACK_IMPORTED_MODULE_0__[\"todoAddForm\"]();\n    _todoFormat__WEBPACK_IMPORTED_MODULE_0__[\"todocreateDiv\"]();\n    _todoFormat__WEBPACK_IMPORTED_MODULE_0__[\"exitBtnFunc\"]('exitTodo')\n   \n    _domContent__WEBPACK_IMPORTED_MODULE_1__[\"listBUtton\"]();\n    _projectFormat__WEBPACK_IMPORTED_MODULE_2__[\"projectAddForm\"]();\n    _projectFormat__WEBPACK_IMPORTED_MODULE_2__[\"projaddButton\"]();\n    _todoInfo__WEBPACK_IMPORTED_MODULE_3__[\"listBUtton\"]();\n    _project__WEBPACK_IMPORTED_MODULE_4__[\"proj_new_btn\"]();\n    _todoFormat__WEBPACK_IMPORTED_MODULE_0__[\"exitBtnFunc\"]('exitProji')\n    _projContent__WEBPACK_IMPORTED_MODULE_5__[\"project_Div\"](0,\"Default\");\n    //jkhkjh is the project div's id\n    _todoFormat__WEBPACK_IMPORTED_MODULE_0__[\"todoAdd_proj\"](\"Default\")\n\n    \n\n \n\n    \n}\n\n\n\n//# sourceURL=webpack:///./src/loadtodo.js?");

/***/ }),

/***/ "./src/projContent.js":
/*!****************************!*\
  !*** ./src/projContent.js ***!
  \****************************/
/*! exports provided: project_Div, projectButon, defaultProj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"project_Div\", function() { return project_Div; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projectButon\", function() { return projectButon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defaultProj\", function() { return defaultProj; });\n\nconst projectButon = () => { \n  //HIDES AND SHOWS THE PROJECTS\n    const createProjButton = document.createElement('button');\n    const side_div = document.getElementById('sidebarDiv')\n    createProjButton.innerHTML =\"Your Projects\"\n    createProjButton.classList.add(\"button2\")\n    const thisId = projHold.id\n    createProjButton.addEventListener('click', () => {\n      \n        if (projHold.style.display === \"none\" ){\n          projHold.style.display = \"block\";\n          } else {\n            projHold.style.display = \"none\";\n          }\n    }  );\n    side_div.appendChild(createProjButton);\n     \n}\n \nconst project_Div =  (y,proj_title) => {\n  //creates project div\n\n    const proj_Hold = document.getElementById('projHold')\n\n    const newProjectDiv = document.createElement('div');\n    newProjectDiv.id = (proj_title)\n\n    const projectTitle = document.createElement('h1');\n    projectTitle.id=('title'+y)\n    newProjectDiv.appendChild(projectTitle);\n\n    const projectDescription = document.createElement('h3');\n    projectDescription.id = ('description'+y)\n    newProjectDiv.appendChild(projectDescription);\n\n    proj_Hold.appendChild(newProjectDiv);\n    const mainDiv = document.getElementById('mainDiv')\n    mainDiv.appendChild(projHold)\n \n}\n\nconst defaultProj = () => {\n  project_Div('0','Default')\n  document.getElementById('title0').textContent=\"Default Project\"\n  document.getElementById('description0').textContent=\"List of to-dos\"\n}\n\n\n \n\n\n//# sourceURL=webpack:///./src/projContent.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/*! exports provided: Project, proj_new_btn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Project\", function() { return Project; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"proj_new_btn\", function() { return proj_new_btn; });\n/* harmony import */ var _todoFormat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoFormat */ \"./src/todoFormat.js\");\n\nclass Project {\n    constructor(title,description,num,arr){\n        this.title=title;\n        this.description=description;\n        this.num = num;\n        \n        this.mergeProj = (y) => {\n            let projTitle = document.getElementById('title'+y);\n            projTitle.textContent = this.title;\n            let projDescription = document.getElementById('description'+y);\n            projDescription.textContent=this.description;\n             \n            \n        }\n    }        \n}\n\nconst proj_new_btn = () => { \n    const nav_div = document.getElementById('navbar');\n    const formTodoNew = document.getElementById('forms');//\n    const newProjBtn = document.createElement('button')\n    newProjBtn.id=\"New_Proj\"\n    newProjBtn.classList.add(\"button2\")\n    newProjBtn.innerHTML=\"Create a project\"\n    //////add new proj\n    newProjBtn.addEventListener('click', ()=> {\n        //document.getElementById('mainDiv').className =\"blur\";\n        if (formTodoNew.style.display === \"block\") {\n            formTodoNew.style.display = \"none\";\n          \n            document.getElementById('projFormat').style.display=\"none\";\n            \n        }\n             else {\n                 formTodoNew.style.display = \"block\";\n                 document.getElementById('projFormat').style.display=\"block\";\n                 document.getElementById('mainDiv').className =\"blur\";\n                   document.getElementById('todoDiv').style.display=\"none\";\n             }\n    \n        })\n        nav_div.appendChild(newProjBtn)\n        \n    }\n    \n \n\n\n//# sourceURL=webpack:///./src/project.js?");

/***/ }),

/***/ "./src/projectFormat.js":
/*!******************************!*\
  !*** ./src/projectFormat.js ***!
  \******************************/
/*! exports provided: projectAddForm, projaddButton, projArr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projectAddForm\", function() { return projectAddForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projaddButton\", function() { return projaddButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projArr\", function() { return projArr; });\n/* harmony import */ var _projContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projContent */ \"./src/projContent.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _todoFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoFormat */ \"./src/todoFormat.js\");\n\n\n\n\n\nlet y=0;    \n \n\nconst projectAddForm = () => {\n    //form for new project\n    Object(_projContent__WEBPACK_IMPORTED_MODULE_0__[\"projectButon\"])()\n   \n    const mainDiv = document.getElementById('forms')\n    const projDIV = document.createElement('div')\n    projDIV.id=\"projFormat\"\n\n    const projectForm = document.createElement('form');\n    projectForm.id=\"projFORM\"\n    projectForm.className=\"formStyle\"\n     \n    const projTitle = document.createElement('input');\n    projTitle.name=\"projTitle\";\n    projTitle.type = \"text\";\n    projectForm.appendChild(projTitle);\n\n    const proj_Description = document.createElement('textarea');\n    proj_Description.name=\"proj_Description\"\n    projectForm.appendChild(proj_Description);\n \n    const exitProj = document.createElement('button');\n    exitProj.id=\"exitProji\"\n    exitProj.name=\"exitProject\";\n    exitProj.innerHTML=\"Exit\"\n    projDIV.appendChild(exitProj)\n    \n    \n\n    const proj_submit_btn = document.createElement('input');\n    proj_submit_btn.type=\"submit\";\n    proj_submit_btn.id =\"proj_submitbtn\"\n    proj_submit_btn.value =\"Add a project\"\n    projectForm.appendChild(proj_submit_btn);\n    \n    projDIV.appendChild(projectForm)\n    mainDiv.appendChild(projDIV); \n    \n}\nconst projaddButton = () => {\n    //gets info for new project\n    document.getElementById('projFORM').addEventListener('submit', (e) => {\n        \n        const projData = new FormData(e.target);\n        const projTitle = projData.get('projTitle');\n        const proj_Description = projData.get('proj_Description');\n        \n        let projContents = new _project__WEBPACK_IMPORTED_MODULE_1__[\"Project\"](projTitle,proj_Description,y,projTitle)\n        \n        Object(_projContent__WEBPACK_IMPORTED_MODULE_0__[\"project_Div\"])(y,projTitle);\n        projContents.mergeProj(y);\n        y++\n        projArr.push(projTitle)\n \n        e.preventDefault()\n\n        _todoFormat__WEBPACK_IMPORTED_MODULE_2__[\"todoAdd_proj\"](projTitle);\n        document.getElementById('forms').style.display=\"none\";\n        document.getElementById('mainDiv').className =\"\";\n        \n    }) \n\n}\n\n\nconst defaultProj = () => {\n\n}\n\nlet projArr = []\n\n\n//# sourceURL=webpack:///./src/projectFormat.js?");

/***/ }),

/***/ "./src/todoFormat.js":
/*!***************************!*\
  !*** ./src/todoFormat.js ***!
  \***************************/
/*! exports provided: todoAddForm, todocreateDiv, todoAdd_proj, exitBtnFunc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todoAddForm\", function() { return todoAddForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todocreateDiv\", function() { return todocreateDiv; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todoAdd_proj\", function() { return todoAdd_proj; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"exitBtnFunc\", function() { return exitBtnFunc; });\n/* harmony import */ var _todoInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoInfo */ \"./src/todoInfo.js\");\n/* harmony import */ var _domContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domContent */ \"./src/domContent.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _projectFormat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectFormat */ \"./src/projectFormat.js\");\n\n\n\n\n\n\nlet i = 0;\n\n\n\nconst mainDiv = document.getElementById('forms')\n\nconst todoAddForm = () => {\n    \n    const todoCard = document.createElement('div');\n    todoCard.id=\"todoDiv\";\n   \n    const todoForm = document.createElement('form');\n    todoForm.id=\"listFormID\"\n\n    const todoTitle = document.createElement('input');\n    todoTitle.type = \"text\";\n    \n    todoTitle.name=\"todoTitle\";\n    todoForm.appendChild(todoTitle);\n    todoTitle.value=\"Title\";\n\n    const todoDescripton = document.createElement('input');\n    todoDescripton.type = \"text\";\n    todoDescripton.name=\"todoDescripton\"\n    todoDescripton.value = \"Description\"\n    todoForm.appendChild(todoDescripton);\n\n    const dueDate = document.createElement('input');\n    dueDate.type = \"date\";\n    dueDate.name=\"dueDate\";\n    dueDate.value = \"Due Date\"\n    todoForm.appendChild(dueDate);\n\n    const priority = document.createElement('select');\n \n    priority.name=\"priority\"\n    const lowPrio = document.createElement('option');\n    lowPrio.name= \"low\"\n    lowPrio.textContent=\"Low\";\n    priority.appendChild(lowPrio);\n    const highPrio = document.createElement('option');\n    highPrio.name =\"high\"\n    highPrio.textContent=\"High\";\n    priority.appendChild(highPrio);\n\n    todoForm.appendChild(priority);\n    \n    const medPrio = document.createElement('option');\n    medPrio.textContent=\"Medium\";\n    priority.appendChild(medPrio)\n    medPrio.name=\"med\"\n\n    const exitBtn = document.createElement('button');\n    exitBtn.type=\"button\"\n    exitBtn.name = \"exit\"\n    exitBtn.id = \"exitTodo\"\n    exitBtn.innerHTML=\"Exit\"\n   \n   \n    todoForm.appendChild(exitBtn)\n\n    const projSel = document.createElement('select');\n    projSel.id =\"select_project\"\n    projSel.name=\"projLocation\"\n\n//default project\n    //const defaultProj = document.createElement('option');\n  \n   // defaultProj.textContent=\"Default\";\n    //projSel.appendChild(defaultProj);\n    \n    todoForm.appendChild(projSel);\n \n    const todo_submit_btn = document.createElement('input');\n    todo_submit_btn.type=\"submit\";\n    todoForm.appendChild(todo_submit_btn);\n \n    todoCard.appendChild(todoForm);\n    mainDiv.appendChild(todoCard);\n     \n}\n\nconst todocreateDiv = () => {\n   \n/////////////////////////////////////////////////\n// create a close  button \n////////////////////\n\n\n    document.getElementById('listFormID').addEventListener('submit', (e) => {\n        if (document.getElementById('forms').contains(e.target)){ \n       //gets todo info\n        const formData = new FormData(e.target);\n        const todo_title = formData.get('todoTitle');\n        const todo_description = formData.get('todoDescripton');\n        const formdueDate = formData.get('dueDate');\n        const formPriority = formData.get('priority');\n        const formProj = formData.get('projLocation');\n        let formContents = new _todoInfo__WEBPACK_IMPORTED_MODULE_0__[\"getTodoInfo\"](todo_title,todo_description,formdueDate,formPriority,i,formProj)\n        Object(_domContent__WEBPACK_IMPORTED_MODULE_1__[\"listCard\"])(i,formProj);\n        formContents.mergeContent(i);\n        i++\n        e.preventDefault()\n        document.getElementById('forms').style.display=\"none\";\n        document.getElementById('mainDiv').className =\"\";\n        \n    } else return\n    }\n    )\n\n\n}\n \nconst todoAdd_proj = (projName) => {\n    const proj_name= document.createElement('option')\n    proj_name.textContent = projName\n     document.getElementById('select_project').appendChild(proj_name)\n\n}\n \n\nconst exitBtnFunc = (whichForm) => { \n    \n  document.getElementById(whichForm).addEventListener('click', () => {\n    document.getElementById('forms').style.display=\"none\";\n    document.getElementById('mainDiv').className =\"\"\n}\n)  }\n \n\n\n//# sourceURL=webpack:///./src/todoFormat.js?");

/***/ }),

/***/ "./src/todoInfo.js":
/*!*************************!*\
  !*** ./src/todoInfo.js ***!
  \*************************/
/*! exports provided: getTodoInfo, listBUtton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTodoInfo\", function() { return getTodoInfo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listBUtton\", function() { return listBUtton; });\n/* harmony import */ var _todoFormat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoFormat */ \"./src/todoFormat.js\");\n \nclass getTodoInfo {\n    constructor(title,description,dueDate,priority,num,projLocation){\n        this.title=title;\n        this.description=description;\n        this.dueDate=dueDate;\n        this.priority=priority;\n        this.num = num;\n        this.projLocation = projLocation;\n\n        this.mergeContent = (i) => {\n            let listTitle = document.getElementById('title_h1'+i);\n            \n            listTitle.textContent = this.title;\n            let listDue = document.getElementById('due_id'+i);\n            listDue.textContent=this.dueDate;\n            let listDescription = document.getElementById('description_id'+i);\n            listDescription.textContent=this.description;\n            let listPriority = document.getElementById('priority_id'+i);\n            listPriority.textContent= this.priority;\n             \n\n\n        }\n\n\n    }     \n\n}\n \n\nconst listBUtton = () => { \n\n   \n    \n    const nav_div = document.getElementById('navbar');\n    const formTodoNew = document.getElementById('forms');\n    const newtodoBtn = document.createElement('button')\n    newtodoBtn.id=\"NewToDo\"\n    \n    newtodoBtn.innerHTML=\"Create a todo\"//btn to add new to do\n    newtodoBtn.addEventListener('click', ()=> {//hide.show todo form\n\n        document.getElementById('mainDiv').className =\"blur\";\n        if (formTodoNew.style.display === \"block\") {\n            formTodoNew.style.display = \"none\";\n            document.getElementById('todoDiv').style.display = \"none\";\n            document.getElementById('mainDiv').className =\"\"\n            \n        } else  {formTodoNew.style.display = \"block\";\n    document.getElementById('todoDiv').style.display = \"block\";\n    document.getElementById('projFormat').style.display=\"none\";\n    document.getElementById('mainDiv').className =\"blur\"; }\n    \n        })\n        nav_div.appendChild(newtodoBtn)\n        \n    }\n    \n\n\n        \n\n//# sourceURL=webpack:///./src/todoInfo.js?");

/***/ })

/******/ });