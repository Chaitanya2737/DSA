function main() {
    const array = [1, 1, 2, 2, 2, 3, 3];
    const result = support(array);
    console.log(result);
  }
  
  function support(array) {
    let count =  0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== array[i-1]) {
            count++
        }
    }
    return count
  }
  
  main();