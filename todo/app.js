// create references to page elements
var addButton = document.getElementById("add");
var taskList = document.getElementById("taskList");
var taskInput = document.getElementById("task");
var clearButton = document.getElementById("clear");

// add new item to task list
addButton.addEventListener("click", addItems);
function addItems()
{
    var task = taskInput.value;
    // Don't add an empty string
    if(task.trim())
    {
        // add new task list item
        var newItem = document.createElement("li");
        var taskText = document.createTextNode(task);
        newItem.appendChild(taskText);
        // clear text input box
        taskInput.value = "";
        // adding remove button
        var removeButton = document.createElement("button");
        removeButton.innerHTML = "Done";
        removeButton.className = "remove";
        removeButton.addEventListener("click", removeTask);
        newItem.appendChild(removeButton);
        taskList.appendChild(newItem); 
    }
    else{
        alert("Task cannot be empty");
    }
}

// Clear entire list
clearButton.addEventListener("click",clearItems);
function clearItems()
{
    taskList.innerHTML = "";
}

// Remove a task from list
function removeTask(e)
{
    // get the parent list item to remove
    var taskItem = e.target.parentElement;
    taskList.removeChild(taskItem);
}