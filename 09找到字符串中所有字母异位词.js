var findAnagrams = function (s, p) {
  let result = []
  const sLen = s.length;
  const pLen = p.length;
  if (sLen < pLen) return result;
  const aCode = 'a'.charCodeAt()
  const sArr = Array(26).fill(0)
  const pArr = Array(26).fill(0)
  // 初始化
  for (let i = 0; i < pLen; i++) {
    sArr[s[i].charCodeAt() - aCode]++
    pArr[p[i].charCodeAt() - aCode]++
  }

  for (let i = 0; i <= sLen - pLen; i++) {
    if (sArr.join('') === pArr.join('')) {
      result.push(i)
    }
    if (i < sLen - pLen) {
      // 滑动左窗口
      sArr[s[i].charCodeAt() - aCode]--
      // 滑动右窗口
      sArr[s[i + pLen].charCodeAt() - aCode]++
    }
  }
  return result;
};