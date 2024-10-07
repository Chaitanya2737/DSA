function quickSort(nums, left = 0, right = nums.length - 1) {
    if (left >= right) return nums;

    let pivotIndex = partition(nums, left, right);
    quickSort(nums, left, pivotIndex - 1);
    quickSort(nums, pivotIndex + 1, right);

    return nums;
}

function partition(arr, left, right) {
    let pivot = arr[right];
    let i = left;

    for (let j = left; j < right; j++) {
        if (arr[j] < pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]];  // Swap
            i++;
        }
    }

    [arr[i], arr[right]] = [arr[right], arr[i]];  // Move pivot to the correct place
    return i;
}

console.log(quickSort([1, 3, 5, 7, 2, 4, 6, 7]));
