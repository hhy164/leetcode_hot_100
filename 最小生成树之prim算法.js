// 最小生成树是从图里面找到一颗树，路径最短，联通了所有的点
const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').split('\n');
const [n, m] = input[0].split(' ').map(Number);
// 1.非生成树距离生成树距离最近的节点
// 2.加入生成树
// 3.更新所有非生成树到生成树距离

const graph = Array.from({ length: n + 1 }, () => []); // 邻接矩阵

for (let i = 1; i < input.length; i++) {
  const [s, t, dis] = input[i].split(' ').map(Number);
  graph[s][t] = dis; // s-t
  graph[t][s] = dis; // t->s
}
// 存储生成树
const isIntree = Array.from({ length: n + 1 }, () => false);
const minDistance = Array.from({ length: n + 1 }, () => Infinity);
// 初始化节点1为生成树
isIntree[1] = true;
let cur = 1;
for (let i = 1; i <= n; i++) {
  graph[cur].forEach((item, index) => {
    if (!isIntree[index] && item) {
      minDistance[index] = Math.min(minDistance[index], graph[cur][index]);
    }
  })
  let min = Infinity;
  // 找到下一个生成树
  for (let i = 2; i < minDistance.length; i++) {
    if (!isIntree[i] && minDistance[i] < min) {
      cur = i;
      min = minDistance[i]
    }
  }
  isIntree[cur] = true;
}

// 求和
let result = 0;
for (let i = 2; i < minDistance.length; i++) {
  result += minDistance[i];
}

console.log(result)