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
