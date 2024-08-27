const xAxis = "abcdefgh".split(""); // ["a", "b", "c", "d", "e", "f", "g", "h"]
// alternative: x_Axis = Array(8)
//   .fill()
//   .map((_, i) => String.fromCharCode(i + 97));
const yAxis = xAxis.map((_, i) => 8 - i); // [ 8, 7, 6, 5, 4, 3, 2, 1]

const coords = yAxis.flatMap((el) => xAxis.flatMap((letter) => letter + el));

let dragId = coords[Math.floor(Math.random() * coords.length)];
console.log(dragId);

let dragCol = dragId[0]
let dragRow = dragId[1]

console.log(dragCol);
console.log(dragRow);

  const offsets = [
    [0, 1], // up 1 row
    [1, 1], // diagonal 1 right column & up 1 row
    [1, 0], // right 1 column
    [1, -1], // diagonal 1 right column & down 1 row
    [0, -1], // down 1 row
    [-1, -1], // diagonal 1 left column & down 1 row
    [-1, 0], // left 1 column
    [-1, 1], // diagonal right 1 left column & up 1 row
  ];


offsets.forEach(function (offset) {

    let colOffset = String.fromCharCode(dragCol.charCodeAt(0) + offset[0]);
    let rowOffset = parseInt(dragRow) + offset[1];
    
        const offsetId = colOffset + rowOffset;
    
        if (coords.includes(offsetId)) {
          // console.log(`Move to ${colOffset}${rowOffset}`);
          const offsetId = colOffset + rowOffset;
          const squareOffset = document.querySelector(
            `div[square-id = "${offsetId}"]`
          );
    
          const isOffsetEmpty = isEmpty(squareOffset); // remember the function is asking if squareOffset === null, if so then is empty therefore true. Otherwise it is false.
    
          const hasOffsetOpponent =
            squareOffset?.firstChild?.classList.contains(opponentPiece);
    
          if (isOffsetEmpty) {
            moves.push(offsetId);
          }}
}
 offsets.forEach((direction) => {
    calculateMoves(direction);
  });

