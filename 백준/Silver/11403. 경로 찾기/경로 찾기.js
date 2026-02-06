const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const N = Number(input[0]);
const matrix = input.slice(1).map(line => line.split(' ').map(Number));

const graph = Array.from({ length: N }, () => []);
for(let i = 0; i < N; i++) {
  for(let j = 0; j < N; j++) {
    if(matrix[i][j] === 1) graph[i].push(j);
  }
}

const answer = Array.from({ length: N }, () => Array(N).fill(0));

const bfs = (start) => {
  const visited = Array(N).fill(false);
  const queue = [...graph[start]];
  let head = 0;
  
  while(head < queue.length) {
    const node = queue[head++];
    
    if(visited[node]) continue;
    visited[node] = true;
    answer[start][node] = 1;
    
    for(let next of graph[node]) {
      if(!visited[next]) queue.push(next);
    }
  }
};

for(let i = 0; i < N; i++) {
  bfs(i);
}

console.log(answer.map(row => row.join(' ')).join('\n'));