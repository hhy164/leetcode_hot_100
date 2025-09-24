// leetcode 111 二叉树的最小深度
var minDepth = function (root) {
  if (!root) return 0;
  const stack = [[root, 1]]
  while (stack.length) {
    const [obj, number] = stack.shift();
    // 没有左子树和右子树
    if (!obj.left && !obj.right) {
      return number;
    }
    if (obj.left) {
      stack.push([obj.left, number + 1])
    }
    if (obj.right) {
      stack.push([obj.right, number + 1])
    }
  }
};

const tree = {
  val: '1',
  left: {
    val: '2',
    left: {
      val: '4',
      left: null,
      right: null
    },
    right: {
      val: '5',
      left: null,
      right: null
    }
  },
  right: {
    val: '3',
    left: {
      val: '6',
      left: null,
      right: null
    },
    right: {
      val: '7',
      left: null,
      right: null
    }
  }
}
const result = minDepth(tree)
console.log(result)
