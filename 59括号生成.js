
var generateParenthesis = function (n) {
  let result = [];
  const deep = (str, left, right) => {
    if (str.length === n * 2) {
      result.push(str);
      return;
    }
    if (left < n) {
      // 继续加入左括号
      deep(str + '(', left + 1, right);
    }
    if (right < left) {
      // 加入右括号
      deep(str + ')', left, right + 1)
    }
  }
  deep('', 0, 0)
  return result;
};
const n = 3;
const result = generateParenthesis(n);
console.log(result)