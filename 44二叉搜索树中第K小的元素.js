var kthSmallest = function (root, k) {
  let result;
  const deep = (root) => {
    // 终止条件
    if (!root || result !== undefined) return;
    // 左
    deep(root.left)
    // 中
    k--
    if (k === 0) {
      result = root.val
    }
    // 右
    deep(root.right)
  }
  deep(root)
  return result
};

const root = {
  val: 3,
  left: {
    val: 1,
    right: { val: 2 }
  },
  right: { val: 4 }
}

const result = kthSmallest(root, 1)
console.log(result)