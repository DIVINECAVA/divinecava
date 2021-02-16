//Define UI variable
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


//Load all event listeners
loadEventListeners();


//Load all event listeners
function loadEventListeners(){
    //DOM Load event
    document.addEventListener('DOMContentLoaded', getTasks);
    //Add task event
    form.addEventListener('submit', addTask);
    //Remove task
    taskList.addEventListener('click', removeTask);
    //Clear task event
    clearBtn.addEventListener('click', clearTasks);
    //Filter tasks event
    filter.addEventListener('keyup', filterTasks);
};


//Get Tasks from LS
function getTasks(){
    let tasks;
    if(LOCAL_STORAGE.getItem('tasks') === null){
    tasks = [];
    } else{
    tasks = JSON.parse(LOCAL_STORAGE.getItem('tasks'));
}
    tasks.forEach(function(task){
    //Create li element
    const li = document.CREATE_ELEMENT('li');
    //Add class
    li.className = 'collection-item';
    //Create text node and append to li
    li.appendChild(document.createTextNode(task));
    //Create new link element
    const link = document.CREATE_ELEMENT('a');
    //Add class
    link.className = 'delete-item secondary-content';
    //Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //Append the link to li
    li.appendChild(link);
    //Append li to ul
    taskList.appendChild(li);

}); console.log(tasks);
};


//Add task
function addTask(e){
    if(taskInput.value === ''){
    alert('Add a task');
} else{
    //Create li element
    const li = document.CREATE_ELEMENT('li');
    //Add class
    li.className = 'collection-item';
    //Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //Create new link element
    const link = document.CREATE_ELEMENT('a');
    //Add class
    link.className = 'delete-item secondary-content';
    //Add icon
    link.innerHTML = '<i class="fa fa-remove"></i>';

    //Append the link to li
    li.appendChild(link);

    //Append li to ul
    taskList.appendChild(li);
    //Store in LS
    storeTaskInLocalStorage(taskInput.value);
    console.log(li);
    taskInput.value = '';
    }
    e.preventDefault();
};


//Store task
function storeTaskInLocalStorage(task){
    let tasks;
    if(LOCAL_STORAGE.getItem('tasks') === null){
    tasks = [];
    } else {
    tasks = JSON.parse(LOCAL_STORAGE.getItem('tasks'));
    }
    tasks.push(task);

    LOCAL_STORAGE.setItem('tasks', JSON.stringify(tasks));
};


//Remove task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are You Sure?')) {
        e.target.parentElement.parentElement.remove();
        //Remove from Local storage
        removeTaskFromLOCAL_STORAGE(e.target.parentElement.parentElement);
        }
    }
};


//Remove Task From LS
function removeTaskFromLOCAL_STORAGE(taskItem){
    let tasks;
    if(LOCAL_STORAGE.getItem('tasks') === null){
    tasks = [];
    } else{
        tasks = JSON.parse(LOCAL_STORAGE.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
    if(taskItem.textContent === task){
        tasks.splice(index, 1);
    }
    });
    LOCAL_STORAGE.setItem('tasks', JSON.stringify(tasks));
};

//Clear Tasks
function clearTasks(){
    if(confirm('Are You Sure?')){
        taskList.innerHTML = '';
        //Clear from LS
        clearTasksFromLOCAL_STORAGE();
    }
};


//Clear Tasks from local storage
function clearTasksFromLOCAL_STORAGE(){
    LOCAL_STORAGE.clear();
};

//Filter Tasks
function filterTasks(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task) {
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
        task.style.display = 'block'; 
    } else {
        task.style.display = 'none';
    }
    });
};
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
