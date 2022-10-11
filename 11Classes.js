class  Person{
    //here we are creating classed based objects
    //in place of sending values to functions
    //we are sending it to the constructor
    constructor(name, birthYear){
this.name=name
this.birthYear=birthYear
    }

    //the function method should be outside the constructor
    //but inside the class
    getDetails=()=>{
        return `Name: ${this.name} and
        Age:${2019-this.birthYear}` 
    }
}
var john=new Person('john',1990)
console.log(john.getDetails()); //Name: john and Age:29


