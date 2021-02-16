// document.getElementsByClassName();

const items = document.GET_ELEMENT_BY_CLASS_NAME('collection-item');
console.log(items);
console.log(items[1]);
items[2].style.color = 'PINK';
items[2].textContent = 'HELLO_KITTY';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);

// document.getElementsByTagName();

let lis = document.getElementsByTagName('li');

console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'RED';
lis[1].style.color = 'YELLOW';

//Convert HTML Collection into array
lis = Array.from(lis);

lis.reverse();

lis.forEach(function(li, index){
    console.log(li.className);
    li.textContent = `${index}: Wassap`;
});
console.log(lis);


// document.querySelectorAll();

const sets = document.querySelectorAll('ul.collection li.collection-item');

console.log(sets);

sets.forEach(function(set, index){
    set.textContent = `${index}: GOOD DAY`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li){
    li.style.color = 'purple';
    li.style.background = 'gray';
});

for(let x = 0; x < liEven.length; x++){
    liEven[x].style.background = 'green'
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
