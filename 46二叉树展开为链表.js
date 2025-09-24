var flatten = function (root) {
  const deep = (root) => {
    if (!root) return null;
    // 递归展开左子树
    const left = deep(root.left);
    // 递归展开右子树
    const right = deep(root.right);

    // 处理当前节点：将左子树放到右子树的位置
    if (left) {
      root.right = left;
      root.left = null;

      // 寻找左子树的最右节点
      let cur = root;
      while (cur.right) {
        cur = cur.right;
      }

      // 将右子树连接到左子树的最右节点
      cur.right = right;
    }
    return root;
  };

  return deep(root);
};

const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3
    },
    right: {
      val: 4
    }
  },
  right: {
    val: 5,
    right: {
      val: 6
    }
  }
}

const result = flatten(root)
console.log(result)