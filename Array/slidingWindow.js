function main() {
    const array = [100,200,300,400];
    const k = 2;
    const result = support(array, k);
    console.log(result);
}

function support(array, k ) {
    let left = 0;
    let right = 0;
    let sum = 0;
    let ans = -Infinity; // Initialize to Infinity to find the minimum sum

    while (right < array.length) { // Use '<' instead of '>'
        sum += array[right]; // Add current right element to sum

        // When we reach the size of the window 'k'
        if (right - left + 1 === k) {
            // Update answer if we find a smaller sum
            if (ans < sum) {
                ans = sum;
            }
            sum -= array[left]; // Remove the leftmost element from sum
            left++; // Move the window to the right
        }

        right++; // Expand the window by moving the right pointer
    }

    return ans === Infinity ? -1 : ans; // Return -1 if no valid subarray is found
}

main();
