var lengthOfLongestSubstring = function (s) {
  const map = new Map();
  let left = 0, max = 0;
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) { // 是否有重复子串
      const val = map.get(s[i])
      if (val >= left) {
        left = val + 1;
      }
    }
    max = Math.max(i - left + 1, max)
    map.set(s[i], i)
  }
  return max;
}