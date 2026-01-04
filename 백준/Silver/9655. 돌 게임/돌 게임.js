const input = require("fs").readFileSync('/dev/stdin').toString().trim(); 
const N = Number(input);

console.log(N % 2 === 1 ? 'SK' : 'CY');