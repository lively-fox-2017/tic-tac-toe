function ticTacToe(row, col) {

    const charXO = 'XO'
    let hasil = []
    for (let r = 0; r < row; r++) {
        let row = []
        for (let c = 0; c < col; c++) {
            row.push(charXO.charAt(Math.random() * charXO.length))
        }
        hasil.push(row)
    }
    return hasil
}

ticTacToe(3, 3);
//console.log(ticTacToe(3, 3));