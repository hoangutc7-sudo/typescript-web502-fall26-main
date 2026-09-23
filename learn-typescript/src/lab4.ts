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
