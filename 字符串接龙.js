// 首先，遍历每一项字符串的每一个字母，替换26个字母，看看是否在strList中
// 如果在strList中，说明可以进行连接，用map记录走过的节点，并且记录圈数
const main = () => {
  const fs = require('fs');
  const input = fs.readFileSync(0, 'utf-8').split('\n')
  const n = input[0];
  const [beginStr, endStr] = input[1].split(' ')
  const strList = new Set(input.slice(2));
  // 标记访问过的节点
  const map = new Map();
  const queue = [];
  queue.push(beginStr);
  map.set(beginStr, 1)
  while (queue.length) {
    const cur = queue.shift();
    for (let i = 0; i < cur.length; i++) {
      const newWord = [...cur];
      // 用26个小写字母轮流去替换当前字母
      for (let j = 0; j < 26; j++) {
        const c = String.fromCharCode(97 + j)
        newWord[i] = c;
        const newCur = newWord.join('');
        // 找到结果值
        if (newCur === endStr) {
          return map.get(cur) + 1;
        }
        // 新字符串是没访问过的，并且在strList中
        if (strList.has(newCur) && !map.get(newCur)) {
          queue.push(newCur);
          // 路径+1
          map.set(newCur, map.get(cur) + 1);
        }
      }
    }
  }
  return -1;
}

console.log(main())