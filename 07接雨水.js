var trap = function (height) {
  const len = height.length;
  // 单调栈
  const stack = [0];
  let result = 0;
  for (let i = 1; i < len; i++) {
    while (stack.length && height[i] > height[stack[stack.length - 1]]) {
      const index = stack.pop();
      if (stack.length) {
        const diffHeight = Math.min(height[i], height[stack[stack.length - 1]]) - height[index];
        result += diffHeight * (i - stack[stack.length - 1] - 1)
      }
    }
    stack.push(i);
  }
  return result;
};