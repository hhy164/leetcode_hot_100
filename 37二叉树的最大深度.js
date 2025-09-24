const maxDepth = function (root) {
  const deep = (root) => {
    if (!root) return 0;
    const leftLen = deep(root.left);
    const rightLen = deep(root.right);
    return Math.max(leftLen + rightLen) + 1;
  }
  return deep(root);
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

const result = maxDepth(root)
console.log(result)