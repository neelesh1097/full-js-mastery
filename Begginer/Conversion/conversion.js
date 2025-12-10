let num = "33";

 console.log(typeof num);

 let numVal =Number(num);
 console.log(numVal);

 let ne ="33abc";

 console.log(typeof ne);
 let ne1 = Number(ne);
 console.log(typeof ne1);// output number but not correct 
 console.log(ne1); // NaN => not a number



 let ne2 = undefined;

 console.log(typeof ne2); // undefined
 let ne3 = Number(ne2); 
 console.log(typeof ne3);// output number but not correct 
 console.log(ne3); // NaN => not a number


 
 let iut = null;

 console.log(typeof iut); // object
 let iut1 = Number(iut); // 
 console.log(typeof iut1);// number
 console.log(iut1); // 0

console.log(typeof NaN); // important to note that type of NaN is number


//"33" => 33 convertes into number easily
//"33abc"  => will give NAN (on console.log Number("33abc"));

// true => 1;
// false => 0;


isLoggedIn = 1;
let boolLog = Boolean(isLoggedIn);
console.log(boolLog);