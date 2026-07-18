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


