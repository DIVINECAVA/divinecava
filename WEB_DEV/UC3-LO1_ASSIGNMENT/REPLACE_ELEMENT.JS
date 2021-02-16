//Replace Element

//Create element
const newHeading = document.CREATE_ELEMENT('h2');


//Add id
newHeading.id = 'task-title';


//New text node
newHeading.appendChild(document.createTextNode('Jobs'));


// Get the old heading
const oldHeading = document.querySelector('#task-title');


//Parent
const cardAction = document.querySelector('.card-action');


// Replace
cardAction.replaceChild(newHeading, oldHeading);


// Remove list item
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');


//Remove list item
lis[0].remove();


//Remove child element
list.removeChild(lis[1]);


//Classes and Attribute
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let value;


//Classes
value = link.className;
value = link.classList;
value = link.classList[1];
link.classList.add('testing');
link.classList.remove('testing');


//Attribute
value = link.getAttribute('href');
value = link.setAttribute('href', 'https://github.com/DIVINECAVA/divinecava/WEB_DEV');
link.setAttribute('title', 'Github');
value = link.hasAttribute('title');
value = link;

console.log(value);
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
48