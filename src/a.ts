//in js we will write the code as
// const x = 1;
const x: number = 1;
let y :string;
y="ok";

function helloWorld (mess:string ){
    console.log(mess);
}

function sum(a:number , b:number):number{
    return a+b;
}

//here return type is boolean
function isLegal (age:number):boolean{
        if(age>18){
            return true;
        }
        else{
           return false
        }
}


//giving delayedCall function argument, as type is function
function delayedCall( func: ()=>void ){
    setTimeout(func,5000);
};

// delayedCall( function(){
//     console.log("hi hello from delayed function ")
// })

//arrow function types
const func = (name:string):string =>  {return name;}


//Interface
//object type declaration, we use interface keyword to define the  object type
//here we had created custom user type
interface User{
    firstName: string;
    lastName : string;
    email?: string;
    age:number;

}


function isLegal2 (User:User):boolean{
    if(User.age>18){
        return true;
    }
    else{
       return false
    }
}

const user = {
    firstName:'akshat',
    lastName:'kumar',
    age:12
}

const ans = isLegal2(user);


//by using the interface , we can implement it as a class
interface Person{
    name:string;
    age:number;
    greet(message:string):void;
}

class Employee implements Person{
    name:string;
    age:number;

    constructor(n:string,a:number){
        this.name = n;
        this.age = a;
    }

    greet(message: string): void {
        console.log(message,"from",this.name)
    }
}

//creating new object of Employee class with some properties
const object = new Employee("akshat",21);


//type
//it is used to create custom types
//it is similar to interface as it let us aggregate data together
type UserName =String;
let userName :UserName;

//defining Human object type using type keyword
type Human = {
    firstName:string;
    lastName:string;
    age:number;
}

//union-> in interface we cant use union but in type we can
function PrintId (id:number| string) : number | string{
   return id;
}

//console.log(PrintId("akshat"));

//intersection in type and interface
//if want 1 type having properties of 2 diff type or interface  so  we use & for intersection them
type Employee2 = {
    name: string;
    startDate: Date;
  };
  
interface Manager {
    name: string;
    department: string;
  };
  
type TeamLead = Employee2 & Manager;
  
  const teamLead: TeamLead = {
    name: "harkirat",
    startDate: new Date(),
    department: "Software developer"
  };


//Arrays 
let arrStr:string[] = ["ok","yes","fine"];
let arrNumb:number[] = [1,2,3,4];

interface User2   {
	firstName?: string;
	lastName?: string;
	age: number;
}

function filterUsersAbove18 ( users: User2[]){
    return users.filter(x=>x.age>18);
}

const userr = [ {firstName:"23 age wala",age:23},{firstName:"4 age wala" , age:4},
                {firstName:"18 age wala" ,age:18},{firstName:"1 age wala" ,age:1}];

// console.log(filterUsersAbove18(userr));



//ENUMS
//It is used to write named constant
//the values stored by default as number only like up is 0 , down is 1
//to change value make up = 1 and other will continue that format
//or if want to make it string up= "up"
//we can use when we know there any limited set of input's and values are constant values not just any number or string 

enum Directions{
    up = "Up",down = "down",left = "left",right = "right"
}

enum Directions2{
    up , down , left , right
}

enum Directions3 {
    up=1 , down ,left ,right
}

function doSomething(keyPressed:Directions){
    console.log(keyPressed);
}

console.log(Directions.down);





  




