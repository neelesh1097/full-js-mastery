let mydate = new Date();

console.log(mydate);  // 2024-04-30T17:19:47.411Z
console.log(mydate.toString());  // Tue Apr 30 2024 22:49:47 GMT+0530 (India Standard Time)
console.log(mydate.toISOString());   // 2024-04-30T17:19:47.411Z
console.log(mydate.toJSON());     //2024-04-30T17:19:47.411Z
console.log(mydate.toLocaleString()); // 30/4/2024, 10:49:47 pm
console.log(mydate.toDateString());   //Tue Apr 30 2024
console.log(typeof mydate);    //object



//creating a random date 

let mycreateddate = new Date("2023-02-23")
console.log(mycreateddate.toString());    //Mon Jan 23 2023 05:30:00 GMT+0530 (India Standard Time)
console.log(mycreateddate.getTime());   // 1677110400000


let mycreateddate2 = new Date(2023, 0, 23);  // Thu Feb 23 2023 05:30:00 GMT+0530 (India Standard Time)
console.log(mycreateddate2);


myTimeSatmp = Date.now();
console.log(myTimeSatmp);  //1714498323596


const newDate = new Date()

console.log(newDate.toString())  //Wed May 01 2024 22:55:29 GMT+0530 (India Standard Time)

console.log(newDate.getDay()); //3

console.log(newDate.getDate());// 1

console.log(newDate.getMonth()); // 4