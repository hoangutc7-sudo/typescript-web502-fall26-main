"use strict";
//function
function sum(a, b) {
    return a + b;
    console.log("");
}
sum(3, 4);
function sayHello(name) {
    return "xin chào" + name;
}
sayHello("hoang");
function say2(name) {
    console.log("xin chào" + name);
}
//arrow function
const sumAB = (a, b) => {
    return a + b;
};
sumAB(3, 4);
// bài 1
const averageScore = (...scores) => {
    let total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
};
console.log(averageScore(8, 9, 10));
console.log(averageScore(5, 6, 7, 8));
// bài 2
function checkNumber(n) {
    if (n % 2 == 0) {
        return "even";
    }
    else {
        return "odd";
    }
}
console.log(checkNumber(4)); // even
console.log(checkNumber(7)); // odd
// bài 3
function createUser(name, age, role = "user") {
    if (age != undefined) {
        return `Name: ${name}, Age: ${age}, Role: ${role}`;
    }
    else {
        return `Name: ${name}, Role: ${role}`;
    }
}
console.log(createUser("Hoàng"));
// Name: hoàng, Role: user
console.log(createUser("Nam", 25, "admin"));
// Name: Nam, Age: 25, Role: admin
