const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const ladders = new Map();
const snakes = new Map();
input.slice(1).forEach((line, idx) => {
  const [s, e] = line.split(' ').map(Number);
  (idx < N) ? ladders.set(s, e) : snakes.set(s, e);
});

const dist = Array(101).fill(-1);  // 현재 칸까지 오는 데 필요한 최소 주사위 횟수
dist[1] = 0;

const queue = [1];
let head = 0;

while(head < queue.length) {
  const curr = queue[head++];
  
  for(let dice = 1; dice <= 6; dice++) {
    let next = curr + dice;
    
    if(next > 100) continue;
    
    if(ladders.has(next)) next = ladders.get(next);
    else if(snakes.has(next)) next = snakes.get(next);
    
    if(dist[next] !== -1) continue;
    
    dist[next] = dist[curr] + 1;
    queue.push(next);
  }
}

console.log(dist[100]);