const input = require("fs").readFileSync('/dev/stdin').toString().trim(); 
const N = Number(input);

const answer = ((2 ** N) + 1) ** 2;
console.log(answer);