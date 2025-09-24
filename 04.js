// leetcode 387 字符串中的第一个唯一字符
var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i
    }
  }
  return -1
}
const s = "leetcode"
const result = firstUniqChar(s);
console.log(result); 