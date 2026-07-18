/*
const customerList = [];

customerList.push(1);
customerList.push(2);
customerList.push(3);

let revA = customerList.reverse();
console.log(revA);

//call back function

const products = [{ name: "bun", isStock: false },
{ name: "copy", isStock: true },
{ name: "bread", isStock: false },
{ name: "fish bun", isStock: true },];

let inStockProduct = products.filter(function (product) {
    return productFilter(product);
})

function productFilter(product) {
    return product.isStock == true;
}

console.log(inStockProduct);

//JS Functions

//step 01
function getSum(num1, num2){
    return num1+num2;
}

console.log(getSum(10,20));


//step 2

let getSum = function(num1, num2){
    return num1+num2;
}

console.log(getSum(25,50));


//step 3

let getSum = (num1, num2) => {
    return num1+num2;
}

console.log(getSum(15,10));



//step 4

let sample = textValue =>{
    return textValue;
}

console.log(sample("Hiiiii"));


//step 5

let sample = textValue => textValue;

console.log(sample("Hi2"));


//for Each Loop

//products.forEach(product => console.log(product));

//toSorted Function

const letterList = ["F","A","C","B","D","E"];

let sortArr = letterList.toSorted();

console.log(sortArr);



//Array mapping

const employeeSalary = [75000,25000,50500,65000,81000,36000];

let newSalary = employeeSalary.map(salary => salary * 2);

console.log(newSalary);



//find student

const studentList = [
    { id: "S001", name: "Pathum" },
    { id: "S002", name: "Kamal" },
    { id: "S003", name: "Jagath" },
    { id: "S004", name: "Samitha" }];

let student = studentList.find(student => student.id === "S002");

console.log(student);
*/

fetch("/customer.json").then(res => res.json()).then(data=>{
    console.log(data);
})

