const taskInput = document.getElementById("taskInput");
const listContainer = document.getElementById("list-container");
const addButton = document.getElementById("addBtn");

function addTask(){
    if(taskInput.value === ''){
        alert("You didn't write anything");
    }else{
        let li = document.createElement('li');
        li.innerHTML = taskInput.value;
        listContainer.appendChild(li);
        const editBtn = document.createElement('button');
        editBtn.classList.add('editBtn');
        editBtn.innerHTML = 'Edit';
        li.appendChild(editBtn);
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
    }else if(e.target.classList.contains('editBtn')){
        taskInput.focus();
        addButton.textContent = 'Update';
        taskInput.value = e.target.parentNode.childNodes[0].data;
        addButton.addEventListener("click", function(){
            e.target.tagName = "SPAN";
            e.target.parentElement.remove();
            e.target.textContent = taskInput.value;
            addButton.textContent = 'Add';
            saveData();
        })
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showData(); 