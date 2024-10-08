function main() {
    const array = [1, 1, 2, 2, 2, 3, 3];
    const result = support(array);
    console.log(result);
  }
  
  function support(array) {
    firstElement = array[0];
    for (let i = 0; i < array.length; i++) {
     array[i-1] = array[i]
    }

    array[array.length-1] = firstElement

    return array
  }
  
  main();