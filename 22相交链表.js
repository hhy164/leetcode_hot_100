var getIntersectionNode = function (headA, headB) {
  let aLen = 0;
  let bLen = 0;
  let curA = headA;
  let curB = headB;
  while (curA) {
    aLen++
    curA = curA.next;
  }
  while (curB) {
    bLen++
    curB = curB.next;
  }
  if (aLen < bLen) {
    let diff = bLen - aLen;
    while (diff) {
      headB = headB.next
      diff--
    }
  } else if (bLen < aLen) {
    let diff = aLen - bLen
    while (diff) {
      headA = headA.next;
      diff--
    }
  }
  while (headA && headA !== headB) {
    headA = headA.next;
    headB = headB.next;
  }
  return headA
};