const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const [N, M] = input[0].split(' ').map(Number);
const notSeen = new Set(input.slice(1, N + 1));
const notHeard = input.slice(N + 1);

const answer = notHeard.filter(e => notSeen.has(e));
answer.sort();

console.log(answer.length);
console.log(answer.join('\n'));