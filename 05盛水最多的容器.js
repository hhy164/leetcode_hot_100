var maxArea = function (height) {
  let left = 0, right = height.length - 1;
  let max = 0;
  while (left < right) {
    let min = Math.min(height[left], height[right])
    const area = (right - left) * min;
    max = Math.max(max, area)
    if (min === height[left]) {
      // 左边值更小
      left++
    } else {
      right--
    }
  }
  return max;
};