// leetcode20 有效的括号
var isValid = function (s) {
  let stack = [];
  for (const item of s) {
    if (item === '(' || item === '{' || item === '[') {
      // 入栈
      stack.push(item)
    } else {
      if (!stack.length) return false
      const end = stack[stack.length - 1];
      if (item === ')' && end === '(' || item === ']' && end === '[' || item === '}' && end === '{') {
        // 如果能配对成功，则出栈
        stack.pop()
      } else {
        return false;
      }

    }
  }
  // 最终数组是空的，则返回true
  return stack.length === 0;
};

s = "]"
const result = isValid(s);
console.log(result)