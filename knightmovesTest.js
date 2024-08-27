let array_a = ["c1r2", "c2r1"];
let array_d = ["p", "m"];
let array_c = [];

for (let i = 0; i < array_a.length; i++) {
  for (let j = 0; j < array_d.length; j++) {
    for (let k = 0; k < array_d.length; k++) {
      array_c.push(array_a[i] + array_d[j] + array_d[k]);
    }
  }
}

console.log(array_c);

let pm = ["p", "m"];
let array_e = [];

for (let i = 0; i < pm.length; i++) {
  for (let j = 0; j < pm.length; j++) {
    array_e.push(`${pm[i]}1${pm[j]}2`, `${pm[j]}2${pm[i]}1`);
  }
}

console.log(array_e);

// Another try
// Here offsets represents all the 8 possibles knight moves, assuming first element represent columns and second one represent rows
// for example [1, 2] represent 1 column forward to the right and 2 rows up.
// Columns are represented by letters "a", "b", "c", "d", "e", "f", "g" and "h"
// Rows are represented by numbers 1, 2, 3, 4, 5, 6 ,7 and 8, and therefor the borders here are 1 and 8
// If replace number with their corresponding UTF-16 code equivalent we obtain the corresponding letter.
// For example 97 is equivalent with letter "a" and 104 the letter "h", so 97 and 104 are the borders.

// let dragCol = 97; // ASCII value for 'a'
// console.log(String.fromCharCode(dragCol)); // 'a'
// dragCol = 104; // ASCII value for 'h'
// console.log(String.fromCharCode(dragCol)); // 'h'
let dragId = "a1";
let dragCol = dragId[0];
let dragRow = dragId[1];
let moves = [];

const offsets = [
  [1, 2],
  [2, 1],
  [-1, 2],
  [-2, 1],
  [1, -2],
  [2, -1],
  [-1, -2],
  [-2, -1],
];

offsets.forEach(function (offset) {
  let colOffset = String.fromCharCode(dragCol.charCodeAt(0) + offset[0]);
  let rowOffset = parseInt(dragRow) + offset[1];
  if (
    colOffset >= "a" &&
    colOffset <= "h" &&
    rowOffset >= 1 &&
    rowOffset <= 8
  ) {
    console.log(`Move to ${colOffset}${rowOffset}`);
    const offsetId = colOffset + rowOffset;
    const squareOffset = document.querySelector(
      `div[square-id = "${offsetId}"]`
    );

    const isOffsetEmpty = isEmpty(squareOffset); // remember the function is asking if squareOffset === null, if so then is empty therefore true. Otherwise it is false.

    const isNextRowOpponent = squareOffset?.firstChild?.classList.contains(
      playerTurn === "white" ? "black" : "white"
    );

    if (isOffsetEmpty) {
      moves.push(squareUp);
    } else {
      isNextRowOpponent && moves.push(squareUp);
    }
  }
});

// Then, depending of dragId (start position), generate valid moves with 2 steps:
// 1.- Check if the move generates is included in the coords array.
// 2.- Check if the move generates is empty or not.
// 2.a If is it empty then push to the moves array
// 2.b Determinate is occupied by a teammate or opposite. If it is the last is true the push to the moves array

let fruits = ["apple", "banana", "cherry"];

fruits.forEach(function (fruit) {
  console.log(`I like ${fruit}`);
});
