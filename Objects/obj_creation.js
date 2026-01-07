//object literal

const user = {
  name: "Neelesh",
  age: 22
};


// new object method

const user1 = new Object();
user1.name = "Neelesh";


// constructor function

function User(name, age) {
  this.name = name;
  this.age = age;
}

const u1 = new User("Neelesh", 22);


// object create method 

const proto = { greet() { console.log("Hi"); } };
const obj = Object.create(proto);










