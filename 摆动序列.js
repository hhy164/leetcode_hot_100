var wiggleMaxLength = function (nums) {
  if (nums.length === 1) return 1;
  let prediff = nums[1] - nums[0], curdiff = 0, result = nums[0] === nums[1] ? 1 : 2;
  for (let i = 1; i < nums.length - 1; i++) {
    curdiff = nums[i + 1] - nums[i];
    if (prediff >= 0 && curdiff < 0 || prediff <= 0 && curdiff > 0) {
      result++;
      prediff = curdiff;
    }
  }
  return result;
};

const nums = [1, 2, 1]
console.log(wiggleMaxLength(nums))

