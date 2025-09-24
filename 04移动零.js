var moveZeroes = function (nums) {
  let slow = 0; // 指向0的位置，初始值为0项
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      const temp = nums[i];
      nums[i] = nums[slow];
      nums[slow] = temp;
      slow++
    }
  }
  return nums;
};