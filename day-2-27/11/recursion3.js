const array = [1,2,3,1,9];

function support(array , left = 0 , right = array.length-1){

    if(left >= right){
        return
    }
    [array[left] ,array[right]] = [array[right] , array[left]]
    support(array , left+1 , right-1)
    
}

support(array)
console.log(array)