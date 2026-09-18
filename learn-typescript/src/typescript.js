"use strict";
console.log("typescript");
let age = 25;
age = 30;
let myName = "hoadv";
myName = "20";
let dihockhong = true;
dihockhong = false;
let myYear = 2005;
// myYear = "20008"; => error
// object: chua nhieu thuoc tinh
const student = {
    name: "hoadv",
    age: 34,
    isActive: true,
};
// enum
var Status;
(function (Status) {
    Status["done"] = "ho\u00E0n th\u00E0nh";
    Status["doing"] = "\u0111ang l\u00E0m";
})(Status || (Status = {}));
// array: []: nhieu phan tu
const numbers = [1, 2, 3, 4];
const students = ["nam", "an"];
const products = [{ name: "laptop" }, { name: "laptop" }];
//any: ko quan tâm kieu du lieu
let data = "data";
data = 1;
