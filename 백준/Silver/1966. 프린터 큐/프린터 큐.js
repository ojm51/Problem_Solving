const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const T = Number(input[0]);

const answer = [];

let idx = 1;
for(let t = 0; t < T; t++) {
  const [N, M] = input[idx++].split(' ').map(Number);
  const priorities = input[idx++].split(' ').map(Number);
  
  const queue = priorities.map((w, i) => [i, w]);
  let count = 0;
  
  while(true) {
    const maxWeight = Math.max(...queue.map(e => e[1]));
    const [index, priority] = queue.shift();
    
    if(priority < maxWeight) {
      queue.push([index, priority]);
      continue;
    }
    
    count++;
    
    if(index === M) {
      answer.push(count);
      break;
    }
  }
}

console.log(answer.join('\n'));