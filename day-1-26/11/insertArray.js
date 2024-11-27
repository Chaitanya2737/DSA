function main() {
  const array = [1, 3, 4, 5, 6];
  const result = practice(array);
  console.log(result);
}
function support(array, position = 1, k = 3) {
  // create the new array
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i < position) {
      newArray[i] = array[i];
    } else if (i === position) {
      newArray[i] = k;
    } else {
      newArray[i] = array[i - 1];
    }
  }
  return newArray;
}
function antherApproach(array, position = 3, k = 0) {
  for (let i = array.length - 1; i >= position; i--) {
    array[i + 1] = array[i];
  }
  array[position] = k;
  return array;
}

function practice(array, position = 3, k = 0){
    const newArray = []
    for (let i = array.length; i >=0; i--) {
       if (i < position) {
         newArray[i] = array[i]
       }else if(i === position){
        newArray[i] = k
       } else{
        newArray[i] = array[i -1 ]
       }
    }
    return newArray
}
main();
