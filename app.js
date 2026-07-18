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

let inStockProduct = products.filter(function(product){
    return productFilter(product);
})

function productFilter(product){
    return product.isStock == true;
}

console.log(inStockProduct);

//JS Functions
/*
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
*/

//for Each Loop

products.forEach(product => console.log(product));