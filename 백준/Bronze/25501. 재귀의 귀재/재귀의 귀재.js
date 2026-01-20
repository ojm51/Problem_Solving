const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const T = Number(input[0]);

const answer = [];

for(let t = 1; t <= T; t++) {
  let count = 0;
  
  const recursion = (str, s, e) => {
    count++;
    if(s >= e) return 1;
    else if(str[s] !== str[e]) return 0;
    else return recursion(str, s + 1, e - 1);
  }
  
  const isPalindrom = (str) => {
    return recursion(str, 0, str.length - 1);
  }
  
  answer.push(`${isPalindrom(input[t])} ${count}`);
}

console.log(answer.join('\n'));