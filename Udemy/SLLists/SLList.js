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

  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
}

let first = new SLList(3);
first.push(3);
first.push(5);
first.push(7);
first.unshift(1);

console.log(first.get(1));
console.log(first.set(1, 100));
console.log(first);
