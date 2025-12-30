const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const [col, row] = input[0].split(' ').map(Number);
const tomatos = input.slice(1).map(line => line.split(' ').map(Number));

const direction = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1]
];

const queue = [];
for(let i = 0; i < row; i++) {
  for(let j = 0; j < col; j++) {
    if(tomatos[i][j] === 1) queue.push([i, j]);
  }
}

// 핵심: 해당 토마토가 언제(며칠에) 익었는지 저장 
// -> 걸린 일수 = 마지막으로 익은 날짜 - 1(원래 익어있던 토마토는 1이었으므로)
let head = 0;
while(head < queue.length) {
  const [x, y] = queue[head++];
  
  for(let [dx, dy] of direction) {
    const nx = x + dx;
    const ny = y + dy;
    
    if(nx < 0 || ny < 0 || nx >= row || ny >= col) continue;
    if(tomatos[nx][ny] !== 0) continue;
    
    tomatos[nx][ny] = tomatos[x][y] + 1;
    queue.push([nx, ny]);
  }
}

let maxDay = 0;
let isImpossible = false;
for(let i = 0; i < row; i++) {
  for(let j = 0; j < col; j++) {
    // 안 익은 토마토가 있는 경우
    if(tomatos[i][j] === 0) {
      maxDay = -1;
      isImpossible = true;
      break;
    }
    maxDay = Math.max(maxDay, tomatos[i][j]);
  }
  if(isImpossible) break;
}

console.log(isImpossible ? maxDay : maxDay - 1);