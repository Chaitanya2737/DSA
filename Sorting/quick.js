function quickSort(array , left=0, right=array.length-1){
    if (left>=right) {
        return array
    }
    let pivotIdx = partition(array , left , right)
    quickSort(array, left , pivotIdx-1)
    quickSort(array , pivotIdx+1 , right)
    return array
}

function partition(array , left , right){
    let pivot = array[right];
    let i = left
    for (let j = left; j < right; j++) {
       if(array[j] < pivot){
        [array[i] , array[j]]=[array[j] , array[i]]
        i++
       }
    }
    [array[i] , array[right] ]=[array[right] , array[i] ]
    return i
}


console.log(quickSort([12,2,3,3,1,6,2]))
