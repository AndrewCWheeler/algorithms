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

  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
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
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }
    this.length--;
    return oldTail;
  }
  shift() {
    if (!this.head) return undefined;
    var oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      oldHead.next = null;
      this.head.prev = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    var count, current;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
  set(index, val) {
    var nodeToSet = this.get(index);
    if (nodeToSet) {
      nodeToSet.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    var a = this.get(index - 1);
    var b = new Node(val);
    var c = a.next;
    c.prev = b;
    a.next = b;
    b.prev = a;
    b.next = c;
    this.length++;
    return true;
  }
}

const first = new DLList();

first.push(1);
first.push(2);
first.push(3);
console.log(first.print());
console.log("first.pop():");
console.log(first.pop());
console.log(first.print());
console.log("first.shift():");
console.log(first.shift());
console.log(first.print());
first.push(4);
first.push(5);
console.log(first.print());
console.log("first.unshift(0):");
first.unshift(0);
console.log(first.print());
console.log(first.get(2));
console.log(first.set(2, 3));
console.log(first.print());
first.insert(2, 1);
console.log(first.print());
console.log(first);
