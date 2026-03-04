const input = require("fs").readFileSync('/dev/stdin').toString().trim(); 
const N = Number(input);

let answer = 0;

for(let i = 1; i <= N; i++) {
  let num = [...String(i)].map(Number);
  
  const diff = num[0] - num[1];
  let isSame = true;
  
  for(let j = 2; j < num.length; j++) {
    if(num[j - 1] - num[j] != diff) {
      isSame = false;
      break;
    }
  }
  
  if(isSame) answer++;
}

console.log(answer);
