const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const N = Number(input[0]);

const edges = Array.from({ length: N + 1 }, () => []);
input.slice(1).forEach(line => {
  const [p, c] = line.split(' ').map(Number);
  edges[p].push(c);
  edges[c].push(p);
});

const visited = Array(N + 1).fill(false);
const queue = [...edges[1]];
let head = 0;

const answer = Array(N + 1).fill(0);
queue.forEach(n => answer[n] = 1);

while(head < queue.length) {
  const node = queue[head++];
  visited[node] = true;
  
  for(let next of edges[node]) {
    if(visited[next]) continue;
    answer[next] = node;
    queue.push(next);
  }
}

console.log(answer.slice(2).join('\n'));