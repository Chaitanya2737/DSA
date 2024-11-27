function main(){
    const array = [1,2,3,4,5,6];
    const result =  support(array)
    console.log(result)
}

function support(array){
    let flag =0;
    for (let i = 0; i < array.length; i++) {  
        for (let j = 0; j < array.length; j++) { // set in mind when we use the nested looping for single value of i , j loop works upto array size.
          if (array[j] > array[j+1]) {
            [array[j] , array[j+1]] = [array[j+1] , array[j] ]
            flag = 1 ;
          }
        }
        console.log(flag)
        if (flag === 0) {
            break
        }

    }
    return array
}

main()