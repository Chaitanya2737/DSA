function main() {
  const array = [1,3,5,6,7,8];
  const result = support(array);
  console.log(this);
}
function support(array) {
    
  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
        if(array[i] > array[j]){
           let temp= array[i];
           array[j] = temp;
           array[i] = array[j]
        }
    }
  }
  return array
}

main();
