function main(){
const array = [ 1,2,0,1,2,1,0];
const result = support(array);
console.log(array)
}

function support(array){
    let left = 0;
    let mid = 0;
    let right = array.length -1;


    while (mid < right) {
        if (array[mid] == 2) {
            [array[mid]  , array[right]] = [array[right]  , array[mid]]
            mid++;
            right--
        } else if (array[mid] == 1){
            mid++
        } else if (array[mid] === 0) {
            [array[mid]  , array[left]] = [array[left]  , array[mid]]
            mid++
            left++
        }
    }
}

main()