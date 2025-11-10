// 维护单调递减栈，新入栈的元素需要与栈内每个元素进行比较，如果栈中存在比入栈元素更小的就pop出来
// stack存储的是索引值
var dailyTemperatures = function (temperatures) {
  let stack = [0], result = Array.from({ length: temperatures.length }, () => 0);
  for (let i = 1; i < temperatures.length; i++) {
    const item = temperatures[i]
    while (stack.length && temperatures[stack[stack.length - 1]] < item) {
      // 由于是单调递减栈，所以栈的最后一个元素是最小的，比较一下当前元素与栈内最小元素的大小
      const index = stack.pop();
      result[index] = i - index;
    }
    stack.push(i);
  }
  return result;
}
const temperatures = [73, 74, 75, 71, 71, 72, 76, 73];
const result = dailyTemperatures(temperatures);
console.log(result)