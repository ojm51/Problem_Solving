const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const [N, K] = input[0].split(' ').map(Number);
const coins = input.slice(1).map(Number).reverse();

let change = K;
let answer = 0;

for(let coin of coins) {
  if(change === 0) break;
  answer += Math.floor(change / coin);
  change %= coin;
}

console.log(answer);