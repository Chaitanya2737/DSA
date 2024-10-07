function main() {
  const array = [1, 4, 2, 5];
  const targetSum = 7;
  const result = support(array, targetSum);
  console.log(result);
}

function support(array, targetSum) {
    const ans =[]
  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
        if (array[i]+array[j] === targetSum) {
            ans.push([i,j])
        }
    }
  }
  return ansx
}

main();