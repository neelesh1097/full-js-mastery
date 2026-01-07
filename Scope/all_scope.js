//global scope


let globalVar = "I am global";

function test() {
  console.log(globalVar);
}

test();
console.log(globalVar);


//funtion scope

function demo() {
  var a = 10;
  console.log(a);
}

demo();
// console.log(a); ❌ error


//block scope

if (true) {
  let x = 5;
  const y = 10;
  var z = 15;
}

console.log(z); // 15
// console.log(x); ❌ error



// lexical scoping 

function outer() {
  let a = 10;

  function inner() {
    console.log(a);
  }

  inner();
}

outer();



//scope chain

let x = 10;

function outer() {
  let y = 20;

  function inner() {
    let z = 30;
    console.log(x, y, z);
  }

  inner();
}

outer();


