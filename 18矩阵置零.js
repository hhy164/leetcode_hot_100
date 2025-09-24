var setZeroes = function (matrix) {
  const aLen = matrix.length;
  const bLen = matrix[0].length;
  const zeroPosition = []; // 0的位置

  // 查找为0元素的坐标
  for (let i = 0; i < aLen; i++) {
    for (let j = 0; j < bLen; j++) {
      if (matrix[i][j] === 0) {
        zeroPosition.push([i, j])
      }
    }
  }
  // 设置0操作
  for (let i = 0; i < zeroPosition.length; i++) {
    const x = zeroPosition[i][0] // 2
    const y = zeroPosition[i][1] // 1
    for (let j = 0; j < aLen; j++) {
      matrix[j][y] = 0
    }
    for (let j = 0; j < bLen; j++) {
      matrix[x][j] = 0
    }
  }
  return matrix
};