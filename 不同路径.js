// dp表示到达坐标{i,j}的格子的路径数
var uniquePaths = function (m, n) {
  const dp = [];
  dp[0] = Array.from({ length: n }, () => 1);
  for (let i = 1; i <= m; i++) {
    dp[i] = [1]
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }
  return dp[m - 1][n - 1]
};
const m = 3, n = 7
const result = uniquePaths(m, n)
console.log(result)