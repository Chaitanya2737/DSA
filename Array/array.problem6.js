function main(){
    let array = [1,2,3]; // 
  let result=  support(array)
  console.log(result)
}

function support(array){
    let ans = [...array]
    for (let i = ans.length-1; i >= 0; i--) {
      if(ans[i]!==9){// 9
        ans[i]++
        return ans 
      }
     ans[i]=0
    }
    return [1, ...ans]
}

main()


// input => 123
// output => 124