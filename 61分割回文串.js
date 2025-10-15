var partition = function (s) {
  let result = [], path = [];
  const backtrack = (startIndex, str) => {
    if (startIndex === str.length) {
      result.push([...path]);
      return;
    }
    for (let i = startIndex; i < str.length; i++) {
      if (isPalindromeStr(str, startIndex, i)) {
        path.push(str.slice(startIndex, i + 1));
      } else {
        continue;
      }
      backtrack(i + 1, str);
      path.pop();
    }
  }
  backtrack(0, s);
  return result;
};

const isPalindromeStr = (str, startIndex, endIndex) => {
  while (startIndex < endIndex) {
    if (str[startIndex] !== str[endIndex]) return false;
    startIndex++
    endIndex--
  }
  return true;
}
const s = "aab";
const result = partition(s);
console.log(result);

