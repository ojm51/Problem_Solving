const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const sequence = input.slice(1).map(Number);

const answer = [];
const stack = [];

let seqHead = 0;
for(let pushNum = 1; pushNum <= N; pushNum++) {
  stack.push(pushNum);
  answer.push('+');
  
  while(stack.length) {
    const target = sequence[seqHead];
    const stackTop = stack[stack.length - 1];
    
    if(target !== stackTop) break;
    
    stack.pop();
    answer.push('-');
    seqHead++;
  }
}

console.log(seqHead !== N ? 'NO' : answer.join('\n'));