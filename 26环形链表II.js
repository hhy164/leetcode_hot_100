var detectCycle = function (head) {
  let slow = head, fast = head;
  while (fast) {
    slow = slow?.next;
    fast = fast?.next?.next;
    if (slow === fast) {
      // 相遇
      while (slow !== head) {
        slow = slow.next;
        head = head.next
      }
      return head;
    }
  }
  return null
};