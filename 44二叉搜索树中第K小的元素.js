// 二叉搜索树左边的元素都比根节点小，右边元素都比根节点大
// 中序遍历得到的结果是从小到大排序的
var kthSmallest = function (root, k) {
  let result;
  const deep = (root) => {
    // 终止条件
    if (!root || result !== undefined) return;
    // 左
    deep(root.left)
    // 中
    k--
    if (k === 0) {
      result = root.val
    }
    // 右
    deep(root.right)
  }
  deep(root)
  return result
};

const root = {
  val: 5,
  left: {
    val: 3,
    left: {
      val: 2,
      left: {
        val: 1
      }
    },
    right: {
      val: 4
    }
  },
  right: {
    val: 6
  }
}
const result = kthSmallest(root, 3)
console.log(result)