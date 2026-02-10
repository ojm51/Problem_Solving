const input = require("fs").readFileSync('/dev/stdin').toString().trim(); 
const N = Number(input);

const moves = [];

// 1. n - 1개의 원판을 via로 이동
// 2. 가장 큰 원판을 to로 이동(고정 = 배열 삽입)
// 3. 옮겨뒀던 나머지 원판도 to로 이동
// 4. 이때 원판이 1개라면 via를 거치지 않고 바로 to로 이동 후 함수 종료
const hanoi = (n, from, to, via) => {
  if(n === 1) {
    moves.push(`${from} ${to}`);
    return;
  }
  
  hanoi(n - 1, from, via, to);
  moves.push(`${from} ${to}`);
  hanoi(n - 1, via, to, from);
}

const moveCount = (2 ** N) - 1;
hanoi(N, 1, 3, 2);

console.log(moveCount);
console.log(moves.join('\n'));