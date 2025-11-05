// dp[i]表示移动到当前的网格的路径数量
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const dp = obstacleGrid[0][0] === 0 ? [[1]] : [[0]]
  // 初始化dp
  for (let i = 1; i < m; i++) {
    if (obstacleGrid[i][0] === 1) {
      dp[i] = [0]
    } else {
      dp[i] = [dp[i - 1][0]]
    }
  }
  for (let i = 1; i < n; i++) {
    if (obstacleGrid[0][i] === 1) {
      dp[0][i] = 0;
    } else {
      dp[0][i] = dp[0][i - 1]
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      }
    }
  }
  return dp[m - 1][n - 1];
};

const obstacleGrid = [[0, 0, 0], [0, 1, 0], [0, 0, 0]]
const result = uniquePathsWithObstacles(obstacleGrid);
console.log(result)