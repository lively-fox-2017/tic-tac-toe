function ticTacToe(){
  var result = [];
  for(let i=0;i<3;i++){
    var board = [];
    for(let j =0;j<3;j++){
      board.push([]);
    }
    result.push(board)
  }

  var randomJumlah = Math.ceil((Math.random() * 2) + 3);
  //fill X
  let count = 1;
  while(count<=randomJumlah){
    var randomRow = Math.abs(Math.ceil((Math.random() * 3) - 1));
    var randomCol = Math.abs(Math.ceil((Math.random() * 3) - 1));
    if(result[randomRow][randomCol] !== 'x'){
      result[randomRow][randomCol] = 'x';
      count++;
    }
  }
  //fill O
  for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
      if(result[i][j] !== 'x'){
        result[i][j] = 'o';
      }
    }
  }
  return result;
}
console.log(ticTacToe());
