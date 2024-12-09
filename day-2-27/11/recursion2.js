const array = [12,4,5,2,4,2,1,2];

function support(array , i=0){
    if (i >= array.length) {
        return 
    }else{
        console.log(array[i])
        support(array , i+1)
    }
}

support(array)
