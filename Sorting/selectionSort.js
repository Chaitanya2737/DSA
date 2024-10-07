// selection sort

function main() {
  const array = [1, 4, 2, 5, 6, 7, 2, 5];
  const result = support(array);
  console.log(result);
}

function support(array) {
  for (let i = 0; i < array.length; i++) {
    let mini = i;
    console.log(mini);
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[mini]){
        mini = j;
      }
    }
    if (mini !== i) {
      [array[i], array[mini]] = [array[mini], array[i]];
    }
  }

  return array;
}

main();

// t/c = o(n^2) and also in worst case
// s/c =  o(1) bcz selection sort is in-place-sorting algo
