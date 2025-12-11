// defining a function and passing arguemnts and parameters 

//function expression 
//function expression is a way of declaring a function in javascript

let my_function = function(username){
    console.log(`i am ${username}`)
}

my_function("neelesh");  //i am neelesh


//function declaration

function my_name(username) {
    console.log(`mai hu ${username}`);

}

my_name("kalnayak");  //mai hu kalnayak

// parameters and arguments 

//default parameter => work   parameter => day1 ,day2
function my_work(day1 = "work", day2){
    console.log(`i work as ${day1}`)
    console.log(`i work as ${day2}`)

}

my_work("daily wage labourer","sofware devloper");
//arguments => "daily wage labourer","sofware devloper"
//i work as daily wage labourer
//i work as sofware devloper



// returns a value

function add_numbers(num1 ,num2){
       return num1 + num2;
}

console.log(add_numbers(54,6))  //60


//does not return any value thus output also includes undefined
// no return statement
function add_numbers2(num1 ,num2){
    console.log( num1 + num2);
}

console.log(add_numbers2(54,6))  // 60 and undefined 



function my_values(...num) {
  console.log(num);
}

my_values(122,32,4,3,2);

function my_values1(val1, val2 ,...num) {
    console.log(val1, val2 ,num);  //122 32 [ 4, 3, 2 ]
  }
  
  my_values1(122,32,4,3,2);
  
  


let obj={
    name: "neelesh",
    class:"artificial intelligence",
}

function my_obj(object){
    console.group(`my name is ${object.name} and i am in class ${object.class}`)
}

my_obj(obj);



//directly paaing argumrnts to function  
function my_obj1(object){
    console.group(`my name is ${object.name} and i am in class ${object.class}`)
    //  my name is neelesh and i am in class artificial intelligence
}

my_obj1({
    name:"neelesh",
    class:"artificial intelligence"
});
