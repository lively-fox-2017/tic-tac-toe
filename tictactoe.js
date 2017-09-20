function ticTacToe(data) {
    let tampungX = 0,
        tampungO = 0;
    for (var a = 0; a < 3; a++) {
        let row = [];
        for (var b = 0; b < 3; b++) {
            // row.push(XO[Math.floor((Math.random() * XO.length) + 0)]);
            let col = Math.round(Math.random());
            // console.log(col);
            if (col === 0) {
                col = 'X';
            } else {
                col = 'O';
            }
            if (tampungO === 5) {
                col = 'X';
            }
            if (tampungX === 5) {
                col = 'O';
            }
            // console.log(col);
            if (col === 'X') {
                row.push(col);
                tampungX++;
            } else {
                row.push(col);
                tampungO++;
            }

        }
        
        console.log(row);
    }
    
}
ticTacToe();