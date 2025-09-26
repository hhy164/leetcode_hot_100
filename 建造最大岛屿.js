const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').split('\n');
const [n, m] = input[0].split(' ');
const grid = [];
for (let i = 1; i < input.length; i++) {
  grid.push(input[i].split(' '))
}

const map = new Map();
let count = 0;
const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];

const main = (grid) => {
  const visited = getVisited(grid);
  let mark = 2;
  // 深搜遍历整个地图，记录岛屿情况;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === '1' && !visited[i][j]) {
        count = 0;
        dfs(grid, visited, i, j, mark);
        map.set(mark, count)
        mark++
      }
    }
  }
  let result = 0;

  // 广搜遍历把周围的海洋
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const set = new Set();
      if (grid[i][j] === '0') {
        for (let k = 0; k < 4; k++) {
          const newI = i + directions[k][0];
          const newJ = j + directions[k][1];
          // 越界判断
          if (newI < 0 || newI >= n || newJ < 0 || newJ >= m) {
            continue;
          }
          if (grid[newI][newJ] !== '0') {
            set.add(grid[newI][newJ])
          }
        }
        const newCount = [...set].reduce((cur, item) => cur + map.get(item), 0)
        result = Math.max(result, newCount + 1)
      }
    }
  }
  if (result === 0) {
    // 说明全是陆地
    return map.get(2)
  }
  return result;
}

const dfs = (grid, visited, x, y, mark) => {
  count++;
  visited[x][y] = true;
  grid[x][y] = mark;
  for (let i = 0; i < 4; i++) {
    const nextX = x + directions[i][0];
    const nextY = y + directions[i][1];
    if (nextX < 0 || nextX >= n || nextY < 0 || nextY >= m) {
      continue;
    }
    if (grid[nextX][nextY] === '1' && !visited[nextX][nextY]) {
      visited[nextX][nextY] = true;
      dfs(grid, visited, nextX, nextY, mark);
    }
  }
}

const getVisited = (grid) => {
  const visited = []
  for (let i = 0; i < n; i++) {
    visited[i] = []
    for (let j = 0; j < m; j++) {
      visited[i][j] = false;
    }
  }
  return visited
}

console.log(main(grid))