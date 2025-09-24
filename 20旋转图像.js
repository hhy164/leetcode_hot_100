var rotate = function (matrix) {
  let top = 0, bottom = matrix.length - 1;
  while (top < bottom) {
    for (let i = top; i < bottom; i++) {
      // 第一次角变换
      const temp = matrix[top][i]
      matrix[top][i] = matrix[bottom - i + top][top]

      // // 第二次角变换
      matrix[bottom - i + top][top] = matrix[bottom][bottom - i + top]

      // // 第三次角变换
      matrix[bottom][bottom - i + top] = matrix[i][bottom]

      // // 第四次角变换
      matrix[i][bottom] = temp
    }
    top++
    bottom--
  }
  return matrix
}