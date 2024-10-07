// Bubble sort

function main() {
  const array = [1, 4, 2, 5, 6, 7, 2, 5];
  const result = support(array);
  console.log(result);
}

function support(array) {
    let swap ;
    for (let i = 0; i < array.length - 1; i++) {
        swap= false
      for (let j = 0; j < array.length -1 - i ; j++) {
       if (array[j] > array[j+1]) {
        [array[j] , array[j+1]] = [array[j+1] , array[j]]
        swap = true
       }
      }
      if (!swap) {
        break
      }
    }
    return array
}

main();

// t/c = o(n) and in worst case o(n^2)
// s/c =  o(1) bcz selection sort is in-place-sorting algo
