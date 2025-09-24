// leetcode 144 二叉树的前序遍历
var preorderTraversal = function (root) {
  const result = []
  const fn = (node) => {
    if (node) {
      // 先加入根节点
      result.push(node.val);
      // 遍历左子树
      fn(node.left);
      // 遍历右子树
      fn(node.right);
    }
  }
  fn(root);
  return result
};