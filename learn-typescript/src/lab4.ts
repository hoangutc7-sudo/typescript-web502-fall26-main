//bai 1
class Student {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    display(): void {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
    }
}

let student = new Student(1, "Cong");
student.display();

//bài 2
interface User {
    id: number;
    email: string;
    phone?: string;
}

let user: User = {
    id: 1,
    email: "cong@gmail.com"
};

console.log(user);

//bài 3
type Product = {
    id: number;
    name: string;
    price: number;
};

let product: Product = {
    id: 1,
    name: "Áo",
    price: 20
};

console.log(product);
//bai 4
type Status = "loading" | "success" | "error";

function logStatus(status: Status) {
    if (status === "loading") {
        console.log("Đang tải...");
    } else if (status === "success") {
        console.log("Thành công!");
    } else {
        console.log("Có lỗi xảy ra!");
    }
}

logStatus("loading");
logStatus("success");
logStatus("error");
//bai 5
function identity<T>(value: T): T {
    return value;
}

let number = identity<number>(10);
let string = identity<string>("Cong");
let boolean = identity<boolean>(true);

console.log(number);
console.log(string);
console.log(boolean);