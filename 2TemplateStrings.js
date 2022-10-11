const name='john'
const tempLit=`Hello ${name}`
//here we are embedding the name variable which is of type string
//into the template literal
console.log(tempLit);


//we can also use template literal in a function
function getFullName(firstName , lastName){
    return  `${firstName} ${lastName}`;
    //this function will return the firstname and lname to the function
}

const firstName='jade'
const lastName='smith'
const mGreetings=  `hello ${getFullName(firstName,lastName) }`;
console.log(mGreetings);


//rgbo(red,green,blue,orange)
let red=200
let green=155
let blue=100
let orange=250
//const rgbaExp= `rgba('red','green','blue','orange')`
//in the above line it is becoming complex as we are using incrementers
//and using quotes to seggregate the variables
//the other approach that we can follow is as shown below
//which stilll gives the same results
const rgbaExp=`rgba($(red),$(green),$(blue),$(orange))`
console.log(rgbaExp);