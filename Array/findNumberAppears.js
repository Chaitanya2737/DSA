function main() {
    const array1 = [1,1,3, 2,3,4,5,6];
   

    const result = support(array1 );
    console.log(result);
  }
  
  function support(array) {
  const map = new  Map()
  for (let i = 0; i < array.length; i++) {
     if (map.has(array[i])) {
        map.set(array[i] , map.get(array[i])+1) 
     }
     else {
        map.set(array[i] , 1) 

     }
  }

  for (let i = 0; i < array.length; i++) {
   if (map.get(array[i]) ===1) {
    return array[i]
   }
  }
  }
  
  main();