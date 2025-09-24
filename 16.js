// leetcode 169 多数元素
var majorityElement = function (nums) {
  const count = Math.floor(nums.length / 2)
  const map = new Map()
  for (const item of nums) {
    if (map.has(item)) {
      const value = map.get(item) + 1
      map.set(item, value)
    } else {
      map.set(item, 1)
    }
  }
  for (const [key, value] of map) {
    if (value > count) {
      return key
    }
  }
};
const nums = [3, 2, 3]
console.log(majorityElement(nums))
