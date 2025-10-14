/**
 * 利用拓扑排序解题
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const indgree = Array.from({ length: numCourses }, () => 0);
  const map = new Map();
  for (const [a, b] of prerequisites) {
    if (map.has(b)) {
      map.get(b).push(a)
    } else {
      map.set(b, [a])
    }
    indgree[a]++;
  }
  const queue = []
  for (let i = 0; i < numCourses; i++) {
    if (indgree[i] === 0) {
      // 入度为0的节点
      queue.push(i)
    }
  }
  let result = [];
  while (queue.length) {
    const cur = queue.shift();
    result.push(cur);
    const nodes = map.get(cur);
    if (!nodes) continue;
    for (const item of nodes) {
      indgree[item]--;
      if (indgree[item] === 0) {
        queue.push(item);
      }
    }
  }
  return result.length === numCourses;
};

const numCourses = 2, prerequisites = [[1, 0], [0, 1]]
const result = canFinish(numCourses, prerequisites)
console.log(result)