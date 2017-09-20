function ticToe(jumlahRow, jumlahCol) {
    let arr = [];
    let xoxo = 'ox'.split('');


    let counterX = 0;
    let counterO = 0;
    for (let r = 0; r < jumlahRow; r++) {
        var row = [];
        for (let c = 0; c < jumlahCol; c++) {
            // buat random index yang berulang
            debugger
            let index = Math.floor(Math.random() * xoxo.length);
            if (index == '1') {
                counterX++
            } else {
                counterO++
            }
            console.log(counterX)
            if (counterX > 5) {
                row.push('0')
            } else if (counterO > 5) {
                row.push('x')
            } else {
                row.push(xoxo[index])
            }
        }

        arr.push(row);
    }
    return arr;
}

console.log(ticToe(3, 3));