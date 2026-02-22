const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const T = Number(input[0]);
const cases = input.slice(1).map(Number);

const maxCase = Math.max(...cases);

const dp = Array.from({ length: maxCase + 1}, () => [0, 0]);
dp[0] = [1, 0];
dp[1] = [0, 1];

for(let i = 2; i <= maxCase; i++) {
  dp[i] = [dp[i - 1][0] + dp[i - 2][0], dp[i - 1][1] + dp[i - 2][1]];
}

const answer = cases.map(num => dp[num].join(' '));

console.log(answer.join('\n'));