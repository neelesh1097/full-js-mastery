const user = {
  name: "Neelesh",
  age: 22,
  city: "Delhi"
};

const { name, age } = user;


console.log(name, age);

//rename
const { name: userName } = user;

console.log(name);

//default values
const { country = "India" } = user;
console.log(country);


//“Destructuring extracts object properties into variables.”


const user2 = { name: "Neelesh", age: 22 };

console.log(Object.keys(user2)); 
// ["name", "age"]

Object.values(user2);
// ["Neelesh", 22]


Object.entries(user2);
// [["name","Neelesh"], ["age",22]]


Object.entries(user2).forEach(([key, value]) => {
  console.log(key, value);
});




