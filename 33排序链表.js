var sortList = function (head) {
  if (!head) return head;
  let cur = head;
  const arr = [];
  while (cur) {
    const node = cur.next;
    cur.next = null;
    arr.push(cur);
    cur = node;
  }
  arr.sort((a, b) => a.val - b.val)
  let result = arr[0];
  cur = result;
  for (let i = 1; i < arr.length; i++) {
    cur.next = arr[i]
    cur = cur.next;
  }
  return result;
};