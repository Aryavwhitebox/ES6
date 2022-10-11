// let a=[4,9,16,25]
// let b=a.map(Math.sqrt)

// console.log(b); //2 3 4 5

const myNum=[10,20,30,40]

const newArr=myNum.map(myFunction)

function myFunction(num){
    return num*10
}

console.log(newArr);