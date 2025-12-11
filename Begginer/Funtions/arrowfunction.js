const user ={
    username:"neelesh",
    price:999,

    welcomeMessage: function(){
        console.log(`i am ${this.username} and my shirt price is ${this.price}`)
    }
}

user.welcomeMessage()
user.username ="karan";
user.price = 1500;
user.welcomeMessage()


// function and this keyword

function my_val() {
 let user_name ="neelesh"
 console.log(this.user_name);  //undefined
}
my_val()


//arrow function 
// arrow function does not support this keyword

let me = (num1 ,num2) => {
    return num1+num2;
}
console.log(me(2,3));

let you =(num1,num2) => (num1+num2);  // no curly braces and return statment when we use parenthesis

console.log(you(2,4));

const addtwo= (num1,num2) =>({username:'neelesh'})
console.log(addtwo(2,3))