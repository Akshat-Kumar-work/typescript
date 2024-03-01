//PICK
// it allows user to create a new type by selecting the set of properties(keys) from existing type
//in simple words we can create a subset of type by picking up selective properties

interface AdvanceUser{
    id:string;
    name:string;
    age:number;
    email:string;
    password:string;
}

//created new type we can say that subset of AdvanceUser, by picking some selective properties from advanceUser 
type updateProps = Pick<AdvanceUser , 'name' | 'age' | 'email'>; 


function updateUser(updatedProps:updateProps){
    //hit the db call to update the properties
}



//PARTIAL
