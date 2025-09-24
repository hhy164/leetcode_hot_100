const grid = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1']
]

var numIslands = function (grid) {
  const visited = getVisited(grid);
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1' && !visited[i][j]) {
        count++;
        visited[i][j] = true;
        bfs(grid, visited, i, j);
      }
    }
  }
  return count;
};

const bfs = (grid, visited, x, y) => {
  const directions = [[0, 1], [1, 0], [-1, 0], [0, -1]]
  // 队列
  const queue = [];
  queue.push([x, y]);
  console.log(queue)
  while (queue.length) {
    // 取元素
    const cur = queue.shift();
    for (let i = 0; i < directions.length; i++) {
      const nextX = cur[0] + directions[i][0];
      const nextY = cur[1] + directions[i][1];
      if (nextX < 0 || nextX >= grid.length || nextY < 0 || nextY >= grid[0].length) {
        // 边界条件不处理
        continue;
      }
      if (grid[nextX][nextY] === '1' && !visited[nextX][nextY]) {
        queue.push([nextX, nextY]);
        visited[nextX][nextY] = true;
      }
    }
  }
}

const getVisited = (grid) => {
  const visited = [];
  for (let i = 0; i < grid.length; i++) {
    visited[i] = []
    for (let j = 0; j < grid[0].length; j++) {
      visited[i][j] = false;
    }
  }
  return visited;
}

console.log(numIslands(grid))