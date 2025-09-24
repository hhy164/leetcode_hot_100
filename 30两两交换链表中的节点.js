var swapPairs = function (head) {
  const dummy = { val: 0, next: head };
  let cur = dummy;
  while (cur.next?.next) {
    let temp = cur.next;
    cur.next = cur.next.next;
    temp.next = temp.next.next;
    cur.next.next = temp;
    cur = cur.next.next
  }
  return dummy.next;
};