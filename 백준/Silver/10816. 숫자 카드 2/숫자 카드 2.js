const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n');
const sanggeuns = input[1].split(' ').map(Number);
const cards = input[3].split(' ').map(Number);

const sanggeunsMap = new Map();
sanggeuns.forEach(num => sanggeunsMap.set(num, (sanggeunsMap.get(num) ?? 0) + 1));

const answer = [];
cards.forEach(card => answer.push(sanggeunsMap.get(card) ?? 0));

console.log(answer.join(' '));