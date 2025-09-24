const maxSlidingWindow = function (nums, k) {
  let result = []
  let arr = nums.slice(0, k)
  for (let i = k; i <= nums.length; i++) {
    const max = getMaxValue(arr)
    result.push(max)
    arr.shift()
    arr.push(nums[i])
  }
  return result;
}
function getMaxValue(arr) {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i])
  }
  return max;
}