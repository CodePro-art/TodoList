// ==============================================================================//
// ========================== EVENT LISTENERS ===================================//
// ==============================================================================//

// Selectors variables:
const input = document.getElementById("inputText");
const button = document.getElementById("addButton");
const deleteAll = document.getElementById("delete-icon");
const task = document.querySelectorAll('.task');

// BUTTON: Create task button event
button.addEventListener("click", () => {
  if (input.value.length > 0)
    todo.newTask();
});

// INPUT: Create task enter event
input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13 && input.value.length > 0) 
    todo.newTask();
});

// DELETE-ICON: erase all tasks from list
deleteAll.addEventListener("click", () => {
  if (confirm(`Are you sure you want to delete all tasks?`)) {
    todo.eraseList();
    console.log(todo);
    display.innerHTML = "";

    adjustPaperHight("reset");
  } 
});



