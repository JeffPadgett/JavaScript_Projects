// Define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
    //Add task event
    form.addEventListener('submit', addTask);
    //Remove task event
    taskList.addEventListener('click', removeTask);
    // Clear task event
    clearBtn.addEventListener('click', clearTask);
    // Filter tasks event
    // filter.addEventListener('keyup', filterTask); //I can't get it to work, I reviewed it 6 times

}

// Add Task
function addTask(e){

    if(taskInput.value === '') {
        alert('Add a task');
    }

    //create a li element
    const li = document.createElement('li');
    //add a class to it so the UL will look good
    li.className = 'collection-item';
    // Create text node(node refers to element) and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //now we create a new link element that will store the X symbol that the user clicks on to remove the li that was just created.
    const link = document.createElement('a');
    // Add class to it now
    link.className = 'delete-item secondary-content';
    //Add icon html
    link.innerHTML = '<i class= "fa fa-remove"></i>';  // <--------------------------This is the actual X mark Icon
    //Append the link to the li
    li.appendChild(link);


    //append the li(list item) to the ul(unordered list)
    taskList.appendChild(li);


    // Store task in Local Storage
    storeTaskInLocalStorage();

    //clear input
    taskInput.value = '';


    e.preventDefault();
}
// Store task function
function storeTaskInLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('task') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('task'));
    }

    task.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Remove Task
function removeTask(e){
    if (e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();
        }

    }


}

//Clear Task
function clearTask() {

    // taskList.innerHTML = '';

    // Faster way
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }



clear
}



// //Filter Task
// function filterTasks(e) {
//     const text = e.target.value.toLowercase();

//     document.querySelectorAll('.collection-item').forEach(function(task){
//         const item = task.firstChild.textContent;

//         if(item.toLowerCase().indexOf(text) != -1){
//             task.style.display = 'block';
//         } else {
//             task.style.display = 'none';
//         }
//     });
// }
