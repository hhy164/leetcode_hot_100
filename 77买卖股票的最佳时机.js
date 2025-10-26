// 参考最大子数组和:leetcode 53
var maxProfit = function (prices) {
  let result = 0, count = 0;
  for (let i = 1; i < prices.length; i++) {
    const profit = prices[i] - prices[i - 1]
    if (count < 0) {
      count = profit;
    } else {
      count += profit;
    }
    result = Math.max(result, count);
  }
  return result;
};

const prices = [7, 6, 4, 3, 1]
const result = maxProfit(prices);
console.log(result)