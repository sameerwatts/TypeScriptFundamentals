"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message = 'welcome back';
console.log(message);
var isBeginner = true;
var total;
var name = "Sameer";
var sentance = "My name is ".concat(name, "\nand i'm new in typescript");
console.log(sentance);
var n = null;
var u = undefined;
var list1 = [1, 2, 3];
var person1 = ['Rachit', 33];
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Green"] = "green";
    Color["Blue"] = "blue";
})(Color || (Color = {}));
;
var Switch;
(function (Switch) {
    Switch[Switch["Off"] = 0] = "Off";
    Switch[Switch["On"] = 1] = "On";
})(Switch || (Switch = {}));
;
var r = Color.Red;
var g = Color.Green;
var b = Color.Blue;
var on = Switch.On;
var off = Switch.Off;
console.log(r);
console.log(g);
console.log(b);
console.log(on);
console.log(off);
var random = 10;
random = true;
// Need more info
// let unknownVariable: unknown = 'string';
// (unknownVariable as string).toUpperCase();
// type inference
var a;
a = 10;
a = 'string';
a = true;
var p = 30;
// union type
var multitype;
multitype = 'isDataAvailable';
multitype = true;
