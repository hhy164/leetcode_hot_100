var searchMatrix = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    let left = 0;
    let right = matrix[i].length - 1;
    if (matrix[i][right] === target) {
      return true;
    } else if (matrix[i][right] < target) {
      continue;
    } else {
      while (left <= right) {
        const mid = parseInt((left + right) / 2);
        if (matrix[i][mid] === target) {
          return true;
        } else if (matrix[i][mid] > target) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }
      return false;
    }
  };
  return false;
}
const matrix = [[1]], target = 2;
const result = searchMatrix(matrix, target);
console.log(result)