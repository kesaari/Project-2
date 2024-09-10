const areBracketsBalanced = (str) => {
    let stack = [];
    // if (str.length % 2 === 0 || str === " ") {
    //   if (str.at(0) == "(") {
        for (let x = 0; x < str.length; x++) {
          console.log(stack);
          if (str.at(x) == "(") {
            stack.push(str.at(x));
            console.log(stack);
          } else {
            console.log(stack);
            if (stack.length == 0) { 
              return false } else {
            stack.pop(); }
          }
          console.log(stack);
         
    
    }
    return stack.length == 0;
  };
  

areBracketsBalanced("(())")
  