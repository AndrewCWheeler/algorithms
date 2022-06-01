class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SLList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = this.tail.next;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return this;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return this;
    } else {
      let walker = this.head;
      let runner = walker.next;
      while (runner.next) {
        walker = runner;
        runner = runner.next;
      }
      runner = null;
      this.tail = walker;
      this.tail.next = runner;
      return this;
    }
  }

  shift() {
    if (!this.head) {
      return this;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return this;
    } else {
      let removedNode = this.head;
      this.head = this.head.next;
      this.length--;
      return removedNode;
    }
  }
}

let first = new SLList(3);
first.push(3);

console.log(first);
console.log(first.pop());
console.log(first);
