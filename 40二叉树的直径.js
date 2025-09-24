const diameterOfBinaryTree = function (root) {
  let maxDepth = 0
  const deep = (root) => {
    if (!root) return 0;
    const leftLen = deep(root.left);
    const rightLen = deep(root.right);
    const curLen = leftLen + rightLen;
    maxDepth = Math.max(curLen, maxDepth);
    return Math.max(leftLen, rightLen) + 1
  }
  deep(root)
  return maxDepth;
}

const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: {
        val: 6,
        left: {
          val: 10
        }
      },
      right: {
        val: 7
      }
    },
    right: {
      val: 5,
      left: {
        val: 8,
      }, right: {
        val: 9
      }
    }
  },
  right: {
    val: 3,
    left: {
      val: 4
    },
  }
}

const result = diameterOfBinaryTree(root);
console.log(result)