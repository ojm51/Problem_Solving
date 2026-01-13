const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const grid = input.slice(1).map(line => line.split(''));

const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1]
];

let queue = [];
let visited = Array.from({ length: N }, () => Array(N).fill(false));

let head = 0;

const isSameColorBlind = (a, b) => {
  if(a === 'B' || b === 'B') return a === b;
  return true;  // R, G 조합이면 무조건 true
}

const bfs = (sx, sy, isBlind) => {
  queue.push([sx, sy]);
  visited[sx][sy] = true;
  
  while(head < queue.length) {
    const [x, y] = queue[head++];

    for(let [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if(nx < 0 || ny < 0 || nx >= N || ny >= N) continue;
      if(visited[nx][ny]) continue;
      
      if(isBlind) {
        if(!isSameColorBlind(grid[nx][ny], grid[x][y])) continue;
      } 
      else {
        if(grid[nx][ny] !== grid[x][y]) continue;
      }
      
      visited[nx][ny] = true;
      queue.push([nx, ny]);
    }
  }
}

let notBlind = 0;
let blind = 0;

for(let i = 0; i < 2; i++) {
  for(let x = 0; x < N; x++) {
    for(let y = 0; y < N; y++) {
      if(visited[x][y]) continue;

      const isBlind = i === 1;
      bfs(x, y, isBlind);
      
      i === 0 ? notBlind++ : blind++;
    }
  }
  
  queue = [];
  visited = Array.from({ length: N }, () => Array(N).fill(false));
  head = 0;
}

console.log(notBlind, blind);