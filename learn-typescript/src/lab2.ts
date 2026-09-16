console.log("LAB 2 ĐANG CHẠY");

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

let product: Product = {
    name: "Áo",
    price: 200000,
    sale: true,
    rate: Rate.hight
}