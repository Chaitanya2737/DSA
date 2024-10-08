function main() {
    const array = [1,2,3,4,5];
    const result = support(array);
    console.log(result);
  }
  
  function support(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < array[i-1]) {
            return false
        }
    }
    return true
  }
  
  main();