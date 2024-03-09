let favorite_pizzas: string[] = ["Margherita Pizza","Hawaiian Pizza","Cheese Pizza"]

for (let favorite_pizza of favorite_pizzas){
    if (favorite_pizza === "Margherita Pizza" ){
        console.log(`${favorite_pizza} is my favorite pizza.`)
    }else if (favorite_pizza === "Hawaiian Pizza" ){
        console.log(`${favorite_pizza} is very delicious.`)
    }else{
        console.log(`${favorite_pizza} is very popular.`)
    }
}

console.log("I really like pizzas")