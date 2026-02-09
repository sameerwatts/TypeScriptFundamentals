export {};
let message = 'welcome back'
console.log(message)

let isBeginner: boolean = true;
let total: number;
let name: string = "Sameer";
let sentance: string = `My name is ${name}
and i'm new in typescript`;

console.log(sentance);

let n: null = null;
let u: undefined = undefined;

let list1: number[] = [1,2,3];

let person1: [string, number] = ['Rachit', 33];

enum Color {Red = 'red', Green = 'green', Blue = 'blue'};
enum Switch {Off, On};

let r: Color = Color.Red;
let g: Color = Color.Green;
let b: Color = Color.Blue;

let on: Switch = Switch.On; 
let off: Switch = Switch.Off;

console.log(r);
console.log(g);
console.log(b);

console.log(on);
console.log(off);

let random: any = 10;
random = true

// Need more info
// let unknownVariable: unknown = 'string';
// (unknownVariable as string).toUpperCase();

// type inference
let a;
a = 10;
a = 'string'
a = true;
let p = 30;

// union type
let multitype: string | boolean;
multitype = 'isDataAvailable';
multitype = true

function add(num1: number, num2?: number): number {
    if(num2) {
        return num1 + num2;
    }
    return num1 + 3;
}

function add1(num1: number, num2: number = 4): number {
        return num1 + num2;
}

console.log(add(5, 10));
// add(5, 'ten')

console.log(add(5));
console.log(add1(5, 6));
console.log(add1(5));

// interface
interface Person {
    firstname: string;
    lastname?: string;
}

function fullName(person: Person) {
    console.log(`${person.firstname} ${person.lastname}`);
}

let person = {
    firstname: 'Sam',
    lastname: 'Watts'
}

fullName(person);


// classes
class Employee {
    public employeeName: string; // for free accessability
    // private employeeName: string; // accessibility only with in the class
    // protected employeeName: string; // accessibility with in the class and classes derived from it

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Good morning ${this.employeeName}`)
    }
}

let emp1 = new Employee('Sameer');

console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }

    delegateWork() {
        console.log(`Manager delegating tasks`)
    }
}

let m1 = new Manager('Kunal')

m1.delegateWork();
m1.greet();
console.log(m1.employeeName);