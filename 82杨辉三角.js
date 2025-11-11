var generate = function (numRows) {
  const dp = [[1]];
  for (let i = 1; i < numRows; i++) {
    const arr = [1];
    for (let j = 0; j < dp[i - 1].length - 1; j++) {
      arr.push(dp[i - 1][j] + dp[i - 1][j + 1]);
    }
    arr.push(1);
    dp[i] = arr;
  }
  return dp;
};
const numRows = 5;
const result = generate(numRows);
console.log(result)