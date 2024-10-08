function main() {
    const array = [1, 4, 2, 5 ,66];
    const result = support(array);
    console.log(result);
  }
  
  function support(array) {
    return Math.max(...array)
  }
  
  main();