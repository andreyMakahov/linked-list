import Node from '../Node';

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(value) {
    let node = new Node(value, this.head, null);
    if (!this.head) {
      this.tail = node;
    }
    else this.head.prev = node;
    this.head = node;
    this.length++;
  }

  addToTail(value) {
    let node = new Node(value, this.tail || null, this.tail);
    this.tail = node;
    if (!this.head) {
      this.head = node;
    }
    this.length++;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  contains(value) {
    let checkEquals = function(node, value) {
      return node.value === value || Boolean(node.next && checkEquals(node.next, value));
    };

    return this.head && checkEquals(this.head, value);
  }

  size() {
    return this.length;
  }

  get(index) {
    let node = this._getNodeByIndex(index);
    return (node && node.value) || null;
  }

  set(index, value) {
    if (this.head) {
      let node = this._getNodeByIndex(index);
      node.value = value;
    }
  }

  indexOf(value) {
    if (this.head) {
      let currentNode = this.head;
      let currentIndex = 0;
      while(currentNode) {
        if (currentIndex === currentNode.value) {
          return currentIndex;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    return -1;
  }

  _getNodeByIndex(index) {
    if (this.head) {
      let currentNode = this.head;
      let currentIndex = 0;
      while(currentNode) {
        if (currentIndex === index) {
          return currentNode.value;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    return null;
  }

}

export default LinkedList;