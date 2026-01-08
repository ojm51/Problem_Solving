const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);

const answer = [];
const queue = [];

let head = 0;
let tail = 0;

input.slice(1).forEach(line => {
  const [order, num] = line.split(' ');
  
  switch(order) {
    case 'push':
      queue.push(Number(num));
      tail++;
      break;
    case 'pop':
      answer.push(head !== tail ? queue[head++] : -1);
      break;
    case 'size':
      answer.push(tail - head);
      break;
    case 'empty':
      answer.push(head !== tail ? 0 : 1);
      break;
    case 'front':
      answer.push(head !== tail ? queue[head] : -1);
      break;
    case 'back':
      answer.push(head !== tail ? queue[tail - 1] : -1);
      break;
  }
});

console.log(answer.join('\n'));