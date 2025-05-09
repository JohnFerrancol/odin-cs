const knightMoves = (start, end) => {
  // Defining the possible directions that the knight can move
  const possibleDirections = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
  ];

  // Defining the board size restrictions (8x8) where the knight can move
  const boardSize = 8;

  const withinBounds = ([x, y]) => {
    return x >= 0 && x < boardSize && y >= 0 && y < boardSize;
  };

  // Stringify the start and end coordinates for easier comparison
  const startString = start.toString();
  const endString = end.toString();

  // We will be using the BFS graph algorithm to find the short path

  // Define a queue and visited nodes set
  const queue = [[start, [start]]];
  const visitedNodes = new Set([startString]);

  // Implment BFS to find the shortest path
  while (queue.length > 0) {
    const [currentNode, currentPath] = queue.shift();

    // If the knight has reached the endpoint, return the path
    if (currentNode.toString() === endString) {
      return currentPath;
    }

    // For all of the possible directions
    for (const [dx, dy] of possibleDirections) {
      // Calculate the new possible position
      const newXPosition = currentNode[0] + dx;
      const newYPosition = currentNode[1] + dy;

      // If the node is within the 8x8 bounds, add the new position to the visited nodes set and queue if it has not been visited
      if (withinBounds([newXPosition, newYPosition])) {
        const newPosition = [newXPosition, newYPosition];
        const newPositionString = newPosition.toString();

        if (!visitedNodes.has(newPositionString)) {
          visitedNodes.add(newPositionString);

          queue.push([newPosition, [...currentPath, newPosition]]);
        }
      }
    }
  }

  return null; // If path not found
};

const displayKnightPath = (start, end) => {
  // Derive the array path from the knight moves
  const shortestPathDerived = knightMoves(start, end);

  // Display an error when null is returned
  if (!shortestPathDerived) {
    console.log("Error! Invalid Path!");
    return;
  }

  // Display the nodes visited in the graph the number of steps did it take
  console.log(
    `=> You made it in ${
      shortestPathDerived.length - 1
    } moves! Here's your path:`
  );
  shortestPathDerived.forEach((position) => {
    console.log(`[${position}]`);
  });
};

export default displayKnightPath;
