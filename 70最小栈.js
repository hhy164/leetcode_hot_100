class MinStack {
  constructor() {
    this.value = [];
    this.minStack = [];
  }
  push(val) {
    this.value.push(val);
    if (!this.minStack.length || val <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(val)
    }
  }
  pop() {
    const item = this.value.pop();
    if (item === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop()
    }
  }
  top() {
    return this.value[this.value.length - 1];
  }
  getMin() {
    return this.minStack[this.minStack.length - 1]
  }
}