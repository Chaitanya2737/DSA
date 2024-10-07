function main() {
    const array = [1, 4, 2, 5 , 4];
    const result = support(array);
    console.log(result);
  }
  
  function support(array) {
    const map =  new Map();

    for (let i = 0; i < array.length; i++) {
        if (map.has(array[i])) {
            map.set(array[i] , map.get(array[i])+1)
            if (map.get(array[i]) === 2 ) {
                return array[i]
            }
        }else{
            map.set(array[i] ,1)
        }
    }
    return -1
  }
  
  main();