function main(s="{}()[]"){
    const stack = [];
    const param ={
    "{":"}",
    "[":"]",
    "(":")"
    }
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (param[char]) {
           stack.push(param[char]) 
        }else{
            if(stack.pop() !== char){
                return false
            }
        }
    }

    return stack.length ===  0;
}


console.log(main("{}[()]{)"))
