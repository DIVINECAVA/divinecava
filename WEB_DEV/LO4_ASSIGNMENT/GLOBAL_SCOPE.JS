//Global Scope
var a = 1; //can be changed 
let b = 2; //can be changed
const c = 3; //cannot be changed

function test(){
    var a = 4;
    let b = 5;
    const c = 6;
    console.log(`Function Scope ${a}, ${b}, ${c}`)
}

test();


if(true){
    //Inside block scope
    var a = 4;
    let b = 5;
    const c = 6;
    console.log(`If Scope ${a}, ${b}, ${c}`)
}

for(var a = 0; a < 10; a++){
    console.log(`Loop ${a}`)
}

console.log(`Global Scope ${a}, ${b}, ${c}`)
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
