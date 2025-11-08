var sortColors = function (nums) {
  let left = 0, right = nums.length - 1;
  let i = 0;
  while (i <= right) {
    if (nums[i] === 0) {
      const temp = nums[i];
      nums[i] = nums[left];
      nums[left] = temp;
      left++
      i++
      continue;
    }
    if (nums[i] === 2) {
      // 交换位置
      const temp = nums[i];
      nums[i] = nums[right];
      nums[right] = temp;
      right--;
      continue
    }
    i++
  }
}

const nums = [1, 2, 0];
console.log(sortColors(nums))
// 排序的方法：冒泡 选择 插入 归并 快速 
// 1.冒泡排序：反复交换相邻元素，每一轮把最大的元素移动到最右边，就像气泡往上冒一样
var bubbleSort = function (nums) {
  let right = nums.length;
  while (right > 0) {
    for (let j = 0; j < right - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        // 交换位置
        const temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
    right--;
  }
  return nums;
};

// 2. 选择排序：每一次遍历完成，找到最小的元素放到对应的位置
const selectSort = (nums) => {
  let left = 0;
  while (left < nums.length - 1) {
    let min = Infinity, minIndex = 0;
    for (let i = left; i < nums.length; i++) {
      if (nums[i] < min) {
        min = nums[i];
        minIndex = i;
      }
    }
    // 进行交换
    const temp = nums[left];
    nums[left] = min;
    nums[minIndex] = temp;
    left++
  }
  return nums;
}
// 3.插入排序 插入的时候二分查找对应的位置
const insertSort = (nums) => {
  // [0,i]是排序好的区间
  let i = 0;
  while (i < nums.length - 1) {
    // 寻找[0,i]中要插入的位置点;
    let left = 0, right = i;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[i + 1] > nums[mid]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    const value = nums[i + 1];
    nums.splice(left, 0, value);
    // 删除原来的元素
    nums.splice(i + 2, 1);
    i++
  }
  return nums;
}

// 4.归并排序, 利用递归，把大问题拆解成小问题，使用分治算法
// 通过不断拆分，拆分到最后left是len=1的数组,right也是len=1的数组，此时进行mergeArr可以合并成一个有序数组
const mergeSort = (nums) => {
  // 合并两个有序数组成一个有序数组
  const mergeArr = (nums1, nums2) => {
    let left1 = 0, left2 = 0;
    let newArr = [];
    while (left1 < nums1.length && left2 < nums2.length) {
      if (nums1[left1] < nums2[left2]) {
        newArr.push(nums1[left1]);
        left1++;
      } else {
        newArr.push(nums2[left2])
        left2++;
      }
    }
    if (left1 < nums1.length) {
      newArr.push(...nums1.slice(left1))
    }
    if (left2 < nums2.length) {
      newArr.push(...nums2.slice(left2))
    }
    return newArr;
  }
  if (nums.length === 1) return nums;
  const mid = Math.floor(nums.length / 2);
  const left = mergeSort(nums.slice(0, mid));
  const right = mergeSort(nums.slice(mid));
  return mergeArr(left, right);
}

// 快速排序
const quickSort = (nums) => {
  const dp = (nums, i, j) => {
    const pivot = nums[i];
    let type = 'left'; // left表示左侧有空位，right表示右侧有空位
    let left = i, right = j;
    while (left < right) {
      if (type === 'left') {
        // 比较右侧元素
        if (nums[right] < pivot) {
          // 放到左侧
          type = 'right';
          nums[left] = nums[right];
          left++;
        } else {
          right--
        }
      } else {
        // 比较左侧元素
        if (nums[left] > pivot) {
          // 放到右侧
          type = 'left';
          nums[right] = nums[left];
          right--;
        } else {
          left++
        }
      }
    }
    nums[left] = pivot;
    i < left - 1 && dp(nums, i, left - 1);
    // 假设i和j是边界元素的时候,比如现在j=4,right=4，此时right是区间的最后一个元素,right+1就会大于j
    right + 1 < j && dp(nums, right + 1, j);
  }
  dp(nums, 0, nums.length - 1);
  return nums;
}