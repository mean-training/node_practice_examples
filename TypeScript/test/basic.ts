export {}

let name = 'John Doe';
console.log(`Hello ${name}`);


let myName: string = 'Test string';
let list1 : Array<Number> = [1,2,3];
console.log(list1[1]);

// Tuple
let tuple1 : [Number,string] = [10,'hello'];
console.log(tuple1[0]);
console.log(tuple1[1].substring(1));

// Enum
enum color  {red = 4, blue, green}
let c : color = color.green;
console.log(c);

let colorName : string = color[5];
console.log(colorName);

let notSure : unknown = 110;
console.log(notSure);

function sum(num1 : number, num2 : number):number{
    return num1 + num2;
}

console.log(sum(2,5.5));


interface employee {
    firstName : string,
    lastName : string,
    age : number
}


function getEmployeeDetail(employeeDetail : employee){
    console.log(employeeDetail.firstName);
    console.log(employeeDetail.lastName);
    console.log(employeeDetail.age);
}

getEmployeeDetail({
    firstName : "John",
    lastName  : "Doe",
    age       : 35
});


class Employee{
    employeeName:string;

    constructor(name : string){
        this.employeeName = name;
    }

    hello(){
        console.log(`Hello ${this.employeeName} from parent class`)
    }
}

let emp1 = new Employee("John Doe");
console.log("initialize class");
console.log(emp1.hello());
console.log(emp1.employeeName);

class Manager extends Employee{
    constructor(name){
        super(name);
    }

    hello(){
        console.log(`Hello ${name} from child class`);
    }
}

let manger1 = new Manager('Alex');
console.log(manger1.hello());
console.log(manger1.employeeName);