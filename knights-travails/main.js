import displayKnightPath from "./knightMoves.js";

console.log("-------------------------");
console.log("\nTest 1: [0,0] to [2,1]");
console.log("Expected result: knightMoves([0,0],[1,2]) == [[0,0],[1,2]]");
displayKnightPath([0, 0], [1, 2]);

console.log("-------------------------");
console.log("\nTest 2: [0,0] to [3,3]");
console.log(
  "Expected results: knightMoves([0,0],[3,3]) == [[0,0],[2,1],[3,3]] or knightMoves([0,0],[3,3]) == [[0,0],[1,2],[3,3]]"
);
displayKnightPath([0, 0], [3, 3]);

console.log("-------------------------");
console.log("\nTest 3: [3,3] to [0,0]");
console.log(
  "Expected results: knightMoves([3,3],[0,0]) == [[3,3],[2,1],[0,0]] or knightMoves([3,3],[0,0]) == [[3,3],[1,2],[0,0]]"
);
displayKnightPath([3, 3], [0, 0]);

console.log("-------------------------");
console.log("\nTest 4: [0,0] to [7,7]");
console.log(
  "Expected results: knightMoves([0,0],[7,7]) == [[0,0],[2,1],[4,2],[6,3],[4,4],[6,5],[7,7]] or knightMoves([0,0],[7,7]) == [[0,0],[2,1],[4,2],[6,3],[7,5],[5,6],[7,7]]"
);
displayKnightPath([0, 0], [7, 7]);

console.log("-------------------------");
console.log("\nTest 5: [3,3] to [4,3]");
console.log(
  "Expected results: knightMoves([0,0],[7,7]) == [[3,3],[4,5],[2,4],[4,3]]"
);
displayKnightPath([3, 3], [4, 3]);

console.log("-------------------------");
console.log("\nTest 4: Same start and end point");
displayKnightPath([3, 3], [3, 3]);
