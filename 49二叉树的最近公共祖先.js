var lowestCommonAncestor = function (root, p, q) {
  const deep = (root) => {
    if (root === p || root === q || !root) return root;
    // 左
    const left = deep(root.left)
    // 右
    const right = deep(root.right)
    // 中
    if (left && right) return root;
    if (left && !right) return left;
    if (!left && right) return right;
  }
  return deep(root);
};

const q = { val: 4 }

const p = {
  val: 5,
  left: {
    val: 6
  },
  right: {
    val: 2,
    left: { val: 7 },
    right: q
  }
}

const root = {
  val: 3,
  left: p,
  right: {
    val: 1,
    left: { val: 0 },
    right: { val: 8 }
  }
}
const result = lowestCommonAncestor(root, p, q)
console.log(result)