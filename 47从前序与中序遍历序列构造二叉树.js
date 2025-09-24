var buildTree = function (preorder, inorder) {
  const deep = (preorder, inorder) => {
    if (!preorder.length) return null;
    // 中序遍历第一个节点为根节点
    let root = new TreeNode(preorder[0])
    const index = inorder.findIndex(item => item === root.val);

    // 中序遍历分割
    const leftInorder = inorder.slice(0, index);
    const rightInofer = inorder.slice(index + 1, inorder.length);
    // 前序遍历分割
    const leftPreorder = preorder.slice(1, leftInorder.length + 1);
    const rightPreofer = preorder.slice(leftInorder.length + 1)

    root.left = deep(leftPreorder, leftInorder)
    root.right = deep(rightPreofer, rightInofer)
    return root;
  }
  return deep(preorder, inorder)
};
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null
  }
}
// preorder->前序 中左右 inorder中序 左中右
const preorder = [3, 9, 20, 15, 7], inorder = [9, 3, 15, 20, 7]
const result = buildTree(preorder, inorder);
console.log(result)