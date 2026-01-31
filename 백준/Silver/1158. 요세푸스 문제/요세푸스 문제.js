const input = require("fs").readFileSync('/dev/stdin').toString().trim(); 
const [N, K] = input.split(' ').map(Number);

const queue = [];
for(let i = 1; i <= N; i++) {
  queue.push(i);
}

const answer = [];

while(queue.length) {
  for(let i = 0; i < K - 1; i++) {
    queue.push(queue.shift());
  }
  answer.push(queue.shift());
}

console.log(`<${answer.join(', ')}>`);