const invertTree = function (root) {
  const deep = (root) => {
    if (!root) return;
    // 左
    deep(root.left);
    // 右
    deep(root.right);
    // 中
    const tempRoot = root.left;
    root.left = root.right;
    root.right = tempRoot;
  }
  deep(root)
  return root;
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

const result = invertTree(root)
console.log(result)