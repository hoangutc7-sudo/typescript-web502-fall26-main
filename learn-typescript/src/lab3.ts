//function
function sum(a:number,b:number):number{
    return a+b;
    console.log("")
}
sum (3,4);

function sayHello(name: string):string{
    return "xin chào"+name;
}
sayHello("hoang")

function say2(name: string):void{
    console.log ("xin chào"+name);
}

//arrow function
const sumAB = (a: number,b:number): number =>{
    return a+b;
};
sumAB(3,4);

// bài 1
const averageScore = (...scores: number[]): number => {
    let total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
};

console.log(averageScore(8, 9, 10));
console.log(averageScore(5, 6, 7, 8));

// bài 2

function checkNumber(n: number): string {
    if (n % 2 == 0) {
        return "even";
    } else {
        return "odd";
    }
}

console.log(checkNumber(4)); // even
console.log(checkNumber(7)); // odd

// bài 3

function createUser(name: string, age?: number, role: string = "user"): string {
    if (age != undefined) {
        return `Name: ${name}, Age: ${age}, Role: ${role}`;
    } else {
        return `Name: ${name}, Role: ${role}`;
    }
}

console.log(createUser("Hoàng"));
// Name: hoàng, Role: user

console.log(createUser("Nam", 25, "admin"));
// Name: Nam, Age: 25, Role: admin
// bai 4
type Product = {
    name: string;
    price: number;
};

let products1: Product[] = [
    {
        name: "Áo",
        price: 20
    },
    {
        name: "Quần",
        price: 30
    }
];

let products2: Product[] = [
    {
        name: "Giày",
        price: 50
    },
    {
        name: "Mũ",
        price: 10
    }
];

// Hàm gộp 2 mảng sản phẩm
function mergeProducts(...products: Product[][]): Product[] {
    return products.flat();
}

// Hàm in danh sách sản phẩm
function printProducts(products: Product[]): void {
    products.forEach((product) => {
        console.log("Tên:", product.name, "- Giá:", product.price);
    });
}

let listProducts = mergeProducts(products1, products2);

printProducts(listProducts);