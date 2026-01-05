const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const n = Number(input[0]);
const nums = input[1].split(' ').map(Number);

const dp = Array(n).fill(0);
dp[0] = nums[0];

let answer = dp[0];

// 이전 단계 최댓값과의 누적합 or 현재 값으로 다시 시작
for(let i = 1; i < n; i++) {
  dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
  answer = Math.max(answer, dp[i]);
}

console.log(answer);