function main(){
   const  array1 = [1,2,3,4,5];
   const  array2 = [6,7,8,9];
   const result = support(array1, array2)
   console.log(result)
}

function support(array1 , array2){
    const array = []
 for (let i =0 ; i < array1.length; i++) {
   array[i] = array1[i]
 }
 for (let i = 0; i < array2.length; i++) {
    array[array1.length+i] = array2[i]
 }
 return array
}

main()