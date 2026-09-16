"use strict";
console.log("LAB 2");
var Rate;
(function (Rate) {
    Rate["low"] = "Thap";
    Rate["medium"] = "Trung binh";
    Rate["hight"] = "Cao";
})(Rate || (Rate = {}));
let product = {
    name: "Áo",
    price: 200000,
    sale: true,
    rate: Rate.hight
};
