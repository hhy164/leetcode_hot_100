var findMinArrowShots = function (points) {
  // 首先按照左边界从小到大来排序
  points.sort((a, b) => a[0] - b[0])
  let arrows = 1;
  let minRight = points[0][1]; // 最小右边界
  for (let i = 1; i < points.length; i++) {
    if (points[i][0] <= minRight) {
      // 重叠
      minRight = Math.min(minRight, points[i][1])
    } else {
      arrows++
      minRight = points[i][1];
    }
  }
  return arrows;
};

const points = [[0, 9], [1, 8], [7, 8], [1, 6], [9, 16], [7, 13], [7, 10], [6, 11], [6, 9], [9, 13]]
const result = findMinArrowShots(points);
console.log(result);