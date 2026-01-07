const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const area = input.slice(1).map(line => line.split(' ').map(Number));

const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

let maxH = 0;
for(let row of area) {
  for(let col of row) {
    maxH = Math.max(maxH, col);
  }
}

const bfs = (sx, sy, h, visited) => {
  const queue = [[sx, sy]];
  visited[sx][sy] = true;
  
  let head = 0;
  while(head < queue.length) {
    const [x, y] = queue[head++];

    for(let [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if(nx < 0 || ny < 0 || nx >= N || ny >= N) continue;
      if(visited[nx][ny]) continue;
      if(area[nx][ny] <= h) continue;
      
      visited[nx][ny] = true;
      queue.push([nx, ny]);
    }
  }
};

let answer = 0;

for(let h = 0; h <= maxH; h++) {
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  let count = 0;

  for(let i = 0; i < N; i++) {
    for(let j = 0; j < N; j++) {
      if(!visited[i][j] && area[i][j] > h) {
        bfs(i, j, h, visited);
        count++;
      }
    }
  }
  
  answer = Math.max(answer, count);
}

console.log(answer);