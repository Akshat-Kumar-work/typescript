//in js we will write the code as
// const x = 1;
const x: number = 1;

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


//giving delayedCall function argument as type is function
function delayedCall( func: ()=>void ){
    setTimeout(func,5000);
};

// delayedCall( function(){
//     console.log("hi hello from delayed function ")
// })

//arrow function types
const func = (name:string):string =>  {return name;}


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
console.log(ans);



