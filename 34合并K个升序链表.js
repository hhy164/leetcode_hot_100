var mergeKLists = function (lists) {
  const arr = [];
  for (let i = 0; i < lists.length; i++) {
    let cur = lists[i];
    while (cur) {
      const node = cur.next;
      cur.next = null;
      arr.push(cur);
      cur = node;
    }
  }
  if (!arr.length) return null;
  // 排序
  arr.sort((a, b) => a.val - b.val)
  let head = arr[0];
  let cur = head;
  for (let i = 1; i < arr.length; i++) {
    cur.next = arr[i]
    cur = cur.next;
  }
  return head;
};