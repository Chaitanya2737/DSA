let array = [];

function push(val){
    if (array.length >5 ) return
    else{
        array[array.length] = val;
    }
}

function pop() {
    array.length-=1
}

function display(i=0){
  if (i > array.length -1) return ;
  console.log(array[i])
  display(i+1)
}

push(10)
push(12)
push(14)
push(16)
pop()
display()
