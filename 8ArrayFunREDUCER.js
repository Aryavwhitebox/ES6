// const myarr=[1,2,3,4,5,6]
// let sum=0;
// for(let i of myarr){
// sum+=i
// }
// console.log(sum); //21 
// //the same operation we can do using the reducer method


const myNum=[1,2,3,4,5]

const sum=myNum.reduce((accumulator, currentValue)=>{
    return accumulator+currentValue;
}
,0);

console.log(sum)
