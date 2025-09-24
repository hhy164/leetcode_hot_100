var removeNthFromEnd = function (head, n) {
  const dummy = { val: 0, next: head }
  let slow = dummy, fast = dummy;
  let count = n + 1
  while (count && fast) { // fast先走n+1步
    fast = fast.next;
    count--
  }
  // 然后slow和fast一起走，当fast为null时，slow走到了倒数第n+1步
  while (fast) {
    fast = fast.next;
    slow = slow.next
  }
  if (slow && slow.next) {
    slow.next = slow.next.next;
  }
  return dummy.next
}