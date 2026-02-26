const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const N = Number(input[0]);

const deque = {};
const answer = [];

let head = 0;
let tail = 0;

input.slice(1).forEach(line => {
  const [command, num] = line.split(' ');
  
  switch(command) {
    case 'push_front': 
      deque[--head] = num;
      break;
    case 'push_back':
      deque[tail++] = num;
      break;
    case 'pop_front':
      answer.push(tail - head === 0 ? -1 : deque[head++]);
      break;
    case 'pop_back':
      answer.push(tail - head === 0 ? -1 : deque[--tail]);
      break;
    case 'size':
      answer.push(tail - head);
      break;
    case 'empty':
      answer.push(tail - head === 0 ? 1 : 0);
      break;
    case 'front':
      answer.push(tail - head === 0 ? -1 : deque[head]);
      break;
    case 'back':
      answer.push(tail - head === 0 ? -1 : deque[tail - 1]);
      break;
  }
});

console.log(answer.join('\n'));