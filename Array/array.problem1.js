const array =  [1,6,4,9,7];

const target =   10
let sum =0

for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
      if (array[i]+array[j] == target) {
       sum++;
       console.log(array[i] , array[j])
      }        
    }    
}
console.log(sum)