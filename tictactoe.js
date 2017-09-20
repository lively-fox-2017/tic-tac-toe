function ticTacToe(){
  let game = [];
  let countO = 0;
  let countX = 0;
  for (i = 0; i < 3; i++){
    game[i] = [];
    // console.log(game)
    for (j = 0; j < 3; j++){
      let answer = Math.floor(Math.random() * 10);
      // console.log('ini i',i)
      // console.log('ini j',j)
      // console.log(answer)
      // if (countX === 5)
      // game[i][j] = 'O';
      // else if (countO === 5)
      // game[i][j] = 'X';
      if (answer % 2 === 0) {
        game[i][j] = 'X';
        countX += 1;
        if (countX === 5){
          game[i][j] = 'O';
        }
        // console.log(countX)
      }
      else if (answer % 2 !== 0) {
        game[i][j] = 'O';
        countO += 1;
        if (countO === 5){
          game[i][j] = 'X';
        }
        // console.log(countO);
      }
    }
  }
  return game;
}

console.log(ticTacToe());
