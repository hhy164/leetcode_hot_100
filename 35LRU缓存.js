class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cacheMap = new Map();
  }

  get(key) {
    const isExit = this.cacheMap.has(key);
    if (isExit) {
      const val = this.cacheMap.get(key);
      this.cacheMap.delete(key);
      this.cacheMap.set(key, val);
      return val;
    }
    return -1;
  }

  put(key, val) {
    const isExit = this.cacheMap.has(key);
    if (isExit) {
      this.cacheMap.delete(key)
      this.cacheMap.set(key, val)
    } else {
      if (this.capacity <= this.cacheMap.size) {
        // 超出缓存容量，删除最久未使用的key
        const first = this.cacheMap.keys().next().value;
        this.cacheMap.delete(first)
      }
      this.cacheMap.set(key, val)
    }
  }
}