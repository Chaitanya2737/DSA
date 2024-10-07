function main() {
  const array = [1,4,2,5];
  const result = support(array);
  console.log(result);
}

function support(array) {
    let totalCount =  0
    for (let i = 0; i < array.length; i++) {
       totalCount+=array[i]
    }
    
    let leftSum = 0
    
    for (let i = 0; i < array.length; i++) {
       if (leftSum === totalCount - leftSum - array[i]) {
        return i
       }
       leftSum+=array[i]
    }
     
    return -1
}

main();


// 
