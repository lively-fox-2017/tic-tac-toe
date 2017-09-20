'use strict'

var arrLuar = [];
function ticTacToe() {
  let isi = ['o', 'x'];
  let jumlahO = 0;
  let jumlahX = 0;

  for (var i = 0; i < 3; i++) {
    let arrDalam = [];
    for (var j = 0; j < 3; j++) {
      debugger;
      let acak = Math.floor(Math.random() * isi.length);

      if (isi[acak] === 'x') {
        jumlahX++;
      } else {
        jumlahO++
      }

      if (jumlahX > 5) {
        arrDalam.push('o');
      } else if (jumlahO > 5) {
        arrDalam.push('x');
      } else {
        arrDalam.push(isi[acak]);
      }

    }
    arrLuar.push(arrDalam);
  }
  return arrLuar;
}

console.log(ticTacToe());
