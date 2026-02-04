const input = require("fs").readFileSync('/dev/stdin').toString().trim(); 
const X = Number(input);

// 몇 번째 줄인지 구하기
let line = 0;
let sum = 0;
while(sum < X) {
  line++;
  sum += line;
}

sum -= line;

// 몇 번째 분수인지 구하기
let child = 0;
let parent = 0;
for(let i = 1; i <= line; i++) {
  if(sum + i === X) {
    if(line % 2 === 1) {
      child = line + 1 - i;
      parent = i;
    }
    else {
      child = i;
      parent = line + 1 - i;
    }
    break;
  }
}

console.log(`${child}/${parent}`);