function main() {
    const array = [1,2,3,4]; // 3,5,7,9
    const result = support(array);
    console.log(result);
  }
  
  function support(array) {
    return smallestElement(array);
  }
  
  function smallestElement(array) {
    let largest = array[0];
    let secondLargest =Infinity;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > largest) {
            secondLargest = largest;
            largest = array[i]
        } else if (array[i] > largest && array[i] < secondLargest) {
            secondLargest = array[i]
        }
    }
    return secondLargest
}
  
  main();
  