function isValid(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      // 左括号
      stack.push(s[i])
    } else if (s[i] === ')') {
      const item = stack.pop();
      if (item !== '(') return false;
    } else if (s[i] === ']') {
      const item = stack.pop();
      if (item !== '[') return false;
    } else {
      const item = stack.pop();
      if (item !== '{') return false;
    }
  }
  return stack.length === 0
}
const s = "(()"
const result = isValid(s);
console.log(result)