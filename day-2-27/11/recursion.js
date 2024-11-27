function support(count){
    console.log(count)
    if (count < 10 ) {
       support(count+1)
    }

}
let value = 0
support(value)