// dp数组的含义: dp[i]表示到达第i个楼梯需要的花费
var minCostClimbingStairs = function (cost) {
  const dp = [0, 0, Math.min(cost[0], cost[1])];
  const n = cost.length; // 要到达的楼顶n阶
  for (let i = 3; i <= n; i++) {
    dp[i] = Math.min(cost[i - 1] + dp[i - 1], cost[i - 2] + dp[i - 2])
  }
  return dp[n]
};
const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
const result = minCostClimbingStairs(cost)
console.log(result);