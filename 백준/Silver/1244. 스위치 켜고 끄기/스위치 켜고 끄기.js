const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const S = Number(input[0]);
const switchs = [null];
switchs.push(...input[1].split(' ').map(Number));
const N = Number(input[2]);
const students = input.slice(3);

const changeSwitchState = (num) => (switchs[num] === 1) ? 0 : 1;

students.forEach(student => {
  const [gender, num] = student.split(' ').map(Number);
  
  if(gender === 1) {
    for(let i = num; i <= S; i = i + num) {
      switchs[i] = changeSwitchState(i);
    }
  }
  else {
    const min = Math.min(num - 1, S - num);
    switchs[num] = changeSwitchState(num);
    
    for(let i = 1; i <= min; i++) {  // 타겟 스위치와의 거리
      const head = num - i;
      const tail = num + i;
      
      if(head < 1 || num + i > S) break;
      if(switchs[head] !== switchs[tail]) break;
      
      if(switchs[head] === switchs[tail]) {
        switchs[head] = changeSwitchState(head);
        switchs[tail] = changeSwitchState(tail);
      }
    }
  }
});

const result = switchs.slice(1);
for(let i = 0; i < result.length; i += 20) {
  console.log(result.slice(i, i + 20).join(' '));
}