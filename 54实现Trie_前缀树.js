class Trie {
  constructor() {
    this.children = {};
  }

  insert(word) {
    // 这里是直接在修改children的内容
    let nodes = this.children;
    for (const item of word) {
      if (!nodes[item]) {
        nodes[item] = {}
      }
      nodes = nodes[item]
    }
    // isEnd属性表示字符结束
    nodes.isEnd = true;
  }

  searchPrefix(prefix) {
    let nodes = this.children;
    for (const item of prefix) {
      if (!nodes[item]) {
        return false;
      }
      nodes = nodes[item];
    }
    return nodes;
  }

  search(word) {
    const lastNode = this.searchPrefix(word);
    if (lastNode && lastNode.isEnd) {
      return true;
    }
    return false;
  }

  startsWith(prefix) {
    return this.searchPrefix(prefix) ? true : false;
  }
}


const trie = new Trie();
trie.insert('apple');
trie.startsWith('app');
trie.insert('app')
console.log(trie.search('app'))
/**
* Your Trie object will be instantiated and called as such:
* var obj = new Trie()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/