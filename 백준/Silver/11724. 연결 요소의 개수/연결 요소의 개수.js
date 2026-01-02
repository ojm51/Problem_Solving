const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const [N, M] = input[0].split(' ').map(Number);

const edges = Array.from({ length: N + 1 }, () => []);
input.slice(1).map(line => {
  const [u, v] = line.split(' ').map(Number);
  edges[u].push(v);
  edges[v].push(u);
});

const visited = Array(N + 1).fill(false);

const bfs = (start) => {
  const queue = [start];
  let head = 0;
  
  while(head < queue.length) {
    const node = queue[head++];
    visited[node] = true;
    
    for(let next of edges[node]) {
      if(!visited[next]) {
        visited[next] = true;
        queue.push(next);
      }
    }
  }
}

let count = 0;
for(let i = 1; i <= N; i++) {
  if(!visited[i]) {
    bfs(i);
    count++;
  }
}

console.log(count);