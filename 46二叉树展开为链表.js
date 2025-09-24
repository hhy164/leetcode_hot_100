var flatten = function (root) {
  const deep = (root) => {
    if (!root) return root;

    const left = deep(root.left)

    const right = deep(root.right)

    if (left) {
      root.left = null
      root.right = left;
      let cur = root;
      while (cur.right) {
        cur = cur.right;
      }
      cur.right = right;
    }

    return root;
  }
  return deep(root)
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