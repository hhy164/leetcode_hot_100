var merge = function (intervals) {
  // 按照左边界进行排序
  intervals.sort((a, b) => a[0] - b[0])
  let result = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const item = result[result.length - 1]
    if (item[1] >= intervals[i][0]) {
      // 有重叠，需要合并
      item[1] = Math.max(item[1], intervals[i][1])
    } else {
      // 无重叠
      result.push(intervals[i])
    }
  }
  return result
};