const name="john manuel lark"
const nameArr=name.split(' ')
console.log(nameArr);

// let firstName=nameArr[0]
// let lastName=nameArr[1]

// let [firstName, lastName]=nameArr
// console.log(firstName);//john
// console.log(lastName); //manuel

//if you want to skip any array value we can leave space

// let [firstName, ,lastName]=nameArr
// console.log(firstName); //john
// console.log(lastName);  //lark



//OBJECTS
// const person={
//     firstName:'john',
//     middleName:'manuel',
//     lastName:'lark'
// }


// let{firstName, lastName}=person;
// console.log(firstName); //jhn
// console.log(lastName); //lark

//in arrays we used position to access the array values
//in object we can make use of key to access the value so 
//we dont have to leave a blank space

// let {middleName,firstName}=person
// console.log(middleName);
// console.log(firstName);



let firstName='john'
let middleName='manuel'
let lastName='lark'

let obj1={
    firstName,
    middleName,
    lastName
}

console.log(obj1); //{ firstName: 'john', middleName: 'manuel', lastName: 'lark' }

