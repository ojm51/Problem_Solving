const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const [N, K] = input[0].split(' ').map(Number);

const tree = {};
input.slice(1).forEach(line => {
  const [p, l, r] = line.split(' ');
  tree[p] = [l, r];
});

let preResult = '';
const preorder = (node) => {
  if(node === '.') return;
  
  preResult += node;
  preorder(tree[node][0]);
  preorder(tree[node][1]);
};

let inResult = '';
const inorder = (node) => {
  if(node === '.') return;
  
  inorder(tree[node][0]);
  inResult += node;
  inorder(tree[node][1]);
};

let postResult = '';
const postorder = (node) => {
  if(node === '.') return;
  
  postorder(tree[node][0]);
  postorder(tree[node][1]);
  postResult += node;
};

preorder('A');
inorder('A');
postorder('A');

const answer = [preResult, inResult, postResult];

console.log(answer.join('\n'));