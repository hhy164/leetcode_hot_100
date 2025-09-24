// leetcode 1207 独一无二的出现次数
var uniqueOccurrences = function (arr) {
  const map = new Map();
  for (const item of arr) {
    if (map.has(item)) {
      const val = map.get(item);
      map.set(item, val + 1)
    } else {
      map.set(item, 1)
    }
  }
  const result = [];
  for (const item of map) {
    result.push(item[1])
  }
  const set = [...new Set(result)]
  if (result.length !== set.length) {
    return false
  } else {
    return true
  }
};
const arr = [1, 2, 2, 1, 1, 3]

const result = uniqueOccurrences(arr)
console.log(result)