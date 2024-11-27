
// direct recursion 

let totalApple = 0;
let money = 100;

function buyApple(x){
    if (x > 0) {
        totalApple++
        money -= 10
        console.log("total apple", totalApple , money)
        buyApple(x-10)
    }else{
        console.log("i don't have money " ,  totalApple)
    }
}
function totalMoney(x){
    return x = x-10
}

buyApple(money)
totalApple(x)
