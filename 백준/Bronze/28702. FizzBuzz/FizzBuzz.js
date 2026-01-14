const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n');
const strToNum = input.map(Number);

let nextNum = 0;
strToNum.forEach((e, idx) => {
  if(!Number.isNaN(e)) nextNum = e + (3 - idx);
});

const fizzbuzz = (num) => {
  if(num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
  if(num % 3 === 0 && num % 5 !== 0) return 'Fizz';
  if(num % 3 !== 0 && num % 5 === 0) return 'Buzz';
  if(num % 3 !== 0 && num % 5 !== 0) return num;
};

console.log(fizzbuzz(nextNum));