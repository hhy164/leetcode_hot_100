const map = {
  "2": "abc",
  "3": "def",
  "4": "ghi",
  "5": "jkl",
  "6": "mno",
  "7": "pqrs",
  "8": "tuv",
  "9": "wxyz"
}
var letterCombinations = function (digits) {
  if (!digits) return [];
  let result = [], str = ''
  const backtracking = (digits, index) => {
    // 获取当前字母所对应的数字
    const letter = map[digits[index]];
    if (index === digits.length) {
      result.push(str);
      return;
    }
    for (let i = 0; i < letter.length; i++) {
      str += letter[i];
      backtracking(digits, index + 1);
      str = str.slice(0, str.length - 1);
    }
  }
  backtracking(digits, 0)
  return result;
}

const digits = "23";
const result = letterCombinations(digits);
console.log(result)