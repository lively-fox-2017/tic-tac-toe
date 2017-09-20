function tictactoe() {
  var arr = []
  var row = []
  var col;
  var jumlahX = 0
  var jumlahO = 0
  for(var i = 0; i < 3; i++) {
    row = []
    for(var j = 0; j < 3; j++) {
      col = Math.round(Math.random())
      if(col == 1) {
        col = 'x'
      }
      else if(col == 0) {
        col = 'o'
      }


      if(jumlahX == 5) {
        col = 'o'
      }

      if(jumlahO == 5) {
        col = 'x'
      }

      if(col == 'x') {
        row.push('x')
        jumlahX++
      }

      if(col == 'o') {
        row.push('o')
        jumlahO++
      }

    }
    arr.push(row)
  }
  return arr
}

console.log(tictactoe());
