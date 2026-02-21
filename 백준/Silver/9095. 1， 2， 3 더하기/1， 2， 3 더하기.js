const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const T = Number(input[0]);

const dp = Array(11).fill(0);
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for(let i = 4; i < 11; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

const answer = [];

for(let i = 1; i <= T; i++) {
  const n = Number(input[i]);
  answer.push(dp[n]);
}

console.log(answer.join('\n'));