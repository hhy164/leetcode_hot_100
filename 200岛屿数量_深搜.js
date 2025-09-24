const grid = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1']
]
// 初始化把所有的都标记为false
const visited = []
const getVisited = (grid) => {
  for (let i = 0; i < grid.length; i++) {
    visited[i] = []
    for (let j = 0; j < grid[i].length; j++) {
      visited[i][j] = false;
    }
  }
}

// 定义方向{x,y}
const direction = [[0, 1], [1, 0], [-1, 0], [0, -1]]

// 深度优先搜索
const dfs = (grid, visited, x, y) => {
  for (let i = 0; i < direction.length; i++) {
    const nextX = x + direction[i][0];
    const nextY = y + direction[i][1];
    if (nextX < 0 || nextX >= grid.length || nextY < 0 || nextY >= grid[0].length) {
      // 越界,则不处理当前节点
      continue;
    }
    if (grid[nextX][nextY] === '1' && !visited[nextX][nextY]) {
      visited[nextX][nextY] = true;
      dfs(grid, visited, nextX, nextY)
    }
  }
}

const main = (grid) => {
  // 标记
  getVisited(grid)
  let result = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1' && !visited[i][j]) {
        // 没有访问过的陆地
        result++;
        // 标记为访问过
        visited[i][j] = true;
        // 把周围的陆地都标记为访问过
        dfs(grid, visited, i, j);
      }
    }
  }
  return result;
}

console.log(main(grid))


// 深搜三部曲
// 1.确定递归函数和参数
// 2.确定终止条件
// 3.确定单层递归逻辑