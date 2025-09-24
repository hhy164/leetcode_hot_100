var searchMatrix = function (matrix, target) {
  let startRow = 0, endCol = matrix[0].length - 1;
  // 从右上角开始
  while (startRow < matrix.length && endCol >= 0) {
    if (matrix[startRow][endCol] === target) {
      return true
    } else if (matrix[startRow][endCol] > target) {
      endCol--
    } else {
      startRow++
    }
  }
  return false
};