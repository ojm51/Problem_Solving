const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const triangle = input.slice(1).map(line => line.split(' ').map(Number));

const dp = Array.from({ length: N }, () => []);
dp[0].push(triangle[0][0]);

for(let row = 1; row < N; row++) {
  for(let col = 0; col <= row; col++) {
    let num = 0;
    
    if(col === 0) num = dp[row - 1][col];
    else if(col === row) num = dp[row - 1][col - 1];
    else num = Math.max(dp[row - 1][col - 1], dp[row - 1][col]);
    
    dp[row].push(num + triangle[row][col]);
  }
}

console.log(Math.max(...dp[N - 1]));