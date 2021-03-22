const newTaskBtn = document.querySelector(".new-task-btn");
const clearTaskBtn = document.querySelector(".clear-task-btn");


function listeners() {
    newTaskBtn.addEventListener("click", addTaskToArray);
    clearTaskBtn.addEventListener("click", clearTasks);
}

function clearTasks() {
    const listContainer = document.querySelector(".task-list");
    for (let i = 0; 0 < listContainer.children.length; i++) {
        listContainer.removeChild(listContainer.lastChild);
    }
}

function markTaskAsDone(event) {
    event.target.classList.toggle("task-done");
}

function addTaskToArray() {
    const listContainer = document.querySelector(".task-list");
    const listItem = document.createElement("li");
    const newTask = document.querySelector(".new-task-input").value;

    if (newTask) {
        listContainer.appendChild(listItem);
        listItem.textContent = newTask;
    } else {
        alert("You must write something!");
    }

    document.querySelector(".new-task-input").value = "";

    listItem.addEventListener("click", markTaskAsDone)
}

listeners()
