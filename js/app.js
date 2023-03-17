let item_names=[`coke`,`sprite`,`grape drink`]
let item_price=[2.20,2,1.80]
let in_stock=[true,false,true]


let product_1 = item_names[0]+ item_price[0]
let product_2 = item_names[1]+ item_price[1]
let product_3 = item_names[2]+ item_price[2]
/*this is the push code for the assignment*/

item_names.push(`fanta`)
item_price.push(2)
in_stock.push(true)
/*and this is to check in the console if everything pushed successfully*/
console.log(item_names)
console.log(item_price)
console.log(in_stock)