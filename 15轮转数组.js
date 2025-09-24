var rotate = function (nums, k) {
  k = k % nums.length;
  if (k === 0) return;
  const item = nums.splice(nums.length - k)
  nums.unshift(...item)
};