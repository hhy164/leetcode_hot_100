var copyRandomList = function (head) {
  let cur = head;
  let dummy = new Nodelist();
  let copyCur = dummy;
  const map = new Map();
  while (cur) {
    const val = cur.val;
    copyCur.next = new Nodelist(val);
    map.set(cur, copyCur.next);
    cur = cur.next;
    copyCur = copyCur.next;
  }
  cur = head, copyCur = dummy.next;
  while (cur) {
    copyCur.random = map.get(cur.random) || null;
    cur = cur.next;
    copyCur = copyCur.next;
  }
  return dummy.next;
};

class Nodelist {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.random = null;
  }
}