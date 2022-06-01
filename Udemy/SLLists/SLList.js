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
    console.log(this.length, val, newNode);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      console.log(`head: ${this.head.val}, tail: ${this.tail.val}`);
      this.tail.next = newNode;
      this.tail = this.tail.next;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
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
}

let first = new SLList(3);
first.push(3);
first.push(4);
first.push(5);

console.log(first.pop());
