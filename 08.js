// leetcode 03 无重复字符的最长子串
var lengthOfLongestSubstring = function (s) {
  const map = new Map();
  let left = 0
  let max = 0
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i]) && map.get(s[i]) >= left) {
      // 有重复，更新左指针
      const val = map.get(s[i])
      left = val + 1;
    }
    max = Math.max(max, i - left + 1);
    map.set(s[i], i)
  }
  return max;
}
const s = "abcabcbb"
const result = lengthOfLongestSubstring(s)
console.log(result)
