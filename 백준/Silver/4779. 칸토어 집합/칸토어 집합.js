const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 

const answer = [];

input.forEach(line => {
  const N = Number(line);
  
  const recursion = (len) => {
    if(len === 0) return '-';
    
    return (recursion(len - 1) + 
            ' '.repeat(3 ** (len - 1)) + 
            recursion(len - 1));
  };
  
  answer.push(recursion(N));
});


console.log(answer.join('\n'));