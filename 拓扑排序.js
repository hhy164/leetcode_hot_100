/** 拓扑排序解决此类问题：
 *  1. 当要下载A软件，就必须要下载B软件，这种有依赖关系的情况下，要线性输出依赖关系就需要拓扑排序
 *  2. 当你学习一门课程A之前必须先学习B课程，也是一样的，需要先找出依赖关系，知道最开始学什么课程，依次学习课程的顺序
*/
const fs = require('fs')
const input = fs.readFileSync(0, 'utf-8').split('\n');
const [n, m] = input[0].split(' ').map(Number)
// 1.找入度为0的节点
// 2.删掉入度为0的节点

const indgree = Array.from({ length: n }, () => 0); // 统计如度
const map = new Map();
for (let i = 1; i < input.length; i++) {
  const [s, t] = input[i].split(' ').map(Number);
  if (map.has(s)) {
    map.get(s).push(t)
  } else {
    map.set(s, [t])
  }
  indgree[t]++;
}
const queue = [];
for (let i = 0; i < n; i++) {
  if (indgree[i] === 0) {
    queue.push(i)
  }
}
let result = [];
while (queue.length) {
  const cur = queue.shift();
  result.push(cur);
  const value = map.get(cur);
  if (!value) continue;
  for (const item of value) {
    indgree[item]--
    if (indgree[item] === 0) {
      queue.push(item)
    }
  }
}
if (result.length !== n) {
  console.log(-1)
} else {
  console.log(result.join(' '))
}
