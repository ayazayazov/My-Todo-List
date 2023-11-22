const taskInput = document.getElementById("taskInput");
const listContainer = document.getElementById("list-container");
const addButton = document.getElementById("addButton");

function addTask(){
    if(taskInput.value === ''){
        alert("You didn't write anything");
    }else{
        let li = document.createElement('li');
        li.innerHTML = taskInput.value;
        listContainer.appendChild(li);
        const span = document.createElement('span');
        li.appendChild(span);
    }
    taskInput.value = '';
    saveData();
};

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showData(); 