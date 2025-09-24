// leetcode 374 猜数字大小
var guessNumber = function (n) {

  const deepFun = (start, end) => {
    const mid = Math.floor((start + end) / 2)
    const res = guess(mid)
    if (res === 0) return res;
    if (res === 1) {
      // 猜小了
      start = mid + 1
      deepFun(start, n)
    } else {
      // 猜大了
      n = mid - 1
      deepFun(start, n)
    }
  }
  return deepFun(1, n)
};

