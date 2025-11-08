// dp[i]表示数字i的最大乘积
var integerBreak = function (n) {
  dp = [0, 0, 1];
  for (let i = 3; i <= n; i++) {
    let mid1 = Math.floor(i / 2);
    dp[i] = 0;
    for (let j = 1; j <= i - mid1; j++) {
      dp[i] = Math.max(j * (i - j), j * dp[i - j], dp[i])
    }
  }
  return dp[n];
};
const n = 8;
const result = integerBreak(n);
console.log(result);