let dragCol = "c"; // Can be any string value from a to h
let dragRow = 3; // Can be any value from 1 to 8

let moves = [];
console.log("Starting with: ", dragRow);

// up possibles moves, dragCol keep static
for (let i = dragRow + 1; i <= 8; i++) {
  moves.push(dragCol + i);
}
console.log(moves);

//down possibles moves, dragCol keep static
for (let i = dragRow - 1; i >= 1; i--) {
  moves.push(dragCol + i);
  console.log(moves);
}

// left possibles moves, dragRow keep static
for (let i = dragCol.charCodeAt(0) - 1; i >= "a".charCodeAt(0); i--) {
  moves.push(String.fromCharCode(i) + dragRow);
}

// right possibles moves, dragRow keep static
for (let i = dragCol.charCodeAt(0) + 1; i <= "h".charCodeAt(0); i++) {
  moves.push(String.fromCharCode(i) + dragRow);
}

console.log("Potencial Rook moves: ", moves);

console.log(String.fromCharCode(97));
console.log(String.fromCharCode(104));
