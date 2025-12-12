const addForm = document.querySelector("#todoAddForm");
const inputForm= document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const clearButton= document.querySelector("#todoClearButton");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];

let todos = [];

runEvents();

function runEvents(){
    addForm.addEventListener("submit",addTodo);
};

function addTodo(e){
    
    //içeriği alma
    const inputText = inputForm.value.trim();
    if (!inputText) {
        addInfo("warning","lütfen geçerli bir görev yazınız.");
    }else{
        //arayüze ekleme
        addTodoUI(inputText);
        //strage a ekleme
        addTodoStorage(inputText);
        addInfo("success","todo listeye eklendi.");
    }

    e.preventDefault();
    console.log("addTodo Çağrıldı");
    
};

function addTodoUI(todoText){
    let li = document.createElement("li");
    li.className="list-group-item d-flex justify-content-between";
    li.textContent=todoText;

    let a = document.createElement("a");
    a.href="#";
    a.className="delete-item";

    let i = document.createElement("i");
    i.className="fa fa-remove";

    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);

    console.log("todo uı çağrıldı");

    inputForm.value="";
};

function addTodoStorage(todoText){
    todosControl();
    todos.push(todoText);
    localStorage.setItem("todos",JSON.stringify(todos));
};

function todosControl(){
    if(localStorage.getItem("todos")===null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}

function addInfo (type,message){
    // <div class="alert alert-warning" role="alert">
    //  A simple warning alert—check it out!
    // </div>
    const div = document.createElement("div");
    div.className="alert alert-" + type;
    div.textContent=message;

    firstCardBody.appendChild(div);
    setTimeout(function(){
        div.remove();
    },2500);
}