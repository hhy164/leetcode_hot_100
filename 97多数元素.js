var majorityElement = function (nums) {
  if (nums.length === 1) return nums[0]
  const map = new Map();
  const mid = parseInt(nums.length / 2);
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      const value = map.get(nums[i]);
      if (value + 1 > mid) return nums[i];
      map.set(nums[i], value + 1);
    } else {
      map.set(nums[i], 1)
    }
  }
}
const nums = [1]
console.log(majorityElement(nums));