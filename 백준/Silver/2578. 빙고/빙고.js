const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 

const board = [];
input.slice(0, 5).forEach(line => {
  board.push(line.split(' ').map(Number));
});

const nums = [];
input.slice(5).forEach(line => {
  nums.push(...line.split(' ').map(Number));
});

const bingo = Array.from({ length: 5 }, () => Array(5).fill(false));

// 빙고 개수 카운트
const countBingo = () => {
  let count = 0;
  
  // 가로
  for(let i = 0; i < 5; i++) {
    if(bingo[i].every(v => v)) count++;
  }
  
  // 세로
  for(let i = 0; i < 5; i++) {
    let check = true;
    for(let j = 0; j < 5; j++) {
      if(!bingo[j][i]) {
        check = false;
        break;
      }
    }
    
    if(check) count++;
  }
  
  // 대각선
  let check = true;
  for(let j = 0; j < 5; j++) {
    if(!bingo[j][j]) {
      check = false;
      break;
    }
  }
  if(check) count++;

  check = true;
  for(let j = 0; j < 5; j++) {
    if(!bingo[j][4 - j]) {
      check = false;
      break;
    }
  }
  if(check) count++;
  
  return count;
};

// 숫자를 하나씩 부르며 빙고판 체크
let answer = 0;
for(let i = 0; i < nums.length; i++) {
  const num = nums[i];
  
  for(let r = 0; r < 5; r++) {
    const c = board[r].indexOf(num);
    
    if(c !== -1) {
      bingo[r][c] = true;
      break;
    }
  }
  
  if(countBingo() >= 3) {
    answer = i + 1;
    break;
  }
}

console.log(answer);