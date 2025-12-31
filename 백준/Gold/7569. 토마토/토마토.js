const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const [col, row, height] = input[0].split(' ').map(Number);

const directions = [
  [1, 0, 0], 
  [0, 1, 0],
  [0, 0, 1],
  [-1, 0, 0],
  [0, -1, 0],
  [0, 0, -1]
];

const tomatos = Array.from({ length: height }, () => Array.from({ length: row }, () => Array(col)));
let idx = 1;
for(let h = 0; h < height; h++) {
  for(let r = 0; r < row; r++) {
    tomatos[h][r] = input[idx++].split(' ').map(Number);
  }
}

const days = Array.from({ length: height }, () => Array.from({ length: row }, () => Array(col).fill(-1)));
const queue = [];
for(let h = 0; h < height; h++) {
  for(let r = 0; r < row; r++) {
    for(let c = 0; c < col; c++) {
      if(tomatos[h][r][c] === 1) {
        days[h][r][c] = 0;
        queue.push([h, r, c]);
      }
    }
  }
}

let head = 0;
while(head < queue.length) {
  const [h, r, c] = queue[head++];
  
  for(let [dh, dr, dc] of directions) {
    const nh = h + dh;
    const nr = r + dr;
    const nc = c + dc;
    
    if(nh < 0 || nr < 0 || nc < 0 || nh >= height || nr >= row || nc >= col) continue;
    if(tomatos[nh][nr][nc] !== 0) continue;
    if(days[nh][nr][nc] !== -1) continue;
    
    tomatos[nh][nr][nc] = 1;
    days[nh][nr][nc] = days[h][r][c] + 1;
    queue.push([nh, nr, nc]);
  }
}

let found = false;
let maxDay = 0;
for(let h = 0; h < height; h++) {
  for(let r = 0; r < row; r++) {
    for(let c = 0; c < col; c++) {
      if(tomatos[h][r][c] === 0) {
        found = true;
        maxDay = -1;
        break;
      }
      maxDay = Math.max(maxDay, days[h][r][c]);
    }
    if(found) break;
  }
  if(found) break;
}

console.log(maxDay);