// leetcode 70 爬楼梯
// var climbStairs = function (n) {
//   // if (n === 1 || n === 2) return n
//   // return climbStairs(n - 1) + climbStairs(n - 2)
//   const result = []
//   result[0] = 1
//   result[1] = 2
//   for (let i = 2; i < n; i++) {
//     result[i] = result[i - 1] + result[i - 2]
//   }
//   return result[n]
// };
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const dp = [1, 1, 2];
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

const n = 44;
console.log(climbStairs(n))