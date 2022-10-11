// const numArr=[1,2,3,4,5]
// const new1=numArr.filter(item=>{
//     return item%2==0
// })

// console.log(new1); //[ 2, 4 ]
// //the filter method will filter out and only gives required values
// //which we need in the condition



//let us consider object filter

let obj1=[{

    name:"harry",
    experience:12,
    age:21},{

        name:"harry",
        experience:3,
        age:21},
        {

            name:"harry",
            experience:6,
            age:30}
        ,{

            name:"harry",
            experience:15,
            age:21}
        ]
const hey=obj1.filter(item=>{
    return item.experience>=10
})
console.log(hey);