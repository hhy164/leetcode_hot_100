var groupAnagrams = function (strs) {
  const map = new Map();
  for (let i = 0; i < strs.length; i++) {
    // 排序
    const newStr = [...strs[i]].sort().join('');
    const list = map.get(newStr) || [];
    list.push(strs[i])
    map.set(newStr, list);
  }
  return [...map.values()]
};