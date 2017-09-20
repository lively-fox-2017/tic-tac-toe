function tictactoe(row, col) {

  let huruf = ['O', 'X']
  let array = [];
  //Counter X & 0
    countX = 0;
    countO = 0;
  //==============
  for (var i = 0; i < row; i++) {
    array.push([])
    for (var j = 0; j < col; j++) {
      let randomChar = Math.floor(Math.random() * huruf.length);
      char = huruf[randomChar]
      //Jika randomChar = 'X'
      if (char == 'X') {
        if(countX < 5){
          array[i].push('X')
          countX++;
        }else {
          array[i].push('O')
          countO++;
        }
      }
      //Jika randomChar = 'O'
      if(char =='O'){
        if(countO < 5){
          array[i].push('0')
          countO++;
        } else {
          array[i].push('X')
          countX++;
        }
      }
    }
  }
  return array
}
console.log(tictactoe(3, 3));
