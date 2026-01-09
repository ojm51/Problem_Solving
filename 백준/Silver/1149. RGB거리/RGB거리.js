const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);

const prices = Array(N + 1).fill(undefined);
for(let i = 1; i <= N; i++) {
  prices[i] = input[i].split(' ').map(Number);
}

const dp = Array.from({ length: N + 1 }, () => Array(3).fill(0));
dp[1][0] = prices[1][0];
dp[1][1] = prices[1][1];
dp[1][2] = prices[1][2];

for(let house = 1; house <= N; house++) {
  dp[house][0] = prices[house][0] + Math.min(dp[house - 1][1], dp[house - 1][2]);
  dp[house][1] = prices[house][1] + Math.min(dp[house - 1][0], dp[house - 1][2]);
  dp[house][2] = prices[house][2] + Math.min(dp[house - 1][0], dp[house - 1][1]);
}

console.log(Math.min(...dp[N]));