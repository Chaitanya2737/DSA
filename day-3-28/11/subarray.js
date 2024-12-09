function main() {
  const array = [10, 5, 2, 7, 1, 9];
  const result = support(array);
  console.log(result);
}
function support(array, k = 15) {
  let length = 0;
  for (let i = 0; i < array.length; i++) {
    let sum =0
    for (let j = i; j < array.length; j++) {
        sum += array[j]
        if (sum === k) {
            length = Math.max(length , j - i +1)
        }
    }
  }
  return length;
}

main();
