// javascript execution context 

// => global execution context 
// => functional execution context


// how javascript code is executed in js 
// 1. memory creation phase /creation phase 
// 2. execution phase


//code// 

let val1 =10;
let val2 =20;
function addNum(num1,num2){
    return num1+num2;
}

let result = addNum(val1,val2);
let result2 = addNum(10,20);


// global - execution  => this

//memory phase => val1 = undifined;
   // val2 =undefined 
   // addNum => definition 
   // result1 => undefined
   // result2 => undefined

   // execution phase 

   // val1 - 10;
   // val2 - 5;
   // addNum => new variable environment + execution thread is created for every function call
   // memory phase for addNum => val1 =undefined, val2 =undefined ,total=15
   // execution context for addNum=>num1=10 ,num2=5 , total =15 => total returned to execution context 
   //  result =>15;
   //  result =>15;



   // callstack