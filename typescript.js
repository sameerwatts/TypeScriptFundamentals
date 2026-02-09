"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
function add(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    return num1 + 3;
}
function add1(num1, num2) {
    if (num2 === void 0) { num2 = 4; }
    return num1 + num2;
}
console.log(add(5, 10));
// add(5, 'ten')
console.log(add(5));
console.log(add1(5, 6));
console.log(add1(5));
function fullName(person) {
    console.log("".concat(person.firstname, " ").concat(person.lastname));
}
var person = {
    firstname: 'Sam',
    lastname: 'Watts'
};
fullName(person);
// classes
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good morning ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee('Sameer');
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Kunal');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
