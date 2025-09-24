// leetcode 71 简化路径

var simplifyPath = function (path) {
  let stack = []
  let arr = path.split('/');
  arr.forEach(val => {
    if (val && val === '..') {
      stack.pop()
    } else if (val && val !== '.') {
      // 入栈
      stack.push(val)
    }
  })
  return '/' + stack.join('/')
}

const path = "/a/../../b/../c//.//"
const result = simplifyPath(path)
console.log(result)