// leetcode 104 二叉树的最大深度
var maxDepth = function (root) {
  if (!root) return 0;
  const stack = [[root, 1]];
  let count = 0;
  while (stack.length) {
    const [obj, number] = stack.shift();
    if (obj.left) {
      stack.push([obj.left, number + 1]);
    }
    if (obj.right) {
      stack.push([obj.right, number + 1]);
    }
    if (obj.left || obj.right) {
      count = number + 1
    }
  }
  return count
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
const result = maxDepth(tree)
console.log(result)