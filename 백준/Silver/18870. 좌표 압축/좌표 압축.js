const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const N = Number(input[0]);
const nums = input[1].split(' ').map(Number);

const sortedSetNums = [...new Set(nums)].sort((a, b) => a - b);

const map = new Map();
sortedSetNums.forEach((val, idx) => map.set(val, idx));

const answer = nums.map(num => map.get(num));
console.log(answer.join(' '));