const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const T = Number(input[0]);
const Ns = input.slice(1).map(Number);

const answer = [];
  
const dp = Array(101).fill(0);
dp[1] = 1;
dp[2] = 1;
dp[3] = 1;

let maxN = Math.max(...Ns);
for(let j = 4; j <= maxN; j++) {
  dp[j] = dp[j - 2] + dp[j - 3];
}

for(let N of Ns) {
  answer.push(dp[N]);
}

console.log(answer.join('\n'));