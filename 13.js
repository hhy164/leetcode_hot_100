// leetcode 100 相同的树
var isSameTree = function (p, q) {
  if (p.val !== q.val) return false;
  if (!p && !q) return true;
  if (!p || !q) return false; // p或q有一个存在
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};
const tree1 = {
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
const tree2 = {
  val: '1',
  right: {
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
  left: {
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
const result = isSameTree(tree1, tree2);
console.log(result)