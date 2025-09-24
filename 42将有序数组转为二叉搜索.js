var sortedArrayToBST = function (nums) {
  let left = 0, right = nums.length - 1;
  const deep = (nums, left, right) => {
    if (right < left) return null;
    const mid = Math.floor((left + right) / 2);
    const root = new TreeNode(nums[mid]);
    root.left = deep(nums, left, mid - 1)
    root.right = deep(nums, mid + 1, right);
    return root;
  }
  return deep(nums, left, right)
};

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const nums = [-10, -3, 0, 5, 9]
const result = sortedArrayToBST(nums)
console.log(result)