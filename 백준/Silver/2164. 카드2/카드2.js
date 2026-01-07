const input = require("fs").readFileSync('/dev/stdin').toString().trim();
const N = Number(input);

const queue = [];
for(let i = 1; i <= N; i++) queue.push(i)

let head = 0;
let tail = queue.length;
while(tail - head > 1) {
  head++;
  queue[tail++] = queue[head++];
}

console.log(queue[head]);