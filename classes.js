class _Node {
  constructor(value, next) {
    (this.value = value), (this.next = next);
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }
  find(item) {
    //start at the head
    let currNode = this.head;
    //if the list is empty
    if (!this.head) {
      return null;
    }
    //Check for the item
    while (currNode.value !== item) {
      //return null if end of the list
      // and the item is not on the list
      if (currNode.next === null) {
        return null;
      } else {
        //otherwise keep looking
        currNode = currNode.next;
      }
    }
    //found it
    return currNode;
  }

  remove(item) {
    //if the list is empty
    if (!this.head) {
      return null;
    }
    //if the node to be removed is head, make the next node head
    if (this.head === item) {
      this.head = this.head.next;
      return;
    }
    //start at the head
    let currNode = this.head;
    //keep track of previous
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      //save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }

  insertBefore(newElement, item) {
    if (this.head === null) {
      return;
    } else if (this.head.value == item) {
      this.insertFirst(newElement);
      return;
    }
    let previousNode = null;
    let currNode = this.head;
    while (currNode !== null && currNode.value !== item) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    previousNode.next = new _Node(newElement, currNode);
  }
  insertAfter(newElement, item) {
    if (this.head.value == item || this.head === null) {
      this.insertLast(newElement);
      return;
    }
    // let previousNode = null;
    let currNode = this.head;
    // let nextNode;
    while (currNode !== null && currNode.value !== item) {
      // previousNode = currNode;
      currNode = currNode.next;
      // nextNode = currNode.next;
    }
    currNode.next = new _Node(newElement, currNode.next);
  }

//   insertAt(head, data, position) {
//     if (!head) {
//       head = new _Node(data);
//     } else {
//       let parent = null;
//       let current = head;
//       let index = 0;

//       while (current && index < position) {
//         parent = current;
//         current = current.next;
//         index++;
//       }

//       if (current) {
//         // Insert node here, make the child current.
//         let child = new _Node(current.data);
//         child.next = current.next;

//         current.data = data;
//         current.next = child;
//       } else {
//         // Insert node at end of list.
//         parent.next = new _Node(data);
//       }
//     }
//     return head;
//   }



}

module.exports = LinkedList;
