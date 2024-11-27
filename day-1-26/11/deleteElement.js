function main(){
const array = [1,2,3,4,5,6];
const result = support(array);
console.log(result)
}
function support(array , position = 5){
    if (position > array.length) {
        return "position is more than array length"
    }
 for (let i = position; i < array.length-1; i++) {
     array[i] = array[i+1];
 }
 array.length = array.length-1
 return array;
}




main()