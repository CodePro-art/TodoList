// ==============================================================================//
// ========================== MAIN JS FILE ======================================//
// ==============================================================================//

// Define Global variables:
const display = document.getElementById("display");
const paper = document.querySelector('.paper');

// function to adjust paper size to the list. min-hight = 550px
function adjustPaperHight(action){
  if(display.offsetHeight > 473 && action === "add") 
    paper.style.height = `${paper.offsetHeight + 25}px`;
  else if(display.offsetHeight > 448 && action === "remove")
    paper.style.height = `${paper.offsetHeight - 25}px`;
  else if(action === "reset")
    paper.style.height = `550px`;
}

// Create to do list
const todo = new Todo();


