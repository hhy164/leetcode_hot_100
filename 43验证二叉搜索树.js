var isValidBST = function (root) {
  let result = true;
  let maxValue = -Infinity;
  const deep = (root) => {
    if (!root || !result) return
    root.left && deep(root.left)
    if (maxValue >= root.val) {
      result = false;
    } else {
      maxValue = root.val;
    }
    root.right && deep(root.right)
  }
  deep(root)
  return result;
};

const root = {
  val: 2,
  left: {
    val: 1,
  },
  right: {
    val: 3
  }
}

const result = isValidBST(root)
console.log(result)