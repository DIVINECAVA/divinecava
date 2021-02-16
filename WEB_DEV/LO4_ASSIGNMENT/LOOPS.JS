//for loop
//i=0 *need to assign a variable cannot use const
//i<10 *as long as the 2nd statement is true i++ is trigger
//i++ increment

for(let i = 0; i < 10; i++){
    if(i === 5){
        console.log('5 is High Five.')
        continue;
    }
    if(i === 8){
        console.log('Opppsss');
        break;
    }
    console.log(`Numero ${i}`)
}

//While loop
//WARNING dont save check carefully

let i = 0;

while(i<10) {
    console.log(`Numero ${i}`)
    i++;
}

//Do while

do{
    console.log(`Numero ${i}`)
    i++;
}

while (i < 10);

//Loop through array

const food = ['Spaghetti', 'Sopas', 'Carbonara', 'Palabok'];

for(let i=0; i < food.length; i++){
    console.log(food[i]);
}

//For each

food.forEach(function(food, index, array){
    console.log(`${index} : ${food}`);
    console.log(`${array}`);
});

//Map

const users = [{id: 1, name: 'Divine'}, {id: 2, name: 'Aldrich'}, {id: 3, name: 'Nivin'}, {id:
4, name: 'Sabriyah'}];

const ids = users.map(function(user){
    return user.name
});

console.log(ids);

//For in loop

const peeps = {
    firstName: 'Divine',
    lastName: 'Cava',
    age: 29
};

for(let x in peeps){
    console.log(`${x}: ${peeps[x]}`);
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
