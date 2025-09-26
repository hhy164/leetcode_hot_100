// 孤岛：四周都是水的陆地
// 要计算孤岛总面积，可以先把外层的陆地以及周边的陆地都设置为0，然后再看还有多少个1就是孤岛

const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').split('\n');
const grid = [];
for (let i = 1; i < input.length; i++) {
  grid.push(input[i].split(' '))
}

const main = (grid) => {
  // 把边上的陆地以及相邻的陆地设置为海洋
  for (let i = 0; i < grid.length; i++) {
    if (grid[i][0] === '1') {
      bfs(grid, i, 0);
    }
    if (grid[i][grid[0].length - 1] === '1') {
      bfs(grid, i, grid[0].length - 1);
    }
  }
  for (let j = 0; j < grid[0].length; j++) {
    if (grid[0][j] === '1') {
      bfs(grid, 0, j)
    }
    if (grid[grid.length - 1][j] === '1') {
      bfs(grid, grid.length - 1, j)
    }
  }

  // 查找剩余的陆地
  let count = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        count++
      }
    }
  }
  return count;
}

// 广度优先搜索
const bfs = (grid, x, y) => {
  const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  const queue = [];
  queue.push([x, y])
  grid[x][y] = '0'
  while (queue.length) {
    const cur = queue.shift();
    for (let i = 0; i < directions.length; i++) {
      const nextX = cur[0] + directions[i][0];
      const nextY = cur[1] + directions[i][1];
      // 边界处理
      if (nextX > 0 || nextX <= grid.length || nextY > 0 || nextY <= grid[0].length) {
        continue;
      }
      if (grid[nextX][nextY] === '1') {
        queue.push([nextX, nextY]);
        grid[nextX][nextY] = '0'
      }
    }
  }
}

console.log(main(grid))