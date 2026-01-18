const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const N = Number(input[0]);
const shirts = input[1].split(' ').map(Number);
const [T, P] = input[2].split(' ').map(Number);

let shirtNum = 0;
shirts.forEach(shirt => shirtNum += Math.ceil(shirt / T));

let pensNum = Math.floor(N / P);
let penNum = N % P;

console.log(shirtNum);
console.log(pensNum, penNum);