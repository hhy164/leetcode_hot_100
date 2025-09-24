// leetcode 455 分发饼干
var findContentChildren = function (g, s) {
  // 排序
  g = g.sort((a, b) => a - b)
  s = s.sort((a, b) => a - b)
  // 初始值
  let num = 0
  // 遍历饼干尺寸的数组
  s.forEach((item) => {
    if (item >= g[num]) {
      num++
    }
  })
  return num
};
const g = [3, 2, 3], s = [1, 1]
console.log(findContentChildren(g, s))