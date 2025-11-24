function package(weight, value, maxWeight) {
  const dp = new Array(maxWeight + 1).fill(0);
  for (let i = 0; i < weight.length; i++) {
    for (let j = maxWeight; j > 0; j--) {
      if (weight[i] <= j) {
        // 当前背包需要的重量小于j，说明可以取走
        dp[j] = Math.max(dp[j], value[i] + dp[j - weight[i]]);
      }
    }
  }
  return dp[dp.length - 1]
}

const weight = [1, 3, 4]
const value = [15, 20, 30];
const result = package(weight, value, 4);
console.log(result)