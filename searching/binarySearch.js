function main() {
    const array1 = [7,3,6,2,5,8,9,3];
    array1.sort((a,b) => a-b)
    const result = support(array1 , k=5);
    console.log(result);
  }
  
  function support(array1, k) {
    let left =0;
    let right= array1.length-1;
    while (left< right) {
        let mid =  Math.floor((left+right)/2);
        if (array1[mid] === k) {
            return `Element preset at ${mid}` // when we got middle element from subArray and is equal to k then we return 
        }
        else if(array1[mid] < k){
            left = mid+1;
        }
        else{
            right = mid-1
        }
    }
    return -1
}
  
  main();