// methods to concat strings 

//old methods 

let name = "Neelesh ";
let middle = "kumar ";

let last ="yadav";
 
console.log(name + middle + last);

//object literals new method in es6

//new methods 

//object literals 


console.log(`my first name is ${name}, middle name is ${middle} and last name is ${last}`);


const newName = new String('neelesh_hc')

console.log(newName[0]);  //n
console.log(newName.length); //10
console.log(newName.charAt(2)); //e
console.log(newName.indexOf('e')); //1


const newString = newName.substring(0,4); 
console.log(newString); //neel


const anotherString = newName.slice(-6, -1); 
console.log(anotherString); //esh_h


let name1 = "     neelesh   ";  
console.log(name1.trim());  //neelesh



let name2= "neelesh-kumar-yadav";
console.log(name2.split('-'));    //  [ 'neelesh', 'kumar', 'yadav' ]



const url = "https://neelesh.com/neelesh%20kumar";


console.log(url.replace('%20', '-'));// https://neelesh.com/neelesh-kumar

console.log(url.includes('neelesh')); //true


// there is only slice method for string and not splice method in string

//there are splice and slice method for array in javscript 


