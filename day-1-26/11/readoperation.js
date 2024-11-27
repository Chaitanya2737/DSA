function main(){
 const array = [2,3,4,6,2];
 const result = support(array)
 console.log(result)
}

function support(array , k=2){
    let countIndex =0
    const supportArray = []
    for (let i = 0; i < array.length; i++) {
      if (array[i] === k) {
         supportArray[countIndex] = i
         countIndex++
      }
    }
    return supportArray
}
main();