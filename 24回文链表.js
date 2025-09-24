var isPalindrome = function (head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // 反转后半部分链表
  let reverse = getReverseList(slow);
  while (reverse) {
    if (reverse.val !== head.val) {
      return false
    }
    reverse = reverse.next;
    head = head.next
  }
  return true
};

// 获取反转链表
function getReverseList(head) {
  let pre = null;
  let cur = head;
  while (cur) {
    const node = cur.next;
    cur.next = pre;
    pre = cur;
    cur = node;
  }
  return pre;
}
