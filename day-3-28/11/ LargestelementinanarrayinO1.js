function main() {
    const array = [10, 5 ,7,1,2,5,3];
    const result = support(array);
    console.log(result);
}

function support(array , k=10) {
    const map = new Map();
    let count =0;
    map.set(0 , 1);
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum+=array[i]
        if (map.has(sum - k)) {
            count += map.get(sum-k);
            console.log(map.get(sum-k))
        }
        map.set(sum ,(map.get(sum) || 0) + 1)
    }
    return count
}
main();
