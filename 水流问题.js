// 解决思路，设置两个边界，左上 右下
// 然后从边界往里推，里面的如果比外层的大，那么就标记为true
// 只要两个边界的这个点都是true，则说明这个水流可以向两边界同时流动
const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').split('\n');
const grid = [];
for (let i = 1; i < input.length; i++) {
  grid.push(input[i].split(' '))
}
const firBorder = [];
const secBorder = [];
for (let i = 0; i < grid.length; i++) {
  firBorder[i] = []
  secBorder[i] = []
  for (let j = 0; j < grid[i].length; j++) {
    firBorder[i][j] = false;
    secBorder[i][j] = false;
  }
}

const dfs = (grid, visited, x, y) => {
  const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  if (visited[x][y]) return;
  visited[x][y] = true;
  for (let i = 0; i < 4; i++) {
    const nextX = x + directions[i][0];
    const nextY = y + directions[i][1];
    // 越界处理
    if (nextX < 0 || nextX >= grid.length || nextY < 0 || nextY >= grid[0].length) {
      continue;
    }
    if (grid[nextX][nextY] > grid[x][y]) {
      dfs(grid, visited, nextX, nextY)
    }
  }
}

const main = (grid) => {
  let result = [];
  for (let i = 0; i < grid.length; i++) {
    dfs(grid, firBorder, i, 0);
    dfs(grid, secBorder, i, grid[0].length - 1)
  }
  for (let j = 0; j < grid[0].length; j++) {
    dfs(grid, firBorder, 0, j)
    dfs(grid, secBorder, grid.length - 1, j);
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (firBorder[i][j] && secBorder[i][j]) {
        result.push(`${i} ${j}`)
      }
    }
  }
  return result.join('\n');
}

console.log(main(grid))