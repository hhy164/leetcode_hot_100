// 首先遍历第一遍记录所有腐烂橘子坐标，并且统计新鲜橘子的数量
// 广搜遍历腐烂橘子的四个方向，每次记得把当前这一圈的腐烂橘子都要遍历一圈，这时算一分钟
// 遍历完所有的腐烂橘子以后，如果还剩下新鲜橘子，说明无法将所有橘子腐烂，返回-1

const grid = [[0, 2]]
const n = grid.length;
const m = grid[0].length;

var orangesRotting = function (grid) {
  const queue = [];
  let time = 0, fresh = 0;
  // 统计新鲜橘子数量
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        fresh++
      }
      if (grid[i][j] === 2) {
        queue.push([i, j])
      }
    }
  }
  const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  while (queue.length && fresh) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const cur = queue.shift();
      // 遍历四个方向
      for (let i = 0; i < 4; i++) {
        const nextX = cur[0] + directions[i][0];
        const nextY = cur[1] + directions[i][1];
        // 越界处理
        if (nextX < 0 || nextX >= n || nextY < 0 || nextY >= m) {
          continue;
        }
        if (grid[nextX][nextY] === 1) {
          fresh--
          grid[nextX][nextY] = 2;
          queue.push([nextX, nextY])
        }
      }
    }
    time++
  }
  if (fresh) {
    return -1
  }
  return time;
};

console.log(orangesRotting(grid))