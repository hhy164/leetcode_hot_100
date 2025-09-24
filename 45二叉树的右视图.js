var rightSideView = function (root) {
  if (!root) return [];
  let result = [], queue = [root]
  while (queue.length) {
    let len = queue.length;
    while (len--) {
      const node = queue.shift();
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
      if (!len) {
        result.push(node.val)
      }
    }
  }
  return result;
};

const root = {
  val: 1,
  left: {
    val: 2,
    right: { val: 5 }
  },
  right: { val: 3, right: { val: 4 } }
}

const result = rightSideView(root)
console.log(result)