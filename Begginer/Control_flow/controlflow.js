// control flow includes is else else if statement which can be used to check condition and control the decision 
let x =10

if (x>0){
    console.log("positive number"); // if satement is evaluated and prints statement if condition 
}

else if(x== 30){
    console.log("x is equal to 30"); // allows to evaluate multile atatement
}

else{
    console.log("negative number")  // if all the statement are false, else is triggred
}

// ternary operator
let result = (10 > 0) ? true : false;

console.log(result);  //true


// null coalsecing operator
const foo = null ?? 'default string';
console.log(foo);
// Expected output: "default string"


// switch satement 
const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}



// loops in javascript 

// for loop 
let n= 5;
for(let i=0; i<n; i++){
console.log(i);
}

 // while loop example

let y =9;
 while(y>0){
  console.log(y);
    y--;
 }

// do while loop
let z=11;

do {
    console.log(`value is ${z}`)
} while (z<10);

// code is executed one time even if condition is false