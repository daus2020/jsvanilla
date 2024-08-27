let dragCol = "c"; // Can be any string value from a to h
let dragRow = 3; // Can be any value from 1 to 8

let moves = [];

const addMoves = (start, condition, update, fixedPart, isRowStatic) => {
  for (let i = start; condition(i); i = update(i)) {
    moves.push(
      isRowStatic ? fixedPart + i : String.fromCharCode(i) + fixedPart
    );
  }
};

// Up moves
addMoves(
  dragRow + 1,
  (i) => i <= 8,
  (i) => i + 1,
  dragCol,
  true
);

// Down moves
addMoves(
  dragRow - 1,
  (i) => i >= 1,
  (i) => i - 1,
  dragCol,
  true
);

// Left moves
addMoves(
  dragCol.charCodeAt(0) - 1,
  (i) => i >= "a".charCodeAt(0),
  (i) => i - 1,
  dragRow,
  false
);

// Right moves
addMoves(
  dragCol.charCodeAt(0) + 1,
  (i) => i <= "h".charCodeAt(0),
  (i) => i + 1,
  dragRow,
  false
);

console.log("Possible Rook moves: ", moves);
