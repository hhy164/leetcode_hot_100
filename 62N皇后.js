var solveNQueens = function (n) {
  // 初始化n*n的二位数组作为棋盘
  const dashboard = Array.from({ length: n }, () => Array.from({ length: n }, () => '.'));
  let result = [];
  const backtrack = (dashboard, n, row) => {
    if (row === n) {
      // 说明每一行都放置了皇后，可以收集结果啦
      result.push(dashboard.map(item => item.join('')));
      return;
    }
    for (let i = 0; i < n; i++) {
      if (isValid(dashboard, row, i, n)) {
        dashboard[row][i] = 'Q';
        backtrack(dashboard, n, row + 1);
        // 回溯
        dashboard[row][i] = '.'
      }
    }
  }
  const isValid = (dashboard, row, col, n) => {
    if (row === 0) return true;
    // 判断是否在同一列
    for (let i = 0; i < n; i++) {
      if (dashboard[i][col] === 'Q') {
        return false;
      }
    }
    let curRow = row, curCol = col;
    // 判断是否在45度角
    while (curRow > 0 && curCol > 0) {
      const nextRow = curRow - 1;
      const nextCol = curCol - 1;
      if (dashboard[nextRow][nextCol] === 'Q') {
        return false;
      }
      curRow--;
      curCol--;
    }
    curRow = row, curCol = col;
    // 判断是否在135度角
    while (curRow > 0 && curCol < n - 1) {
      const nextRow = curRow - 1;
      const nextCol = curCol + 1;
      if (dashboard[nextRow][nextCol] === 'Q') {
        return false;
      }
      curRow--
      curCol++
    }
    return true;
  }

  backtrack(dashboard, n, 0);
  return result;
};

const n = 4;
const result = solveNQueens(n);
console.log(result);