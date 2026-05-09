const Person  = require( "./Person.js"); 

class Student extends Person{
    constructor(name,age,grade){
        super(name, age);
        this.grade = grade;
        console.log("Student constructor called");
    }

    getStudentDetails(){
        const personDetails = super.getdetails();
        return `${personDetails} I am in grade ${this.grade}.`;
    }


}

module.exports = Student;