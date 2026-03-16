const input = require("fs").readFileSync('/dev/stdin').toString().trim();
const [a, b] = input.split(' ').map(Number);

const gcd = (a, b) => {
  while(b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
}

const lcm = (a, b) => a * b / gcd(a, b);

console.log(gcd(a, b));
console.log(lcm(a, b));