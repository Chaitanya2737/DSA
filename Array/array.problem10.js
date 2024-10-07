function maxtrix(maxtrix){
    let top=0;
    let bottom=maxtrix.length;
    let left = 0;
    let right= maxtrix[0].length

    let result=[]

   while (left <= right && top <=bottom) {


    
     if(top <=bottom){
        for (let i = right; i >=left; i--) {
           result.push(maxtrix[bottom][i])
        }
    }
    if (left <= right) {
        for (let i = bottom; i >=top; i--) {
           result.push(maxtrix[i][right])
        }
    }
   }
}