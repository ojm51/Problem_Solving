const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const sequence = input.slice(1).map(Number);

const answer = [];

const stack = [];
let seqHead = 0;
let isPossible = true;

for(let pushNum = 1; pushNum <= N; pushNum++) {
  stack.push(pushNum);
  answer.push('+');
  
  while(seqHead < N) {
    const target = sequence[seqHead];
    const stackTop = stack[stack.length - 1];
    
    if(target < stackTop) {
      isPossible = false;
      break;
    }
    
    if(target !== stackTop) break;
    
    stack.pop();
    answer.push('-');
    seqHead++;
  }
  
  if(!isPossible) break;
}

console.log(isPossible ? answer.join('\n') : 'NO');