/**
 * 尽量让大饼干喂给胃口大的孩子，这样就可以发挥这个饼干的作用
 * @param {*} g 孩子的胃口
 * @param {*} s 饼干的大小
 */
var findContentChildren = function (g, s) {
  // 对饼干值和胃口值进行从大到小排序
  g = g.sort((a, b) => b - a);
  s = s.sort((a, b) => b - a);
  let count = 0;
  let curIndex = 0;
  for (let i = 0; i < s.length; i++) {
    while (curIndex < g.length) {
      curIndex++;
      if (s[i] >= g[curIndex - 1]) {
        // 饼干大于胃口
        count++;
        break;
      }
    }
  }
  return count;
}

const g = [10, 9, 5, 4], s = [10, 4, 4]
const result = findContentChildren(g, s)
console.log(result)