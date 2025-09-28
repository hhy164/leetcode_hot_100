const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').split('\n');
const [n, m] = input[0].split(' ').map(Number);
const father = [];
// 并查集初始化
function init() {
  for (let i = 0; i < n; i++) {
    father[i] = i;
  }
}

// 查找父节点，并且把当前节点直接和根节点相连
function find(u) {
  if (u === father[u]) return u;
  father[u] = find(father[u]);
  return father[u];
}

function isSame(a, b) {
  a = find(a);
  b = find(b);
  return a === b;
}

// 添加进入并查集合
function join(a, b) {
  a = find(a);
  b = find(b);
  if (!isSame(a, b)) {
    father[a] = b;
  }
}

function main() {
  init();
  for (let i = 1; i <= m; i++) {
    const [s, t] = input[i].split(' ').map(Number);
    join(s, t); // father[1] = 2
  }
  const [s, t] = input[m + 1].split(' ').map(Number);
  if (find(s) === find(t)) {
    return 1;
  }
  return 0;
}
console.log(main())