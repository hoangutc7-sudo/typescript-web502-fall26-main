"use strict";
console.log("LAB 2");
var Rate;
(function (Rate) {
    Rate["low"] = "Thap";
    Rate["medium"] = "Trung binh";
    Rate["hight"] = "Cao";
})(Rate || (Rate = {}));
let listProducts = [{
        name: "Áo",
        price: 200000,
        sale: true,
        rate: Rate.hight
    },
    {
        name: "Quần jean",
        price: 10,
        sale: false,
        rate: Rate.hight
    },
    {
        name: "Giày Nike",
        price: 20,
        sale: true,
        rate: Rate.hight
    },
    {
        name: "Mũ lưỡi trai",
        price: 3,
        sale: true,
        rate: Rate.low
    },
    {
        name: "Balo",
        price: 8,
        sale: false,
        rate: Rate.medium
    }
];
function addDescription() {
    let newList = listProducts.map((product) => {
        return {
            ...product,
            description: product.price > 5 ? "Tốt" : "Bình thường"
        };
    });
    return newList;
}
console.log("Danh sách sau khi thêm description:");
console.log(addDescription());
