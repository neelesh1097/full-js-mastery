class user {

    constructor(username ,lastname ,rollno ,password){
        this.username =username 
        this.lastname= lastname
        this.rollno = rollno
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}


const neel =new user ("neelesh" ,"yadav" ,221000050026 ,"charmanderXcharizard");

console.log(neel);

console.log(neel.encryptPassword());




function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password

}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const user =new User("neelesh" , "neel@123" , "carmanderXcharizard")