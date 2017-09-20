function ticTacToe(jumlahRow, jumlahCol){
  let arr = []
  let ttt = ['X', 'O']
  let countX = 0
  let countO = 0
  for (var r = 0; r < jumlahRow; r++) {
    let row = [];
    for (var i = 0; i < jumlahCol; i++) {
      let random = ttt[Math.floor(Math.random() * ttt.length)]
      if(random === 'X'){
        if (countX < 5) {
          row.push(random)
          countX++
        }else{
          row.push('O')
          countO++
        }
      }

      if(random === 'O'){
        if (countO < 5) {
          row.push(random)
          countO++
        }else{
          row.push('X')
          countX++
        }
      }
    }
    arr.push(row);
  }
  return arr
}

console.log(ticTacToe(3, 3));
