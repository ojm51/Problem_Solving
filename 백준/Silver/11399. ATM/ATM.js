const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const N = Number(input[0]);
const spendTime = input[1].split(' ').map(Number);

spendTime.sort((a, b) => a - b);

let sum = 0;    // 현재 사람이 인출하는데 필요한 시간
let answer = 0;  // 앞 사람까지 소요된 시간

for(let i = 0; i < N; i++) {
  sum += spendTime[i];
  answer += sum;
}

console.log(answer);