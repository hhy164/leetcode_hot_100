// Dijkstra算法作用：有向有权图中求最短路径 
// 1.选距离源点最近且未访问过的点
// 2.标记改点为访问过
// 3.更新所有未访问节点到源点距离minDistance

function simpleDijkstra() {
  const fs = require('fs');
  const input = fs.readFileSync(0, 'utf-8').split('\n');
  const [n, m] = input[0].split(' ').map(Number);
  // 邻接矩阵存储
  const graph = Array.from({ length: n + 1 }, () => [])
  for (let i = 1; i < input.length; i++) {
    const [s, t, val] = input[i].split(' ').map(Number);
    graph[s][t] = val;
  }
  // 初始化minDis
  const minDistance = Array(n + 1).fill(Infinity)
  const visited = Array(n + 1).fill(false);
  minDistance[1] = 0; // 初始化起点为0
  for (let i = 1; i <= n; i++) {
    let minVal = Infinity, cur = 0;
    for (let j = 0; j <= n; j++) {
      if (minDistance[j] < minVal && !visited[j]) {
        minVal = minDistance[j];
        cur = j;
      }
    }
    visited[cur] = true;
    for (let j = 1; j <= n; j++) {
      if (!visited[j] && minDistance[cur] + graph[cur][j] < minDistance[j]) {
        minDistance[j] = minDistance[cur] + graph[cur][j];
      }
    }
  }

  return minDistance[minDistance.length - 1] === Infinity ? -1 : minDistance[minDistance.length - 1]
}
console.log(simpleDijkstra())

