var mergeTwoLists = function (list1, list2) {
  // 创建一个虚拟头节点
  let head = new Nodelist();
  let cur = head;
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      cur.next = list1;
      list1 = list1.next;
    } else {
      cur.next = list2;
      list2 = list2.next;
    }
    cur = cur.next;
  }
  cur.next = list1 || list2;
  return head.next;
};

class Nodelist {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}