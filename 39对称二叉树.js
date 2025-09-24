const isSymmetric = function (root) {
  const queue = [root.left, root.right]
  while (queue.length) {
    const left = queue.shift();
    const right = queue.shift();
    if (!left && right) return false;
    if (left && !right) return false;
    if (!left && !right) continue;
    if (left.val !== right.val) return false;
    queue.push(left.left)
    queue.push(right.right)
    queue.push(left.right)
    queue.push(right.left)
  }
  return true;
}
// 关键点：内侧和内侧比较，外侧和外侧比较

const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: null,
      right: null
    }
  },
  right: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 3,
      left: null,
      right: null
    }
  }
}

const result = isSymmetric(root);
console.log(result)