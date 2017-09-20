function ticTacToe() {

  let result = [];
  let chars = ['X', 'O'];
  let xCounts = 0;
  let oCounts = 0;

  // generate rows
  for (let i = 0; i < 3; i++) {

    result.push([]);

    // generate columns
    for (let j = 0; j < 3; j++) {

      // generateXO, X or O
      let generateXO = chars[Math.floor(Math.random() * 2)];

      if (generateXO === 'X') {
        if (xCounts < 4)
          xCounts += 1;
        else
          generateXO = 'O';
      } else {
        if (oCounts < 4)
          oCounts += 1;
        else
          generateXO = 'X';
      }

      result[i].push(generateXO);

    }

  }

  return result;

}

console.log(ticTacToe());
