function ticTacToe(row, col) {
  let tictac = ['x','o']
  let ticTacToe = []
  let jumlahX = 0
  let jumlahO = 0
  for (var i = 0; i < col; i++) {
    ticTacToe.push([])
    for (var j = 0; j < row; j++) {
      let random_tictac = tictac[Math.floor(Math.random() * tictac.length)]
      if(random_tictac === 'x'){
        if (jumlahX < 5) {
          ticTacToe[i].push(random_tictac)
          jumlahX++
        } else {
          ticTacToe[i].push('o')
          jumlahO++
        }
      }
      if(random_tictac === 'o'){
        if (jumlahO < 5) {
          ticTacToe[i].push(random_tictac)
          jumlahO++
        } else {
          ticTacToe[i].push('x')
          jumlahX++
        }
      }
    }
  }
  return ticTacToe
}

console.log(ticTacToe(3, 3));
