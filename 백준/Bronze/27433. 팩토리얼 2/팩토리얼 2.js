const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const N = Number(input);

let answer = 1;
for(let i = N; i > 0; i--) {
  answer *= i;
}

console.log(answer);