var merge = function (intervals) {
  // 排序
  intervals.sort((a, b) => a[0] - b[0])
  let result = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const item = result[result.length - 1];
    if (intervals[i][0] <= item[1]) {
      // 重叠
      item[1] = Math.max(item[1], intervals[i][1])
    } else {
      // 不重叠
      result.push(intervals[i])
    }
  }
  return result;
}
const intervals = [[4, 7], [1, 4]]
const result = merge(intervals);
console.log(result)