const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const N = Number(input);

const dp = Array(N + 1).fill(0);
dp[0] = 0;
dp[1] = 1;

for(let i = 2; i <= N; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

console.log(dp[N]);