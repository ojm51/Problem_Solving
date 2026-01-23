const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const [N, M] = input[0].split(' ').map(Number);
let [r, c, d] = input[1].split(' ').map(Number);

const room = [];
input.slice(2).forEach((line, idx) => {
  room.push(line.split(' ').map(Number));
});

// 북동남서(문제 순서대로)
const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

let count = 0;

while(true) {
  // 1. 현재 칸 청소(0: 청소안됨, 1: 벽, 2: 청소됨)
  if(room[r][c] === 0) {
    room[r][c] = 2;
    count++;
  }
  
  let isMoved = false;
  
  // 2. 반시계 방향 90도 회전
  for(let i = 0; i < 4; i++) {
    d = (d + 3) % 4;
    const nr = r + directions[d][0];
    const nc = c + directions[d][1];
    
    // 3 - 1. 이동
    if(room[nr][nc] === 0) {
      r = nr;
      c = nc;
      isMoved = true;
      break;
    }
  }
  
  // 3 - 2. 후진
  if(!isMoved) {
    const backD = (d + 2) % 4;
    const br = r + directions[backD][0];
    const bc = c + directions[backD][1];
    
    // 4. 종료: 뒤가 벽인 경우
    if(room[br][bc] === 1) break;
    
    r = br;
    c = bc;
  }
}

console.log(count);