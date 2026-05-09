let message1:string = "Hello";
console.log(message1);
message1="Bye";
console.log(message1);
let age1:number = 23;
console.log(age1);
let isActive1:boolean = false;
let numbers1 : number[] = [1,2,3,5];


let data1: any = "this can be anything";
data1=34;


function add(a:number,b:number): number

 {
    return a+b;
}

console.log(add(3,4));


let user1: {name:string ,age:number,location:string} = {name:"BOB",age:34,location:"Delhi"}

user1.location = "Banglore";
console.log(user1);

