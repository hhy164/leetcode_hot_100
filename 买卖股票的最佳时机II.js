var maxProfit = function (prices) {
  let result = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - prices[i - 1] > 0) {
      result += prices[i] - prices[i - 1]
    }
  }
  return result;
}

const prices = [7, 1, 5, 3, 6, 4]
const result = maxProfit(prices);
console.log(result)