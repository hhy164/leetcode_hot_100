/**
 * 深度优先搜索+回溯
 * @param {*} board 
 * @param {*} word 
 */
var exist = function (board, word) {
  const n = board.length;
  const m = board[0].length;
  const used = Array.from({ length: n }, () => Array.from({ length: m }, () => false));
  const direction = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  const backtrack = (x, y, index) => {
    // 已经匹配到完整单词
    if (index === word.length) return true;
    used[x][y] = true;
    for (const [dx, dy] of direction) {
      const nextX = x + dx;
      const nextY = y + dy;
      // 越界判断
      if (nextX >= 0 && nextX < n && nextY >= 0 && nextY < m && !used[nextX][nextY] && board[nextX][nextY] === word[index]) {
        if (backtrack(nextX, nextY, index + 1)) return true;
      }
    }
    used[x][y] = false;
    return false;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === word[0]) {
        used[i][j] = true;
        if (backtrack(i, j, 1)) return true;
        used[i][j] = false;
      }
    }
  }
  return false;
};

const board = [["C", "A", "A"], ["A", "A", "A"], ["B", "C", "D"]], word = "A"
const result = exist(board, word);
console.log(result);