const fs = require('fs');
// 0表示标准输入流 stdin 对应键盘输入
const input = fs.readFileSync(0, 'utf8').trim().split('\n');
// n个点，m条边
const [n, m] = input[0].split(' ');
// 构造邻接矩阵图
const main = () => {
  const graph = Array.from({ length: n }).fill().map(() => Array.from({ length: n }))
  for (let i = 1; i < input.length; i++) {
    const [s, t] = input[i].split(' ');
    graph[s][t] = 1
  }
  return graph
}

const graph = main();

// result是二维数组放结果集，path是单一路径
let result = [], path = [];
/**
 * 
 * @param {*} graph 图 
 * @param {*} x 起点
 * @param {*} y 终点
 */
const deepGraph = (graph, x, y) => {
  if (x === n) {
    // 终点
    result.push(path)
    return;
  }
  for (let i = 1; i <= n; i++) {
    if (graph[x][i]) {
      path.push(graph[x][i]);
      deepGraph(graph, i, n);
      path.pop();
    }
  }
}

deepGraph(graph, 1, n);

console.log(result);