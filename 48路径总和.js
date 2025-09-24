var pathSum = function (root, targetSum) {
  const map = new Map();
  map.set(0, 1);
  let count = 0; // 满足条件的路径
  const deep = (root, sum) => {
    if (!root) return;
    const curSum = sum + root.val;
    const diff = curSum - targetSum
    if (map.has(diff)) {
      count += map.get(diff);
    }
    if (map.has(curSum)) {
      map.set(curSum, map.get(curSum) + 1)
    } else {
      map.set(curSum, 1)
    }
    // 左
    root.left && deep(root.left, curSum)
    // 右
    root.right && deep(root.right, curSum)
    // 回溯
    map.set(curSum, map.get(curSum) - 1)
  }
  deep(root, 0)
  return count;
};

const root = {
  val: 1,
  left: {
    val: -2
  },
  right: {
    val: -3
  }
}

const result = pathSum(root, -1)
console.log(result)