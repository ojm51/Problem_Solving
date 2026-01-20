const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const N = Number(input);

const factorial = (num) => {
  if(num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(N));