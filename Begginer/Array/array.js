// array is a data structure that is used to store data or collection of data 
// data can be of any datatypes
// array are linear data structures 
// important topic 


// declaring a array first

let arry = [1,2,3,4,5,6,7,8,9,10];

let arry3 =["neel", "nitin" ,"mukesh"];

let newarray =  new Array(1,2,3,4,5);

console.log(newarray[1])  // 2

//  array methods 
newarray.push(6); // pushes a element at the end 

newarray.push(7);  //pushes a element at the end 

newarray.pop(); // removes one element from end which is 7

newarray.unshift(9) // adds 9 to the start of the array 

newarray.unshift(0);  //adds element at the start of the array 

newarray.shift()  // removes the element 0 from start of the element 

console.log(newarray.includes(9))  // false

console.log(newarray.indexOf(9));  // 0

console.log(newarray);


// in slice method copy of an array is returned unlike splice whrere changes are made directly to main array 

let narray = [1,20,3,42,6,74,7];


console.log(narray.slice(1,5));
console.log(narray); 



// in splice changes are made in main array and are reflected in main array 

let marray =[21,43,5,6,76,56,8,44,78,3,45,77,0]  //[ 43, 5, 6, 76, 56, 8 ]
console.log(marray.splice(1,6));

console.log(marray); //  [  21, 44, 78, 3, 45, 77,  0 ]



let marvel_heroes = ['ironman' ,'captian america' , 'thor' , 'loki' ,'hulk'];

let dc_heroes = ['batman', 'superman' ,'flash', 'aquaman','cyborg']

const allheroes = marvel_heroes.concat(dc_heroes);
console.log(allheroes);  //['ironman','captian america','thor','loki', 'hulk','batman','superman', 'flash', 'aquaman',  'cyborg' ] returns a new array



//spread operator


let new_heroes =[...marvel_heroes , ...dc_heroes]

console.log(new_heroes);//['ironman','captian america','thor','loki', 'hulk','batman','superman', 'flash', 'aquaman',  'cyborg' ] returns a new array


// spread operator copies the element in array 


//flat 
const another_array =[2,1,[3,4,5,1] ,[6,7,8,[9,6,5]]]

const real_another_array =another_array.flat(Infinity) // //[ 2, 1, 3, 4, 5, 1, 6, 7, 8, 9, 6, 5]

console.log(real_another_array);


console.log(Array.from("neelesh"));

    
    