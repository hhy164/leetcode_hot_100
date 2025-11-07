class MinStack {
  constructor() {
    this.value = [];
  }
  push(val) {
    this.value.push(val);
    this.min = Math.min(this.min, val)
  }
  pop() {
    return this.value.pop();
  }
  top() {
    return this.value[this.value.length - 1]
  }
  getMin() {
    let min = Infinity;
    for (let i = 0; i < this.value.length; i++) {
      min = Math.min(min, this.value[i]);
    }
    return min
  }
}
const obj = new MinStack()
obj.push(-2);
obj.push(0);
obj.push(-3);
console.log(obj.getMin())
console.log(obj.pop());
console.log(obj.top());
console.log(obj.getMin())

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */