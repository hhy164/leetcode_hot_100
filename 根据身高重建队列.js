// 以h从大到小排序，如果h相同，则k小的放在前面
// 然后以k来插入到对应的位置
var reconstructQueue = function (people) {
  people.sort((a, b) => {
    if (a[0] !== b[0]) {
      return b[0] - a[0];
    } else {
      return a[1] - b[1];
    }
  })
  let queue = [];
  for (let i = 0; i < people.length; i++) {
    const pos = people[i][1];
    // 插入到对应位置
    queue.splice(pos, 0, people[i]);
  }
  return queue;
};
// peopel: [[h,k]]
const people = [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]];
console.log(reconstructQueue(people))
