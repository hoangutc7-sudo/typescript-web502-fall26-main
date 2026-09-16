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
        price: 20,
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
function locSanPham() {
    let newList = listProducts.filter((product) => {
        return product.price > 5;
    });
    return newList;
}
console.log(listProducts);
console.log("Danh sách sản phẩm có price > 5:");
console.log(locSanPham());
