const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const N = BigInt(input);

let answer = 1n;
for(let i = N; i > 0n; i--) {
  answer *= i;
}

console.log(answer.toString());