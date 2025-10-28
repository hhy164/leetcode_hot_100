// 首先考虑把每个加油站减去消耗量的剩余油量求出
// 计算从0开始累积到当前位置是否油量不够，如果不够就从下一个位置重新出发计算
var canCompleteCircuit = function (gas, cost) {
  let cur = 0;
  let sum = 0; // 累计油量
  let preSum = 0;
  for (let i = cur; i < gas.length; i++) {
    sum += gas[i] - cost[i];
    if (sum < 0) {
      cur = i + 1;
      preSum += sum;
      sum = 0;
    }
  }
  if (sum + preSum < 0) {
    return -1;
  } else {
    return cur;
  }
};

const gas = [2, 3, 4], cost = [3, 4, 3]
const result = canCompleteCircuit(gas, cost);
console.log(result)