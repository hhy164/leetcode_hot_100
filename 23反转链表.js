const reverseList = function (head) {
  let pre = null, cur = head;
  while (cur) {
    const node = cur.next;
    cur.next = pre;
    pre = cur;
    cur = node;
  }
  return pre;
}