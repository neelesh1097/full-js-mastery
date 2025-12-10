// datatype are of two types 
// #primitives and #non-primitives 

//primitives 
//=> number boolean bigint null undefined symbol string

const score =102
const scoreval =102.3

const loggedIn =false;
const tempt = null;
let userEmail;


const id = Symbol('123');
const anotherId = Symbol('123');

console.log(anotherId ==  id);

const bigNumber =12132432523421122244n;


//refrence (Non -primitives)

// array functions objects 



const arr_Heroes = ['batman', 'superman', 'aquaman', 'cyborg']; 


let my_heroes = {
    name_1: 'batman',
    name_2: 'superman',
    name_3: 'aquaman',
    name_4: 'cyborg',
    name_5: 'flash',
    name_6: 'wonderwoman'
};
//+++++++++++++++++++++++++++++++++++++++++++++++++++

//call stack(primitive data-type)   => call by value

//call heap (non-primitives)   => call by refrence

let my_name ="neelesh"

let new_name = my_name
new_name  ="neel_1097"

console.log(new_name); //neel_1097
console.log(my_name); //neelesh
 

// actual copy is passed in primitive datatype but in non prmitive refrence(address) is passed 
let user ={
    id:"user2345",
    email:"user@gmail.com",
    upi_id:"user@rapl"
};

let user2 = user; // Both user2 and user point to the same object

// Now modifying user2 will affect user as well, as they reference the same object
user2.id = "neel2345";
user2.email = "neel10@gmail.com";
user2.upi_id = "neel@rapl";

console.log(user); // Output will be the modified user object
console.log(user2); // Output will be the modified user2 object


// All variables (primitive or reference variables) are in stack.
// Primitive values are stored directly in stack.
// Non-primitive variables store references in stack, but the actual objects live in heap.