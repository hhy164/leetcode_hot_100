// 利用单调栈解决，维护单调递减的栈，遇到更大的元素就把前面小的元素pop出来
// 单调栈中存储索引
var trap = function (height) {
  const stack = [0];
  let result = 0;
  for (let i = 1; i < height.length; i++) {
    const item = height[i];
    while (stack.length && item > height[stack[stack.length - 1]]) {
      const index = stack.pop();
      if (stack.length) {
        const lastHeight = height[stack[stack.length - 1]];
        const min = Math.min(lastHeight, item);
        const diff = min - height[index];
        const area = diff * (i - stack[stack.length - 1] - 1)
        result += area;
      }
    }
    stack.push(i);
  }
  return result;
}

const height = [4, 2, 0, 3, 2, 5]
const result = trap(height);
console.log(result)