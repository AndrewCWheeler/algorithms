class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    var newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (val === current.val) return undefined;
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (val > current.val) {
        if (current.right === null) {
          current.right === newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
}

var tree = new BST();

tree.insert(6);
tree.insert(5);
tree.insert(4);
tree.insert(3);
tree.insert(10);

console.log(tree);

console.log(tree.right);
