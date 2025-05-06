import { Tree } from "./binarySearchTree.js";

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

console.log("-------------------------");
console.log("\nTest 1: Populate Tree");
const randomArray = Array.from({ length: 20 }, () =>
  Math.floor(Math.random() * 100)
);
console.log(`Random Numbers Generated: ${JSON.stringify(randomArray)}`);
const tree = new Tree(randomArray);
console.log("Current Tree");
prettyPrint(tree.root);

console.log("-------------------------");
console.log("\nTest 2: Is the tree Balanced? => It should be");
console.log(`Is the tree balanced: ${tree.isBalanced()}`);

console.log("-------------------------");
console.log("\nTest 3: Is the tree Balanced? => It shouldn't be");
const unbalancedNumbers = [150, 200, 250, 300, 350];
console.log(
  `UnBalanced Numbers Generated: ${JSON.stringify(unbalancedNumbers)}`
);
unbalancedNumbers.forEach((num) => tree.insert(num));
console.log("New Tree");
prettyPrint(tree.root);
console.log(`Is the tree balanced: ${tree.isBalanced()}`);

console.log("-------------------------");
console.log("\nTest 4: Rebalanced Tree");
tree.rebalance();
console.log("Rebalanced Tree");
prettyPrint(tree.root);
console.log(`Is the tree balanced: ${tree.isBalanced()}`);

console.log("-------------------------");
console.log("\nTest 4: Displaying BFS and DFS Traversal");
const levelOrderArr = [];
const inOrderArr = [];
const preOrderArr = [];
const postOrderArr = [];

tree.levelOrder((value) => levelOrderArr.push(value));
const levelOrderRes = levelOrderArr.join("->");
console.log(`BFS Traversal = ${levelOrderRes}`);

tree.inOrder((value) => inOrderArr.push(value));
const inOrderRes = inOrderArr.join("->");
console.log(`DFS In Order = ${inOrderRes}`);

tree.preOrder((value) => preOrderArr.push(value));
const preOrderRes = preOrderArr.join("->");
console.log(`DFS Pre Order = ${preOrderRes}`);

tree.postOrder((value) => postOrderArr.push(value));
const postOrderRes = postOrderArr.join("->");
console.log(`DFS Pre Order = ${postOrderRes}`);

console.log("-------------------------");
console.log("\nTest 4: Testing removal of node");
const newArray = [15, 10, 20, 8, 12, 17, 25, 13];
const newTree = new Tree(newArray);
console.log(`New Array: ${JSON.stringify(newArray)}`);
[15, 10, 20, 8, 12, 17, 25, 13].forEach((val) => newTree.insert(val));
console.log("Current Tree");
prettyPrint(newTree.root);

console.log("\nTest 4a: Testing removal of leaf node (8)");
newTree.remove(newTree.root, 8);
console.dir(newTree, { depth: null });
console.log("New Tree");
prettyPrint(newTree.root);

console.log("\nTest 4b: Testing removal of node with one child (12)");
tree.remove(newTree.root, 12);
console.log("New Tree");
prettyPrint(newTree.root);

console.log("\nTest 4c: Testing removal of node with two children (17)");
tree.remove(newTree.root, 17);
console.log("New Tree");
prettyPrint(newTree.root);
