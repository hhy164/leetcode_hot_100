// 可能一个图删掉冗余的边就可以变成一棵树，所以现在需要找到这个冗余的边
// 找到最后一次出现的冗余的边

const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').split('\n');
let father = [];

function main() {
  let result = ''; // 记录冗余的边
  init(input.length);
  for (let i = 1; i < input.length; i++) {
    const [s, t] = input[i].split(' ').map(Number);
    if (isSame(s, t)) {
      result = `${s} ${t}`;
    } else {
      join(s, t);
    }
  }
  return result;
}
// 将两个元素添加到同一个集合
function join(a, b) {
  // 首先判断两个元素是否已经在同一个集合
  const u = find(a);
  const v = find(b);
  // 不在同一个集合
  if (u !== v) {
    father[u] = v;
  }
}

// 判断两个元素是否在同一个集合
function isSame(a, b) {
  // 找到a的根节点，b的根节点，判断是否相等
  const u = find(a);
  const v = find(b);
  return u === v;
}

//查找根节点,根节点的father是自己
function find(a) {
  if (a === father[a]) return a;
  // u表示a的根节点
  u = find(father[a]);
  // 让a直接指向根节点
  father[a] = u;
  return u;
}
// 初始化
function init(n) {
  for (let i = 1; i < n; i++) {
    father[i] = i;
  }
}

console.log(main())