
//normal function
function details(name){
    return `${name}`
}

//arrow function
// const mdetails=(name)=>{
//     return `${name}`
// }


//if there is single return type we can even skip the flower brackets
//and return keyword
//in the arrow function

const mdetails=(name)=>
 ` ${name}`

console.log(details('aryav'));

console.log(mdetails('aryav'));