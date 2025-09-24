// leetcode 1047 删除字符串中的所有相邻重复项

var removeDuplicates = function (s) {
  let stack = [];
  for (const item of s) {
    const end = stack.pop();
    if (end !== item) {
      stack.push(end);
      stack.push(item)
    }
  }
  return stack.join('')
};

const s = "abbaca"
const result = removeDuplicates(s)
console.log(result)