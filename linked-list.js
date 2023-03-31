/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    let poppedTail;
    if (this.length === 0) {
      throw new Error("cannot perform pop() on an empty list");
    } else if (this.head === this.tail) {
      poppedTail = this.tail.val;
      this.tail = this.head = null;
      this.length -= 1;
      return poppedTail;
    }
    let currentNode = this.head;
    while (currentNode.next.next) {
      currentNode = currentNode.next;
    }
    poppedTail = this.tail.val;
    currentNode.next = null;
    this.tail = currentNode;
    this.length -= 1;
    return poppedTail;
  }

  /** shift(): return & remove first item. */

  shift() {
    let shiftedHead;
    if (this.length === 0) {
      throw new Error("cannot perform shift() on an empty list");
    } else if (this.head === this.tail) {
      shiftedHead = this.head.val;
      this.head = this.tail = null;
      this.length -= 1;
      return shiftedHead;
    }
    shiftedHead = this.head.val;
    let currentNode = this.head;
    this.head = currentNode.next;
    this.length -= 1;
    return shiftedHead;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx > this.length - 1) {
      throw new Error(`Index ${idx} does not exist in this Linked List`);
    }
    let currentIdx = 0;
    let currentNode = this.head;
    while (currentNode) {
      if (currentIdx === idx) {
        return currentNode.val;
      }
      currentIdx++;
      currentNode = currentNode.next;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx > this.length - 1) {
      throw new Error(`Index ${idx} does not exist in this Linked List`);
    }
    let currentIdx = 0;
    let currentNode = this.head;
    while (currentNode) {
      if (currentIdx === idx) {
        currentNode.val = val;
        break;
      }
      currentIdx++;
      currentNode = currentNode.next;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length) {
      throw new Error(`Index ${idx} does not exist in this Linked List`);
    }
    if (this.length === 0) {
      let newNode = new Node(val);
      this.head = this.tail = newNode;
      this.length += 1;
    }
    let currentIdx = 0;
    let currentNode = this.head;
    while (currentNode) {
      if (currentIdx + 1 === idx) {
        let newNode = new Node(val);
        const nextNode = currentNode.next;
        newNode.next = nextNode;
        currentNode.next = newNode;
        if (!currentNode.next.next) {
          this.tail = currentNode.next;
        }
        this.length += 1;
        break;
      }
      currentIdx++;
      currentNode = currentNode.next;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx > this.length - 1) {
      throw new Error(`Index ${idx} does not exist in this Linked List`);
    }
    if (this.length === 1) {
      this.head = this.tail = null;
      this.length -= 1;
    }
    let currentIdx = 0;
    let currentNode = this.head;
    while (currentNode) {
      if (currentIdx + 1 === idx) {
        let nextNextNode = currentNode.next.next;
        currentNode.next = nextNextNode;
        this.length -= 1;
        break;
      }
      currentIdx++;
      currentNode = currentNode.next;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    let sum = 0;
    let count = 0;
    let currentNode = this.head;
    while (currentNode) {
      sum += currentNode.val;
      count += 1;
      currentNode = currentNode.next;
    }
    if (sum === 0 && count === 0) {
      return 0;
    }
    return sum / count;
  }
}

module.exports = LinkedList;
