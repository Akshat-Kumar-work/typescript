//PICK
//it allows user to create a new type by selecting the set of properties(keys) from existing type
//in simple words we can create a subset of type by picking up selective properties
//what if we want to update user and if we pass the user as type we have to give all the properties
//here we will create subset of advanceUser which we will use only for updation type

interface AdvanceUser{
    id:string;
    name:string;
    age:number;
    email:string;
    password:string;
}

//created new type we can say that subset of AdvanceUser, by picking some selective properties from advanceUser 
type updateProps = Pick<AdvanceUser , 'name' | 'age' | 'email'>; 


function updateUser(updatedProps:updatePropsOptional){
    //hit the db call to update the properties
}


//PARTIAL
//what if we only want to update the name not age or email or vice versa
//we can use partial to make all the properties of type to optional
type updatePropsOptional = Partial<updateProps>;



//READ ONLY
//it will not make you change the properties of any 
//it is used when we have a config variables like endpoints or apikey etc we can use it 
type readOnlyUser = {
    readonly name:string;
    readonly age: number;
}

const person : readOnlyUser ={
    name:"akshat",
    age:34
}

//or 

interface Config {
     endpoint: string;
     apiKey: string;
  }
  
  const config: Readonly<Config> = {
    endpoint: 'https://api.example.com',
    apiKey: 'abcdef123456',
  };
  




