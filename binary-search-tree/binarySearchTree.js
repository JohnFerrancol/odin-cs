class Tree {
  constructor(array) {
    const processedArray = [...new Set(array.sort((a, b) => a - b))];
    this.root = this.buildTree(processedArray);
  }

  buildTree(array, start = 0, end = array.length - 1) {
    // Base Case: when the node cannot be halved anymore as there is only 1 node left
    if (start > end) return null;

    // Find new root and middle values
    const middle = Math.floor((start + end) / 2);
    const root = new Node(array[middle]);

    // Recursive case: Keep building left and right subtrees by recursively adding left and properties to the new root node
    root.left = this.buildTree(array, start, middle - 1);
    root.right = this.buildTree(array, middle + 1, end);

    return root;
  }

  insert(value, currentNode = this.root) {
    // Base Case -> When the node pointed to in the recursive case does not exist, create and insert the new node
    if (currentNode === null) {
      return new Node(value);
    }

    // When there is a duplicate value, ignore the value
    // Recursive Case -> When the current node value is lower than the node value, recursively point to the left of the tree
    // Else recursively point to the right of the tree
    if (currentNode.value === value) {
      return currentNode;
    } else if (value < currentNode.value) {
      currentNode.left = this.insert(value, currentNode.left);
    } else if (value > currentNode.value) {
      currentNode.right = this.insert(value, currentNode.right);
    }

    return currentNode;
  }

  remove(node = this.root, value) {
    // Function used to change the order of the tree when the node to be removed has two children nodes
    const getSuccessor = (currentNode) => {
      // We want the closest greater value to be the root
      // We can point the currentNode to the right
      currentNode = currentNode.right;

      // Then iteratively point the currentNode to the left till we get the most left node
      while (currentNode && currentNode.left) {
        currentNode = currentNode.left;
      }

      return currentNode;
    };

    // Base case -> When the node is not found, return null
    if (node === null) {
      return node;
    }

    // Recursive call the function to search for the correct node
    if (node.value > value) {
      node.left = this.remove(node.left, value);
    } else if (node.value < value) {
      node.right = this.remove(node.right, value);
    } else {
      // If node value matches with the given value

      // NOTE: The reason for returning the removed node is to effectively ask the parent to no longer point to the removed node

      // Cases when root has 0 children or
      // only right child
      if (!node.left) return node.right;

      // When root has only left child
      if (!node.right) return node.left;

      // When both children are present
      let succ = getSuccessor(node);
      node.value = succ.value;
      node.right = this.remove(node.right, succ.value);
    }
    return node;
  }

  find(currentNode = this.root, value) {
    // Base case -> When the node is not found, return null
    if (currentNode === null) {
      return currentNode;
    }

    // Recursive call the function to search for the correct node
    if (value < currentNode.value) {
      return this.find(currentNode.left, value);
    } else if (value > currentNode.value) {
      return this.find(currentNode.right, value);
    } else {
      return currentNode;
    }
  }

  levelOrder(callback) {
    if (typeof callback !== "function")
      throw new Error("Error! Callback function must be used!");

    if (this.root === null) {
      return null;
    }

    // Define a queue data structure by initialising an array called queue
    // Enqueue the root
    const queue = [];
    queue.push(this.root);

    // While the queue has items do the following
    while (queue.length !== 0) {
      // Get the current Node
      let currentNode = queue[0];

      // Call the callback function to process the node data
      callback(currentNode.value);

      // Enqueue the left and right nodes of the current node pointed
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);

      // Dequeue the current node
      queue.shift();
    }
  }

  inOrder(callback, currentNode = this.root) {
    if (typeof callback !== "function")
      throw new Error("Error! Callback function must be used!");

    if (!currentNode) return;

    // In Order -> Process Sequence (Left, Root, Right)
    this.inOrder(callback, currentNode.left);
    callback(currentNode.value);
    this.inOrder(callback, currentNode.right);
  }

  preOrder(callback, currentNode = this.root) {
    if (typeof callback !== "function")
      throw new Error("Error! Callback function must be used!");

    if (!currentNode) return;

    // Pre Order -> Process Sequence (Root, Left, Right)
    callback(currentNode.value);
    this.preOrder(callback, currentNode.left);
    this.preOrder(callback, currentNode.right);
  }

  postOrder(callback, currentNode = this.root) {
    if (typeof callback !== "function")
      throw new Error("Error! Callback function must be used!");

    if (!currentNode) return;

    // Post Order -> Process Sequence (Left, Right, Root)
    this.postOrder(callback, currentNode.left);
    this.postOrder(callback, currentNode.right);
    callback(currentNode.value);
  }

  height(value) {
    const getHeight = (node) => {
      // Base Case -> When the leaf node is reached
      if (!node) return -1;

      // Recursively get the height
      const lHeight = getHeight(node.left);
      const rHeight = getHeight(node.right);

      // Recursively increment the height
      return Math.max(lHeight, rHeight) + 1;
    };

    // Find the node from the find method and get the height
    const node = this.find(value);
    if (!node) return -1;

    return getHeight(node);
  }

  depth(value, currentNode = this.root, currentDepth = 0) {
    // Base Case -> When the leaf node is reached
    if (!currentNode) return -1;

    // Recursively increment the height when traversing the tree
    if (currentNode.value === value) return currentDepth;
    else if (value < currentNode.value) {
      return this.depth(value, currentNode.left, currentDepth + 1);
    } else {
      return this.depth(value, currentNode.right, currentDepth + 1);
    }
  }

  isBalanced(root = this.root) {
    if (!root) return true;

    // Check height of left and right subtrees
    let lHeight = this.height(root.left);
    let rHeight = this.height(root.right);

    // If absolute height difference is greater than 1
    // Then return false
    if (Math.abs(lHeight - rHeight) > 1) return false;

    // Recursively check the left and right subtrees
    return this.isBalanced(root.left) && this.isBalanced(root.right);
  }

  rebalance() {
    // Obtain an array of the new nodes and sort them and run the buildTree method to rebuild the tree
    let storeInOrder = [];
    this.inOrder((node) => storeInOrder.push(node));
    storeInOrder = [...new Set(storeInOrder.sort((a, b) => a - b))];
    this.root = this.buildTree(storeInOrder);
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export { Tree };
