// leetcode 349 两数组交集
var intersection = function (nums1, nums2) {
  const newSet1 = new Set(nums1);
  const newNums2 = [...new Set(nums2)];
  const result = newNums2.filter((item) => newSet1.has(item))
  return result;
};

