class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DLList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    var oldTail = this.tail;
    if (this.length === 1) {
      this.head === null;
      this.tail === null;
    } else {
      this.tail === oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }
    this.length--;
    return oldTail;
  }
}

const first = new DLList();

first.push(1);
console.log(first);
first.push(2);
console.log(first);
console.log(first.push(3));
console.log(first.pop());
console.log(first);
