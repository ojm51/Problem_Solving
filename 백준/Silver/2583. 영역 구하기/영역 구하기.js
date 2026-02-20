const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const [M, N, K] = input[0].split(' ').map(Number);

const directions = [
  [1, 0], 
  [-1, 0],
  [0, 1],
  [0, -1],
];

const board = Array.from({ length: M }, () => Array(N).fill(0));
for(let i = 1; i <= K; i++) {
  const [lx, ly, rx, ry] = input[i].split(' ').map(Number);
  
  // x축 대칭 해서 색칠
  for(let y = ly; y < ry; y++) {
    for(let x = lx; x < rx; x++) {
      board[y][x] = 1;
    }
  }
}

const bfs = (r, c) => {
  let area = 1;
  
  const queue = [[r, c]];
  let head = 0;
  
  while(head < queue.length) {
    const [cr, cc] = queue[head++];
    
    for(let [dr, dc] of directions) {
      const nr = cr + dr;
      const nc = cc + dc;
      
      if(nr < 0 || nc < 0 || nr >= M || nc >= N) continue;
      if(board[nr][nc] === 1) continue;
      
      board[nr][nc] = 1;
      queue.push([nr, nc]);
      area++;
    }
  }
  
  return area;
};

const answer = [];

for(let i = 0; i < M; i++) {
  for(let j = 0; j < N; j++) {
    if(board[i][j] === 1) continue;
    
    board[i][j] = 1;
    answer.push(bfs(i, j));
  }
}

answer.sort((a, b) => a - b);

console.log(answer.length);
console.log(answer.join(' '));