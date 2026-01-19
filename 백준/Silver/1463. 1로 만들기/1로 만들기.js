const input = require("fs").readFileSync('/dev/stdin').toString().trim(); 
const N = Number(input);

const dp = Array(N + 1).fill(0);

for(let i = 2; i <= N; i++) {
  const calc = [];
  
  if(i % 3 === 0) calc.push(dp[i / 3]);
  if(i % 2 === 0) calc.push(dp[i / 2]);
  calc.push(dp[i - 1]);
  
  dp[i] = Math.min(...calc) + 1;
}

console.log(dp[N]);