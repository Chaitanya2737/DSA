function main() {
    const array1 = [1, 2,3,4,5,6];
    const array2 = [1,2,4,5];

    const result = support(array1 , array2);
    console.log(result);
  }
  
  function support(array1 , array2) {
    return new Set([...array1 ,array2])
  }
  
  main();