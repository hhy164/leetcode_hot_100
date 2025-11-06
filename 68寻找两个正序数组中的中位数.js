// 方法一
var findMedianSortedArrays = function (nums1, nums2) {
  const len1 = nums1.length;
  const len2 = nums2.length;
  if (len1 === 1 && len2 === 1) return (nums1[0] + nums2[0]) / 2;
  const mid = parseInt((len1 + len2 + 1) / 2) - 1;
  let i = parseInt((len1 + 1) / 2) - 1;
  let j = mid - i - 1;
  while (i >= 0 && nums1[i] > nums2[j + 1]) {
    i--;
    j++;
  }
  while (j >= 0 && nums2[j] > nums1[i + 1]) {
    j--;
    i++
  }
  console.log(i, j)
  const isOdd = (len1 + len2) % 2 === 1;
  if (i < 0) {
    if (isOdd) {
      return nums2[j];
    } else {
      const mid2 = Math.min(nums1[0] || Infinity, nums2[j + 1] || Infinity);
      return (nums2[j] + mid2) / 2;
    }
  }
  if (j < 0) {
    if (isOdd) {
      return nums1[i]
    } else {
      const mid2 = Math.min(nums1[i + 1] || Infinity, nums2[0] || Infinity);
      return (nums1[i] + mid2) / 2;
    }
  }
  if (isOdd) {
    return Math.max(nums1[i], nums2[j]);
  } else {
    // 偶数
    const mid1 = Math.max(nums1[i], nums2[j]);
    let mid2 = Math.min(nums1[i + 1] || Infinity, nums2[j + 1] || Infinity);
    if (mid2 === Infinity) mid2 = 0;
    return (mid1 + mid2) / 2
  }
};

// 方法二
const findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }
  const len1 = nums1.length;
  const len2 = nums2.length;
  // 如果短数组为空，直接返回中位数
  if (len1 === 0) {
    const mid = Math.floor(len2 / 2);
    return len2 % 2 ? nums2[mid] : (nums2[mid - 1] + nums2[mid]) / 2;
  }

  const totalLeftConst = Math.floor((len1 + len2 + 1) / 2); // 左侧应该包含的元素数量

  let left = -1, right = len1 - 1;
  while (left <= right) {
    const i = Math.floor((left + right) / 2);         // i: nums1 左侧最后一个元素的索引（-1 表示左侧为空）
    const j = totalLeftConst - i - 2;                // j: nums2 左侧最后一个元素的索引（可能为 -1）

    const left1 = i < 0 ? -Infinity : nums1[i];
    const right1 = i + 1 >= len1 ? Infinity : nums1[i + 1];
    const left2 = j < 0 ? -Infinity : nums2[j];
    const right2 = j + 1 >= len2 ? Infinity : nums2[j + 1];

    if (left1 <= right2 && left2 <= right1) {
      const isOdd = (len1 + len2) % 2 === 1;
      if (isOdd) return Math.max(left1, left2);
      return (Math.max(left1, left2) + Math.min(right1, right2)) / 2;
    } else if (left1 > right2) {
      right = i - 1;
    } else {
      left = i + 1;
    }
  }

  return 0;
};
const nums1 = [1], nums2 = [2, 3, 4]
const result = findMedianSortedArrays(nums1, nums2)
console.log(result)