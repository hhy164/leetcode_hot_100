class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
var buildTree = function (preorder, inorder) {
  if (!preorder) return null;
  const deep = (preorder, inorder) => {
    if (!preorder.length) return null
    if (preorder.length === 1) {
      return new TreeNode(preorder[0])
    }
    const rootVal = preorder[0]
    let root = new TreeNode(rootVal)
    // 中序切割
    const index = inorder.indexOf(rootVal);
    // 中序左子树
    const inorderArr1 = inorder.slice(0, index)
    // 中序右子树
    const inorderArr2 = inorder.slice(index + 1)
    // 前序切割
    const preorderArr1 = preorder.slice(1, 1 + inorderArr1.length)
    const preorderArr2 = preorder.slice(1 + inorderArr1.length)
    root.left = deep(preorderArr1, inorderArr1)
    root.right = deep(preorderArr2, inorderArr2);
    return root;
  }
  return deep(preorder, inorder)
};

const preorder = [3, 9, 20, 15, 7], inorder = [9, 3, 15, 20, 7]
const result = buildTree(preorder, inorder)