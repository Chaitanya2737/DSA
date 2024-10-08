function main() {
    const array = [1,-1,1];
    let k =1
    const result = support(array, k);
    console.log(result);
  }
  
  function support(array , k) {
  let length= 0
      for (let i = 0; i < array.length; i++) {
        let count=0
       for (let j = i; j < array.length; j++) {
         count+=array[j]
         if (count === k) {
            length = Math.max(length , j-i+1)
         }
       }
    }
    return length
  }

  
  
  main();