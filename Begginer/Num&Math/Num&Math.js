const val= 400;
console.log(val);


const balance =new Number(100);
console.log(balance); 


console.log(balance.toString()); //100

console.log(balance.toString().length);  //3

console.log(balance.toFixed(2));  //100.00 

const mn =123.553443   

console.log(mn.toPrecision(3));  //124



const hundred = 1000000000;
console.log(hundred.toLocaleString('en-IN'));


// ++++++++++++++++++++++ maths ++++++++++++++++


console.log(Math.abs(-4)); //4
console.log(Math.round(4.6)); //5
console.log(Math.floor(4.9)); //4
console.log(Math.ceil(4.2));//5


// math square root => math pi  => math log  => math sin => math cos

// math.random for generating random numbers   => math.random();

const max = 20;
const min =10;



console.log(Math.floor(Math.random() * (max - min +1)) + min) // random from 11 - 20