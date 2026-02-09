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