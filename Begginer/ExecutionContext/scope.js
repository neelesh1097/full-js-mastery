let a =200;   // global environment
let b =300;   // 
if(true){
    let a = 1;
const b= 2;
var c =3;  //block scope
}

console.log(a); //  200 donsn't work because let in block scoped 
console.log(b); // 300 const is block scoped
console.log(c); //var is not block scope hence it is accesible everywhere => global scope


// note 
//var is not blocked scoped hence it is not used in new javascript code instead of var const and let are used 


function username(){
    name ="neelesh";
    function call(){
        roll_num =221000050026;
        console.log(name + roll_num)  //neelesh221000050026
    }

    // console.log(roll_num);  => not accesible outside call block

    call()
    console.log(name); //username is accesible neelesh
}
username();


console.log(add1(5));  //6  => function declaration

function add1(num){
  return num + 1;
}

// Cannot access 'addtwo' before initialization => function expression

// console.log(addtwo(5)); 

let addtwo =function(num){
    return num + 2;
}

// hoisting  => accessing variable before declaring it is called hoisting
