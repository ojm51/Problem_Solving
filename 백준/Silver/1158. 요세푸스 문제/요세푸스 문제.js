const input = require("fs").readFileSync('/dev/stdin').toString().trim(); 
const [N, K] = input.split(' ').map(Number);

const queue = [];
for(let i = 1; i <= N; i++) {
  queue.push(i);
}

const answer = [];

let idx = 0;
while(queue.length > 0) {
  idx = (idx + K - 1) % queue.length;
  answer.push(queue.splice(idx, 1));
}

console.log(`<${answer.join(', ')}>`);