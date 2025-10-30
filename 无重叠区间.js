var eraseOverlappoints = function (points) {
  // 排序
  points.sort((a, b) => a[0] - b[0])
  let arrows = 0;
  let minRight = points[0][1];
  for (let i = 1; i < points.length; i++) {
    if (points[i][0] < minRight) {
      // 重叠
      arrows++
      minRight = Math.min(minRight, points[i][1])
    } else {
      // 不重叠
      minRight = points[i][1]
    }
  }
  return arrows;
};

const points = [[1, 2], [2, 3]]
const result = eraseOverlappoints(points);
console.log(result)