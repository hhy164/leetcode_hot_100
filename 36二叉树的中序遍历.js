var inorderTraversal = function (root) {
  const result = [];
  const deep = (root) => {
    if (!root) return;
    // 左
    deep(root.left)
    // 中
    result.push(root.val)
    // 右
    deep(root.right)
  }
  deep(root)
  return result;
}

const root = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: null
  }
}

const result = inorderTraversal(root)
console.log(result)
