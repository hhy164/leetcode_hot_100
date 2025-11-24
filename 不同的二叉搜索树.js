var numTrees = function (n) {
  const dp = [0, 1, 2];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] * 2 + dp[i - 2];
  }
  return dp[n];
};
const res = numTrees(3);
console.log(res)