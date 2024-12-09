let array = []

function push(val){
    if (array.length >= 5) {
        return
    }
   array[array.length]  = val;
}

function pop(){
    if(array.length < 0){
        return 
    }
    array.length-=1
}

push(10) 
push(12)
push(13)
push(13)
push(14)
pop()
pop()
pop()
pop()
pop()
pop()



console.log(array)



// push and pop operation 