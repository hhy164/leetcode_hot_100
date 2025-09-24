// leetcode 144 翻转二叉树
var mirrorTree = function (root) {
  if (!root) return root;
  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  mirrorTree(root.left);
  mirrorTree(root.right);
  return root
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
const result = mirrorTree(tree)
console.log(result)