// singleton objects - objects that are declared with constructor function is called singeleton objects 


//objects declaration and accessing objects 

const my_sym = Symbol("key1");

let my_name ={
    name:"Neelesh",
    age: 21,
    gender: "M",
    height :"170 cm",
    email: "neelesh1121@gmail.com",
    Username :"Neelesh-10",
    "occupation":"student/unemployed",
    [my_sym]: "mykey1",
    unique_id: 221000050026
}

// acessing objects two methods => 1. object.property / object["property"]/[property]
// my_name.email 
// my_name[email]

//note => some element cannot be accessed by object. notation some property like occupation in this example can only be accessed through object[property] => eg my_name["occupation"]


console.log(my_name.email);  //neelesh1121@gmail.com

console.log(my_name["email"]);  //neelesh1121@gmail.com


console.log(my_name.occupation);  //student/unemployed

console.log(my_name["occupation"]);  //student/unemployed



console.log(my_name.height); // 170cm

console.log(my_name[my_sym]) // 'mykey1'




// function declaration objects 

my_name.greeting = function() {
    console.log("khalnayak hu mai");
}


my_name.greeting2 = function() {
    console.log(`khalnayak hu mai , ${this.name}`);
}




console.log(my_name.greeting); // [Function (anonymous)]

console.log(my_name.greeting());// khalnayak hu mai
  // undefined

  console.log(my_name.greeting2());  // khalnayak hu mai , Neelesh


  //changing value in objects 

  my_name.email ="neelesh001@gmail.com";
  
  console.log(my_name); // email: 'neelesh001@gmail.com',

   Object.freeze(my_name);  //  freeze the objects no changes will be reflecte after yhis

  my_name.age = "20";  //change not reflected in the object

  console.log(my_name)



// differnt ways to declare a objects 

const user = new Object();


user.name ="Neelesh"
user.id ="neel@1234"
user.class ="artificial intelligence"
user.age = 32 
user.login = false


  // console.log(user);  => returns object  
  // name: 'Neelesh',
  // id: 'neel@1234',
  //   class: 'artificial intelligence',
  // age: 32,
  // login: false

  const regularUser ={
    email : "neelesh0001@gmail.com",
    Username :{
        fullname:{
            firstName :"Neelesh",
            middleName :"kumar" ,
            lastName :"yadav"
        }
    }

  }

  console.log(regularUser.Username.fullname);  //{ firstName: 'Neelesh', middleName: 'kumar', lastName: 'yadav' }


  //merging two objects 

 // methods to merge two objects => objects.assign , spread operator


 let obj1 = {
    1:"a",
    2:"b"
 }

 let obj2 = {
    3:"a",
    4:"b"
 }

//  let obj3 =Object.assign({} ,obj1 ,obj2);
//  console.log(obj3);

let obj3 ={...obj1, ...obj2};
console.log(obj3);
 // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }



 const User = [
    {
        id:"neelesh23@",
        email: "neelesh23@hotmail.com"
    },
    {
        id:"neelesh13@",
        email: "neelesh13@hotmail.com"
    },
    {
        id:"neelesh12@",
        email: "neelesh12@hotmail.com"
    },
    {
        id:"neelesh4@",
        email: "neelesh1234@hotmail.com"
    }

 ]


  console.log(User[1].email);
  console.log(User[3].email);


  console.log(Object.keys(my_name));
  console.log(Object.values(my_name));
  console.log(Object.entries(my_name));


  //object destructuring 

  let course ={
    name :"javascript_revision",
    course_instructor: "neelesh",
    course_id: 1231
  }

  console.log(course.course_id)

  // or 

  const {course_instructor : instructor} = course

  console.log(instructor);

