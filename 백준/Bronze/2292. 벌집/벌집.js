const input = require("fs").readFileSync('/dev/stdin').toString().trim(); 
const N = Number(input);

let layer = 1;
let max = 1;

while(N > max) {
  max += layer++ * 6;
}

console.log(layer);