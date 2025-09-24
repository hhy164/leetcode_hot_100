var reverseKGroup = function (head, k) {
  if (!head || k === 1) return head;
  let dummy = { val: 0, next: head }
  let slow = dummy, fast = dummy.next;
  while (fast) {
    for (let i = 0; i < k; i++) {
      if (fast) {
        fast = fast.next
      } else {
        // 剩余元素不足k个
        return dummy.next;
      }
    }
    let cur = slow.next, pre = fast;
    for (let i = 0; i < k; i++) {
      // 进行反转
      const node = cur.next;
      cur.next = pre;
      pre = cur;
      cur = node;
    }
    const temp = slow.next;
    slow.next = pre;
    slow = temp;
  }
  return dummy.next;
};
