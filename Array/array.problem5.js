const array =  [1,2,3,4,5];

let start = 0;
let end =  array.length -1;
 while (end>= start) {
    let temp = array[start];
    array[start]=array[end];
    array[end]=temp
    array[start]==array[end]
    end--;
    start++
 }

 console.log(array)