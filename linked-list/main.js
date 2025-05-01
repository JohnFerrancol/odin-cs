import { LinkedList } from "./classes.js";

// example uses class syntax - adjust as necessary
const list = new LinkedList();

// Testing appending and prepending linked list
console.log("Test 1: Empty List");
console.log(`Linked List: ${list.toString()}`); // Should return -> null
console.log("-------------------------");
console.log("\nTest 2: Adding the 1st node");
list.append("dog");
console.log("\nHead: ");
console.dir(list.firstNode(), { depth: null }); // Should return the Dog Node Class
console.log("\nTail: ");
console.dir(list.lastNode(), { depth: null }); // Should return the Dog Node Class
console.log(`\nSize: ${list.size()}`); // Should return the 1

console.log(`\nLinked List: ${list.toString()}`);

console.log("-------------------------");
console.log("\nTest 3: Appending node");
list.append("cat");
console.log("\nHead: ");
console.dir(list.firstNode(), { depth: null }); // Should return the Dog Node Class
console.log("\nTail: ");
console.dir(list.lastNode(), { depth: null }); // Should return the Cat Node Class
console.log(`\nSize: ${list.size()}`); // Should return 2

console.log(`\nLinked List: ${list.toString()}`);

console.log("-------------------------");
console.log("\nTest 4: Prepending node");
list.prepend("hamster");
console.log("\nHead: ");
console.dir(list.firstNode(), { depth: null }); // Should return the Hamster Node Class
console.log("\nTail: ");
console.dir(list.lastNode(), { depth: null }); // Should return the Cat Node Class
console.log(`\nSize: ${list.size()}`); // Should return 3

console.log(`\nLinked List: ${list.toString()}`); // Should return -> null

// Testing popping linked list
console.log("-------------------------");
console.log("\nTest 5: Popping node");
list.pop();
console.log("\nHead: ");
console.dir(list.firstNode(), { depth: null }); // Should return the Hamster Node Class
console.log("\nTail: ");
console.dir(list.lastNode(), { depth: null }); // Should return the Dog Node Class
console.log(`\nSize: ${list.size()}`); // Should return 2

console.log(`\nLinked List: ${list.toString()}`);

// Testing contains and find functions
console.log("-------------------------");
console.log("\nTest 6: Contains and Index Method Testing");
console.log(`\nCurrent Linked List: ${list.toString()}`);
console.log("What is the second node?");
console.dir(list.at(1), { depth: null });
console.log(`\nContains a Hamster Node?: ${list.contains("hamster")}`);
console.log(`Index of Hamster Node?: ${list.find("hamster")}`);
console.log(`Contains a Dinosaur Node?: ${list.contains("dinosaur")}`);
console.log(`Index of Dinosaur Node?: ${list.find("dinosaur")}`);

// Adding New Nodes
console.log("-------------------------");
console.log(
  "\nTest 7: Insert at Testing (Adding a node 'gorilla' in the middle)"
);
list.insertAt("gorilla", 1);

console.log(`\nSize: ${list.size()}`); // Should return 3

console.log(`\nLinked List: ${list.toString()}`);

console.log("-------------------------");
console.log("\nTest 8: Removing middle node ");
list.removeAt(1);

console.log(`\nSize: ${list.size()}`); // Should return 2

console.log(`\nLinked List: ${list.toString()}`);

console.log("-------------------------");
console.log("\nTest 9: Removing first node ");
list.removeAt(0);

console.log(`\nSize: ${list.size()}`); // Should return 1

console.log(`\nLinked List: ${list.toString()}`);
