var minWindow = function (s, t) {
  if (s.length < t.length) return "";
  let todo = t.length; // 记录还差多少个字母
  let map = frequencyMap(t);
  let slow = 0; // 左滑窗
  let result;
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    if (map.has(item)) { // 需要的字母
      if (map.get(item) > 0) { // 判断此字母是否还缺少
        todo--;
      }
      // 更新字母频次
      map.set(item, map.get(item) - 1);
      while (todo === 0) { // 覆盖所有子串，左窗口滑动缩小范围
        // 记录最小子串
        let ans = s.slice(slow, i + 1);
        if (!result || ans.length <= result.length) {
          result = ans
        }
        if (map.has(s[slow])) {
          map.set(s[slow], map.get(s[slow]) + 1);
          if (map.get(s[slow]) > 0) {
            todo++
          }
        }
        slow++
      }
    }
  }
  return result || "";
};
// 记录每个字母需要出现的频数
function frequencyMap(s) {
  const map = new Map();
  for (const item of s) {
    map.set(item, (map.get(item) || 0) + 1);
  }
  return map;
}
