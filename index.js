function generateTicTacToe(rows, cols) {
  let result = [];
  let member = ['X', 'O'];
  let count = [5, 5];
  for (let i = 0; i < rows; i++) {
    let column = [];
    for (let j = 0; j < cols; j++) {
      let newElement = Math.round(Math.random());
      newElement = (count[newElement] === 0) ? !(newElement) * 1 : newElement;
      count[newElement]--;
      newElement = member[newElement];
      column.push(newElement);
    }
    result.push(column);
  }
  return result
}

console.log(generateTicTacToe(3, 3));
