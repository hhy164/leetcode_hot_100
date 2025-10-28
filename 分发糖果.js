// 首先从左往右，先判断右边孩子得分高就给右边孩子多一颗糖
// 然后从右往左，如果左边孩子得分高就多给一颗糖
var candy = function (ratings) {
  if (ratings.length === 1) return 1;
  const candys = [1];
  // 从左往右遍历
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candys[i] = candys[i - 1] + 1;
    } else {
      candys[i] = 1
    }
  }
  console.log(candys)

  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1] && candys[i] <= candys[i + 1]) {
      candys[i] = candys[i + 1] + 1;
    }
  }
  return candys.reduce((cur, total) => cur + total, 0)
};

const ratings = [1, 3, 4, 3, 2];
console.log(candy(ratings));