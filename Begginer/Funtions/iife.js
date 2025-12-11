// IIFE - Immediately invoked function expression

//why iffe is used 
// sometimes the global environment gets polluted to avoid this pollution we use iife

(function neel(age) {
    console.log(`i am neelesh ,i am ${age} years old`)
 })(21);  //i am neelesh ,i am 21 years old
 
 
 // using arrow functions
 ( (age) => {
  console.log(`my name is neelesh, my age is ${age} `)
 }
 )(21);  //my name is neelesh, my age is 21