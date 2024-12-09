let array  = [];

function push(value){
    array[array.length] = value;
}
function pop(){
    let removedItem = array[array.length -1]
    array.length-=1;
    return removedItem
}

let str = "Hello";

let strArray = str.split("");
for (let i = 0; i < strArray.length; i++) {
    push(strArray[i])
}

for (let i = 0; i < strArray.length; i++) {
    strArray[i] = pop()
}


console.log(strArray.join(""))