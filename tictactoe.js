'use strict'

function TicTacToe() {
    let xo = ['X', 'O'];
    let arr = [];
    let temp;
    let x = 0;
    let o = 0;
    for (let r = 0; r < 3; r++) {
        let row = [];
        for (let col = 0; col < 3; col++) {
            temp = xo[Math.floor(Math.random() * 2)];

            if (temp === 'X') {
                x++;
            } else {
                o++;
            }

            if (x > 5) {
                row.push('O');
            } else if (o > 5) {
                row.push('X');
            } else {
                row.push(temp);
            }

        }
        arr.push(row);
    }
    return arr;
}
console.log(TicTacToe());