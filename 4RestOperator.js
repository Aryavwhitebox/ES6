const rest1=(...args)=> {return args}
//in rest operator you can pass any no of values as arguments in the function
//and it will return those values as an array 
console.log(rest1(1,2,3,4,5,6))


const rest2=(num1,num2,...args)=>{
    console.log(num1);
let sum=0
for(let i=0;i<args.length;i++){
    sum += args[i]
}
console.log(sum);
}

rest2(1,3,4,5,6,23,12)