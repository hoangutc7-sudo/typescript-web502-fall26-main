console.log("LAB 2");

enum Rate {
    low = "Thap",
    medium = "Trung binh",
    hight = "Cao"
}

type Product = {
    name: string;
    price: number;
    sale: boolean;
    rate: Rate;
}

let listProducts: Product[] = [{
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
