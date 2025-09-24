// 使用层序遍历，每一层最右侧的值则为右视图可见值
var rightSideView = function (root) {
  const queue = [root];
  const result = []
  while (queue.length) {
    let len = queue.length;
    while (len) {
      const ele = queue.shift();
      ele.left && queue.push(ele.left)
      ele.right && queue.push(ele.right)
      if (len === 1) {
        result.push(ele.val)
      }
      len--;
    }
  }
  return result;
};

const root = {
  val: 1,
  left: {
    val: 2,
    right: {
      val: 5
    }
  },
  right: {
    val: 3,
    right: {
      val: 4
    }
  }
}
const result = rightSideView(root)
console.log(result)