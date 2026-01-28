const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 

const answer = [];

const directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
  [-1, -1],
  [-1, 1],
  [1, -1],
  [1, 1],
];

let index = 0;
while(true) {
  const [col, row] = input[index++].split(' ').map(Number);
  if(col === 0) break;
  
  // 지도 구하기
  const map = Array.from({ length: row }, () => []);
  for(let i = 0; i < row; i++) {
    map[i].push(...input[index++].split(' ').map(Number));
  }
  
  // bfs 수행
  const visited = Array.from({ length: row }, () => Array(col).fill(false));
  
  const bfs = (r ,c) => {
    const queue = [[r, c]];
    visited[r][c] = true;
    
    let head = 0;
    while(head < queue.length) {
      const [x, y] = queue[head++];
      
      
      for(let [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;
        
        if(nx < 0 || ny < 0 || nx >= row || ny >= col) continue;
        if(visited[nx][ny]) continue;
        if(map[nx][ny] === 0) continue;
        
        visited[nx][ny] = true;
        queue.push([nx, ny]);
      }
    }
  };
  
  // 지도를 돌며 사각형 탐색
  let count = 0;
  for(let r = 0; r < row; r++) {
    for(let c = 0; c < col; c++) {
      if(!visited[r][c] && map[r][c] === 1) {
        bfs(r, c);
        count++;
      }
    }
  }
  
  answer.push(count);
}

console.log(answer.join('\n'));