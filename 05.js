// leetcode 141 环形链表

var hasCycle = function (head) {
  let slow = head
  let fast = head
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next
    if (slow === fast) return true
  }
  return false
};
let a = { key: 3 }
let b = { key: 2 }
let c = { key: 0 }
let d = { key: -4 }
let e = { key: 5 }
let f = { ke: 6 }// slow
let g = { key: 7 }// fast
a.next = b
b.next = c
c.next = d
d.next = e
e.next = f
f.next = g
g.next = b
console.log(hasCycle(a))

