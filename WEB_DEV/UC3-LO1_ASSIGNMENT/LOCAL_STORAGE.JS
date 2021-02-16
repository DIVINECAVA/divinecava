//Set local storage item
// localStorage.setItem('name', 'DIVINE');
// localStorage.setItem('age', 29);


//Set session storage item
// sessionStorage.setItem('name', 'ALDRICH');

//Remove from storage
// localStorage.removeItem('age');
// localStorage.removeItem('name');

//Get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// console.log(name, age);

//Clear local storage
// localStorage.clear();

document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();

    const task = document.querySelector('#task').value;
    
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(LOCAL_STORAGE.getItem('tasks'));
    }
    tasks.push(task);

    LOCAL_STORAGE.setItem('tasks', JSON.stringify(tasks));

    alert('Task Saved');

    tasks.forEach(function(task){
        console.log(task);
    });
});
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
