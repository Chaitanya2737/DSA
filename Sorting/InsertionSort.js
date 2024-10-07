

function main() {
    const array = [1,2,3,8,5,6];
    const result = support(array);
    console.log(result);
  }
  
  function support(array) {
for (let i = 0; i < array.length; i++) {
    let j=i
   while(j>0 && array[j-1] > array[j]){
    [array[j] , array[j-1] ] = [array[j-1] ,array[j]]
    j--
    console.log("Runs")
   }
}
return array
  }
  
  main();
  
  // t/c = o(n) and  in worst case o(^2)
  // s/c =  o(1) bcz selection sort is in-place-sorting algo
  