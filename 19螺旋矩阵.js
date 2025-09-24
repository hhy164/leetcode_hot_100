var spiralOrder = function (matrix) {
  let left = 0, right = matrix[0].length - 1;
  let top = 0, bottom = matrix.length - 1;
  let nums = [];
  while (left <= right && top <= bottom) {
    // 从左向右
    for (let i = left; i <= right; i++) {
      nums.push(matrix[top][i])
    }
    // 上边界下移
    top++;
    // 从上往下
    for (let i = top; i <= bottom; i++) {
      nums.push(matrix[i][right])
    }
    // 右边界收缩
    right--;
    if (top <= bottom) {
      // 从右向左
      for (let i = right; i >= left; i--) {
        nums.push(matrix[bottom][i])
      }
      bottom--
    }
    if (left <= right) {
      // 从下往上
      for (let i = bottom; i >= top; i--) {
        nums.push(matrix[i][left])
      }
      left++
    }
  }
  return nums;
};

