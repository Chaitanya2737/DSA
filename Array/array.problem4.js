const array = [1,3,4,3,4];
let found= false
for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
        if (array[i]===array[j]) {
            console.log(array[i]) 
            found =  true
        }
    }  
    
    if (found) break
}