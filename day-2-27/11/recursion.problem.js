const array = [1,2,3,5];

function support(array , i=0, sum=0){
    if (i >= array.length) {
        let n =  array.length+1
        const expectedSum = (n*(n+1)/2)
        console.log(expectedSum - sum)
        return
    }
    support(array , i+1 , sum+=array[i])
}

support(array)