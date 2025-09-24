// leetcode 66 加一
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] + 1 === 10) {
      // 进1
      digits[i] = 0
    } else {
      digits[i] = digits[i] + 1
      return digits
    }
  }
  // 如果所有位数都是9，需要在最前面+1
  digits.unshift(1)
  return digits
};
const digits = [9, 9, 9]
console.log(plusOne(digits))