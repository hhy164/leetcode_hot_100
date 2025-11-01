var monotoneIncreasingDigits = function (n) {
  let numberArr = String(n).split('');
  let flag = numberArr.length;
  for (let i = numberArr.length - 1; i > 0; i--) {
    if (numberArr[i - 1] > numberArr[i]) {
      numberArr[i - 1]--;
      flag = i;
    }
  }
  for (let i = flag; i < numberArr.length; i++) {
    numberArr[i] = '9';
  }
  return Number(numberArr.join(''))
};

const n = 1234
const result = monotoneIncreasingDigits(n);
console.log(result)

