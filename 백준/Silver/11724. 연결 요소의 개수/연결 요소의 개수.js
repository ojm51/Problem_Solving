const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const [N, M] = input[0].split(' ').map(Number);

const edges = Array.from({ length: N + 1 }, () => []);
input.slice(1).map(line => {
  const [u, v] = line.split(' ');
  edges[u].push(v);
  edges[v].push(u);
});

const visited = Array(N + 1).fill(false);

const dfs = (node) => {
  visited[node] = true;
  
  for(let nextNode of edges[node]) {
    if(!visited[nextNode]) dfs(nextNode);
  }
};

let count = 0;
for(let i = 1; i < N + 1; i++) {
  if(!visited[i]) {
    dfs(i);
    count++;
  }
}

console.log(count);