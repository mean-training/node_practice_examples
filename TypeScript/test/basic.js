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
exports.__esModule = true;
var name = 'John Doe';
console.log("Hello ".concat(name));
var myName = 'Test string';
var list1 = [1, 2, 3];
console.log(list1[1]);
// Tuple
var tuple1 = [10, 'hello'];
console.log(tuple1[0]);
console.log(tuple1[1].substring(1));
// Enum
var color;
(function (color) {
    color[color["red"] = 4] = "red";
    color[color["blue"] = 5] = "blue";
    color[color["green"] = 6] = "green";
})(color || (color = {}));
var c = color.green;
console.log(c);
var colorName = color[5];
console.log(colorName);
var notSure = 110;
console.log(notSure);
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(2, 5.5));
function getEmployeeDetail(employeeDetail) {
    console.log(employeeDetail.firstName);
    console.log(employeeDetail.lastName);
    console.log(employeeDetail.age);
}
getEmployeeDetail({
    firstName: "John",
    lastName: "Doe",
    age: 35
});
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.hello = function () {
        console.log("Hello ".concat(this.employeeName, " from parent class"));
    };
    return Employee;
}());
var emp1 = new Employee("John Doe");
console.log("initialize class");
console.log(emp1.hello());
console.log(emp1.employeeName);
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name) {
        return _super.call(this, name) || this;
    }
    Manager.prototype.hello = function () {
        console.log("Hello ".concat(name, " from child class"));
    };
    return Manager;
}(Employee));
var manger1 = new Manager('Alex');
console.log(manger1.hello());
console.log(manger1.employeeName);
