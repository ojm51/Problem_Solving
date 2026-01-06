const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const N = Number(input[0]);

const edges = Array.from({ length: N + 1 }, () => []);
input.slice(1).forEach(line => {
  const [p, c] = line.split(' ').map(Number);
  edges[p].push(c);
  edges[c].push(p);
});

const visited = Array(N + 1).fill(false);
const answer = Array(N + 1).fill(0);

const queue = [1];
visited[1] = true;

let head = 0;
while(head < queue.length) {
  const node = queue[head++];
  
  for(let next of edges[node]) {
    if(visited[next]) continue;
    
    visited[node] = true;
    answer[next] = node;
    queue.push(next);
  }
}

console.log(answer.slice(2).join('\n'));