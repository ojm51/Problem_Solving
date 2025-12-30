const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const T = Number(input[0]);
const answer = [];

const directions = [
  [-1, 2],
  [-2, 1],
  [1, 2],
  [2, 1],
  [-2, -1],
  [-1, -2],
  [2, -1],
  [1, -2]
]

let idx = 1;
for(let t = 0; t < T; t++) {
  const l = Number(input[idx++]);
  const [sx, sy] = input[idx++].split(' ').map(Number);  // start
  const [ex, ey] = input[idx++].split(' ').map(Number);  // end
  
  const dist = Array.from({ length: l }, () => Array(l).fill(-1));
  const queue = [];
  dist[sx][sy] = 0;
  queue.push([sx, sy]);
  
  let found = false;
  let head = 0;
  while(head < queue.length && !found) {
    const [x, y] = queue[head++];
    
    for(let [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;
      
      if(nx < 0 || ny < 0 || nx >= l || ny >= l) continue;
      if(dist[nx][ny] !== -1) continue;
      
      dist[nx][ny] = dist[x][y] + 1;
      
      if(nx === ex && ny === ey) {
        found = true;
        break;
      }
      
      queue.push([nx, ny]);
    }
  }
  
  answer.push(dist[ex][ey]);
}

console.log(answer.join('\n'));