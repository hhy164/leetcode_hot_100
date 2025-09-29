// 1.将两个元素添加到同一个集合
// 2.判断两个元素是否在同一个集合

// 将两个元素添加到同一个集合
function join(a, b) {
  // 首先判断两个元素是否已经在同一个集合
  const u = find(a);
  const v = find(b);
  if (u !== v) {
    father[u] = v;
  }
}

// 判断两个元素是否在同一个集合
function isSame(a, b) {
  // 找到a的根节点，b的根节点，判断是否相等
  const u = find(a);
  const v = find(b);
  return u === v;
}

//查找根节点,根节点的father是自己
function find(a) {
  if (a === father[a]) return a;
  // u表示a的根节点
  u = find(father[a]);
  // 让a直接指向根节点
  father[a] = u;
  return u;
}
// 初始化
function init(n) {
  for (let i = 0; i < n; i++) {
    father[i] = i;
  }
}