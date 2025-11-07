var decodeString = function (s) {
  let numStack = []; // 存数字
  let strStack = []; // 存字符串
  let letter = ''; // 当前的字母
  let curNum = '';
  const reg = /[a-z]/;
  const numReg = /[0-9]/;
  for (let i = 0; i < s.length; i++) {
    if (numReg.test(Number(s[i]))) {
      // 数字
      curNum += s[i];
    }
    if (s[i] === '[') {
      strStack.push(letter);
      letter = '';
      numStack.push(Number(curNum));
      curNum = ''
    }
    if (reg.test(s[i])) {
      // 字母
      letter += s[i];
    }
    if (s[i] === ']') {
      let num = numStack.pop();
      letter = strStack.pop() + letter.repeat(num);
    }
  }
  return letter;
};
const s = "3[a]2[bc]"
const result = decodeString(s);
console.log(result)