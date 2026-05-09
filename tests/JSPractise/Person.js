class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
        console.log("Person constructor called");

    }

    getdetails(){
        return `My name is ${this.name} and I am ${this.age} years old.`;
    }

}
module.exports = Person;
//export default Person;