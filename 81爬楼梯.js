var climbStairs = function (n) {
  dp = [0, 1, 2]
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
};

const result = climbStairs(44);
console.log(result)