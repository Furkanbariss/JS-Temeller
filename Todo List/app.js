
// const todoForm = document.querySelector("#todoAddForm");
// const inputForm = document.querySelector("#todoName");
// const buttonForm = document.querySelector("#todoAddButton");
// const todoList = document.querySelector("#toDoList");
// const firstCardBody = document.querySelectorAll(".card-body")[0];
// const secondCardBody = document.querySelectorAll(".card-body")[1];
// const clearButton = document.querySelector("#todoClearButton");
// const searchForm = document.querySelector("#todoListForm");
// const searchInput = document.querySelector("#todoSearch");


// todoForm.addEventListener("submit",addTodo);
// clearButton.addEventListener("click",todoDeleteAll);
// secondCardBody.addEventListener("click",todoDelete);
// searchForm.addEventListener("submit",todoSearch);

// let todos = [];

// /* <li class="list-group-item d-flex justify-content-between">Todo 3
// <a href="#" class="delete-item">
//     <i class="fa fa-remove"></i>
// </a>
//  </li> */

// function addTodo(e){
// e.preventDefault();
// const text = inputForm.value.trim();
//     if (!text){return}; 

// let todoAdd = document.createElement("li");
// todoAdd.className = "list-group-item d-flex justify-content-between";
// todoAdd.innerText=text;

// let todoLink = document.createElement("a");
// todoLink.href="#";
// todoLink.className="delete-item";

// let todoIcon = document.createElement("i");
// todoIcon.className="fa fa-remove";

// todoLink.appendChild(todoIcon);
// todoAdd.appendChild(todoLink);
// todoList.appendChild(todoAdd);

// todos.push(text);
// console.log("todo eklendi.");

// const todoId = Date.now();
// //sessionStorage.setItem(todoId,text);
// localStorage.setItem(todoId,JSON.stringify(text));
// console.log("Locale kaydedildi.");
// console.log(todos);

// };

// function todoDelete(e){
//     if(e.target.className=="fa fa-remove") {
//         const todo = e.target.parentElement.parentElement;
//         todo.remove();
//         console.log("seçili todo kaldırıldı");
//     };
// };

// function todoDeleteAll(){
//     todoList.remove();
//     console.log("tüm todolar temizlendi.");
//     localStorage.clear();
//     console.log("tüm todolar lokalden silindi.");
// }

// function todoSearch(e){
// e.preventDefault();
// const input = searchInput.value.trim();
//     todos.forEach(function(object){
//         if(object.toUpperCase().includes(input.toUpperCase())){
//             console.log("Todo bulundu: " + object);
//         }
//     });
// }

