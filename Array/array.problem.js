function outerFunction(){
   let count =  0;
   function innerFunction(){
      return count++
   }
   return innerFunction
}

const clouser = outerFunction();

console.log(clouser())
console.log(clouser())
console.log(clouser())
console.log(clouser())
console.log(clouser())
console.log(clouser())