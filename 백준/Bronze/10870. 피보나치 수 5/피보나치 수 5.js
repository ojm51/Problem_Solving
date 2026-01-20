const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const N = Number(input);

const fibo = (num) => {
  if(num === 0 || num === 1) return num;
  return fibo(num - 1) + fibo(num - 2);
};

console.log(fibo(N));