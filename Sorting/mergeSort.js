function mergeSort (array) {
    if (array.length <= 1) {
        return array
    }
    let mid = Math.floor(array.length/2)
    let left = mergeSort(array.slice(0 , mid))
    let right = mergeSort(array.slice(mid))
    return merge(left , right)
}

function merge(left ,  right) {
    const sorted = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sorted.push(left.shift())
        }else{
            sorted.push(right.shift())
        }
    }
    return [...sorted , ...left ,...right]
}

console.log(mergeSort([1,3,53,4,6,3]))