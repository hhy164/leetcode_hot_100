class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function addTwoNumbers(l1, l2) {
  let count = 0; // 记录是否有进位
  // 创建虚拟节点
  let dummy = new ListNode();
  let cur = dummy;
  while (l1 || l2) {
    let val = 0;
    if (l1) {
      val += l1.val
      l1 = l1.next;
    }
    if (l2) {
      val += l2.val;
      l2 = l2.next;
    }
    if (count) {
      val += count;
      count = 0;
    }
    if (val > 9) {
      count++;
      val = val % 10;
    }
    cur.next = new ListNode(val);
    cur = cur.next;
  }
  if (count) {
    cur.next = new ListNode(count)
  }
  return dummy.next;
}