const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n'); 
const [N, K] = input[0].split(' ').map(Number);

const tree = {};
input.slice(1).forEach(line => {
  const [p, l, r] = line.split(' ');
  tree[p] = [l, r];
});

const preorder = (node) => {
  if(node === '.') return '';
  return node + preorder(tree[node][0]) + preorder(tree[node][1]);
};

const inorder = (node) => {
  if(node === '.') return '';
  return inorder(tree[node][0]) + node + inorder(tree[node][1]);
};

const postorder = (node) => {
  if(node === '.') return '';
  return postorder(tree[node][0]) + postorder(tree[node][1]) + node;
};

const answer = [preorder('A'), inorder('A'), postorder('A')];

console.log(answer.join('\n'));