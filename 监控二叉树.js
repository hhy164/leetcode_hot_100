// 需要从下往上遍历二叉树，后序遍历(左右中)
var minCameraCover = function (root) {
  let result = 0;
  const deep = (node) => {
    if (!node) return 2;
    // 左
    const left = deep(node.left)
    //  右
    const right = deep(node.right)
    // 中 - 逻辑处理
    if (left === 2 && right === 2) return 0;
    if (left === 0 || right === 0) {
      result++
      return 1;
    };
    if (left === 1 || right === 1) return 2;
    return -1;
  }
  // 根节点无覆盖
  if (deep(root) === 0) result++;
  return result;
};

class TreeNode {
  constructor(val) {
    this.root = val;
    this.left = null;
    this.right = null;
  }
}

const root = new TreeNode(0);
root.left = new TreeNode(0);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(0);
const result = minCameraCover(root);
console.log(result)