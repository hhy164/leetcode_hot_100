var levelOrder = function (root) {
  let result = []
  const queue = [root];
  while (queue.length) {
    let count = queue.length;
    let arr = []
    while (count) {
      const node = queue.shift();
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
      arr.push(node.val)
      count--
    }
    result.push(arr)
  }
  return result
};

const root = {
  val: 3,
  left: {
    val: 9
  },
  right: {
    val: 20,
    left: {
      val: 15
    },
    right: {
      val: 7
    }
  }
}

const result = levelOrder(root)
console.log(result)