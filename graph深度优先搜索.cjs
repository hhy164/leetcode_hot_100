// 深度优先搜索
const fs = require('fs');
// 第一个参数0表示输入流stdin
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');
// n个节点 m条边
const [n, m] = input[0].split(' ').map(Number);
const graph = Array.from({ length: n + 1 }, () => Array.from({ length: n + 1 }).fill(0))
// 构造图邻接矩阵
for (let i = 1; i < input.length; i++) {
  const [s, t] = input[i].split(' ').map(Number);
  graph[s][t] = 1;
}

let result = [], path = [1];
const deepGraph = (graph, start, n) => {
  if (start === n) {
    result.push([...path]);
    return;
  }
  for (let i = 1; i <= n; i++) {
    if (graph[start][i] === 1) {
      path.push(i);
      deepGraph(graph, i, n);
      path.pop();
    }
  }
}
deepGraph(graph, 1, n)

if (result.length === 0) {
  console.log(-1)
} else {
  for (let p of result) {
    console.log(p.join(' '))
  }
}

