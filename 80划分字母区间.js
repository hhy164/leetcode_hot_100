var partitionLabels = function (s) {
  // 记录一下每个元素出现的最远位置
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], i)
  }
  console.log(map)
  let left = 0, right = 0;
  let result = [];
  for (let i = 0; i < s.length; i++) {
    right = Math.max(right, map.get(s[i]));
    if (i === right) {
      // 说明此处包含了所有元素
      result.push(right - left + 1);
      left = right + 1;
    }
  }
  return result;
}
const s = "ababcbacadefegdehijhklij";
const result = partitionLabels(s);
console.log(result)