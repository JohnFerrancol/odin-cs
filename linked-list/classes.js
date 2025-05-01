class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Method called to add a new node to the front of the linked list
  prepend(value) {
    const newNode = new Node(value);

    // Point the new node to the current head and change the head to the new node
    newNode.next = this.head;
    this.head = newNode;

    // If the linked list was empty, set the tail to the new node as well
    if (this.length === 0) this.tail = newNode;
    this.length++;
  }

  // Method called to add a new node at the back of the linked list
  append(value) {
    const newNode = new Node(value);

    // If the linked list is empty, set the head and the tail to the new node
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Point the new node to the current tail and change the tail to the new node
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // Methods called to return length, head and tail attributes of the LinkedList class
  size() {
    return this.length;
  }

  firstNode() {
    return this.head;
  }

  lastNode() {
    return this.tail;
  }

  // Method called to return the Node object from a given index
  at(index) {
    let currentNode = this.head;

    // Return an error when the index is out of range
    if (index < 0 || index >= this.length) return "Error! Invalid Index!";

    // Traverse the linked list till that index
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  // Method called to remove the last node from the linked list
  pop() {
    // Return an error if the list is empty
    if (this.length === 0) return "Error! Nothing to pop";
    else if (this.length === 1) {
      // When the list only contains one node, reset the linked list and return the node
      let poppedNode = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return poppedNode;
    } else {
      let currentNode = this.head;

      // Traverse to the node pointing to the tail
      for (let i = 0; i < this.length - 2; i++) {
        currentNode = currentNode.next;
      }

      // Set the tail to the current node pointing at the current tail and point the current node to null (this removes the current tail from the linked list)
      let poppedNode = this.tail;
      this.tail = currentNode;
      currentNode.next = null;
      this.length--;
      return poppedNode;
    }
  }

  // Method called to return a boolean to tell the user whether the node is in the linked list
  contains(value) {
    let currentNode = this.head;

    // Traverse the linked to find the value in the linked list
    // If found, return true. Else, if the linked list is traversed without finding the said value return false
    for (let i = 0; i < this.length; i++) {
      if (currentNode.data === value) {
        return true;
      }
      currentNode = currentNode.next;
    }

    return false;
  }

  // Method called to return the index of the node
  find(value) {
    let currentNode = this.head;

    // Traverse the linked to find the value in the linked list
    // If found, return the index. Else, if the linked list is traversed without finding the said value return null
    for (let i = 0; i < this.length; i++) {
      if (currentNode.data === value) {
        return i;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  // Method called to return a string to visually display the linked list
  toString() {
    let currentNode = this.head;
    let string = "";

    // Traverse the linked list and add the node to the string
    for (let i = 0; i < this.length; i++) {
      string += `(${currentNode.data})`;

      // If the current node is pointing to a node, add a pointer
      if (currentNode.next) {
        string += " -> ";
      }

      currentNode = currentNode.next;
    }

    // Lastly point the tail to null. Or if the string is still empty, return an empty list
    if (string) string += " -> null";
    else string += "Empty List";

    return string;
  }

  // Method called to insert a node at a given index
  insertAt(value, index) {
    let currentNode = this.head;

    // If the user wants to prepend or append the values based on the index, run the corresponding methods
    // Else, if the index is out of range, return an error
    if (index === 0) return this.prepend(value);
    else if (index === this.length) return this.append(value);
    else if (index < 0 || index > this.length) return "Error! Invalid Index!";

    // Traverse to the node before the intended index of the new node
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }

    const newNode = new Node(value);
    const nodeAfterNewNode = currentNode.next;

    // Point node before the indexed index of the new node to the new node as well as point the new node to the next node
    currentNode.next = newNode;
    newNode.next = nodeAfterNewNode;
    this.length++;
  }

  // Method called to remove a node at a given index
  removeAt(index) {
    let currentNode = this.head;
    // Else, the index is out of range, return an error
    if (index < 0 || index >= this.length) return "Error! Invalid Index!";

    if (index === 0) {
      // If the user wants to remove the head, point the head to the next node
      const removedNode = this.head;
      this.head = this.head.next;

      // If the node to be removed is the only node, set the tail to null
      if (this.length === 1) this.tail = null;
      this.length--;
      return removedNode;
    } else {
      // Traverse to the node before the intended index of the new node
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }

      const removedNode = currentNode.next;
      const nodeAfterNodeToRemove = removedNode.next;

      // Point node before the indexed index of the  node to be removed to the node after the removed node
      currentNode.next = nodeAfterNodeToRemove;
      this.length--;
      return removedNode;
    }
  }
}

class Node {
  constructor(data) {
    this.data = data || null;
    this.next = null;
  }
}

export { LinkedList };
