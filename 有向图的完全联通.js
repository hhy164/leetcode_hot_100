// 点少边多-邻接矩阵, 棋盘问题，比较稠密，邻接矩阵
// 点多边少-邻接表, 比如几亿用户，但是每个用户只关注几百人，悉数图，邻接表

const main = () => {
  const fs = require('fs');
  const input = fs.readFileSync(0, 'utf-8').split('\n');
  const [n, m] = input[0].split(' ').map(Number);
  const graph = [[]];
  // 存储邻接表
  for (let i = 1; i <= m; i++) {
    const [s, t] = input[i].split(' ').map(Number);
    if (graph[s]) {
      graph[s].push(t)
    } else {
      graph[s] = [t]
    }
  }
  console.log(graph)
  const visited = Array(n + 1).fill(false);
  dfs(graph, 1, visited, n);
  // 判断是否visited中不存在false;
  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      return -1
    }
  }
  return 1;
}

const dfs = (grid, start, visited) => {
  if (visited[start]) return;
  visited[start] = true;
  const notes = grid[start] || [];
  for (let i = 0; i < notes.length; i++) {
    dfs(grid, notes[i], visited)
  }
}

console.log(main());