const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n');
const K = Number(input[0]);

const answer = [];

let idx = 1;
for(let k = 0; k < K; k++) {
  const [V, E] = input[idx++].split(' ').map(Number);
  const edges = Array.from({ length: V + 1 }, () => []);
  
  for(let j = 0; j < E; j++) {
    const [u, v] = input[idx++].split(' ').map(Number);
    edges[u].push(v);
    edges[v].push(u);
  }
  
  const color = Array(V + 1).fill(-1);  // -1, 0, 1
  let isBipartite = true;
  
  for(let start = 1; start <= V; start++) {
    if(color[start] !== -1) continue;
    
    const queue = [start];
    color[start] = 0;
    
    let head = 0;
    while(head < queue.length && isBipartite) {
      const node = queue[head++];

      for(let next of edges[node]) {
        // 아직 방문 안 한 노드
        if(color[next] === -1) {
          color[next] = 1 - color[node];
          queue.push(next);
        }
        // 이전에 방문했는데 현재 노드와 색이 같은 경우
        else if(color[next] === color[node]) {
          isBipartite = false;
          break;
        }
      }
    }
  }
  
  answer.push(isBipartite ? 'YES' : 'NO');
}

console.log(answer.join('\n'));