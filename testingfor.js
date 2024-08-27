let dragRow = 2;
let movements = [];
console.log("starting with: ", dragRow);

for (let i = 1; i < 8; i++) {
  if (dragRow + i >= 9) {
    return movements;
  }
  movements.push(dragRow + i);
}
console.log("Movements: ", movements);
// for (let i = dragRow + 1; i <= 8; i++) {}
