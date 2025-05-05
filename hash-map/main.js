import { HashMap } from "./hashMap.js";

const hashMapTest = new HashMap();

hashMapTest.set("apple", "red");
hashMapTest.set("banana", "yellow");
hashMapTest.set("carrot", "orange");
hashMapTest.set("dog", "brown");
hashMapTest.set("elephant", "gray");
hashMapTest.set("frog", "green");
hashMapTest.set("grape", "purple");
hashMapTest.set("hat", "black");
hashMapTest.set("ice cream", "white");
hashMapTest.set("jacket", "blue");
hashMapTest.set("kite", "pink");
hashMapTest.set("lion", "golden");

console.log("Initial HashMap");
console.dir(hashMapTest, { depth: null });

hashMapTest.set("moon", "silver");
console.log("-------------------------");
console.log(
  "\nTest 1: Appending new Key, value pair -> Test to see if capacity increases as load balance is exceeded"
);
console.dir(hashMapTest, { depth: null });

console.log("-------------------------");
console.log("\nTest 2: Testing get method");
console.log(`Getting valid key (apple): ${hashMapTest.get("apple")}`);
console.log(`Getting valid key (mango): ${hashMapTest.get("mango")}`);

console.log("-------------------------");
console.log("\nTest 3: Testing has method");
console.log(`Getting valid key (apple): ${hashMapTest.has("apple")}`);
console.log(`Getting valid key (mango): ${hashMapTest.has("mango")}`);

console.log("-------------------------");
console.log("\nTest 4: Testing remove method");
console.log(`Checking apple exists (apple): ${hashMapTest.remove("apple")}`);
console.log("New HashMap");
console.dir(hashMapTest, { depth: null });
console.log(`Checking apple exists (apple): ${hashMapTest.has("apple")}`);

console.log("-------------------------");
console.log("\nTest 5: Testing other getter methods");
console.log(`Number of stored keys: ${hashMapTest.length()}`);
console.log(`Array of the keys: ${JSON.stringify(hashMapTest.keys())}`);
console.log(`Array of the values: ${JSON.stringify(hashMapTest.values())}`);
console.log(`Array of the entries: ${JSON.stringify(hashMapTest.entries())}`);

console.log("-------------------------");
console.log("\nTest 6: Clear hashmap");
hashMapTest.clear();
console.log("Cleared HashMap");
console.dir(hashMapTest, { depth: null });
