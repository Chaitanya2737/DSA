function support(  array, highestValue = 0 , i=0) {
if (i >= array.length) {
    return highestValue
}
if (array[i] > highestValue) {
    highestValue = array[i]
}
 return support(array , highestValue , i+1)
}
const array = [2, 5, 1, 3, 0];
console.log(support(array))