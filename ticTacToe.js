// function randomStr() {
//     let digit = 1
//     let angka = 'XO'
//     let tampung = ''

//     for (let i = 0; i < digit; i++) {
//         tampung += angka.charAt(Math.random() * angka.length);
//     }
//     return tampung
// };
// console.log(randomStr());

function ticTacToe(row, col) {


    let xoxo = 'XO'
    let digit = xoxo.split('')
    console.log(digit)

    let hasil = []

    let xCont = 0;
    let oCont = 0;

    for (let r = 0; r < row; r++) {
        let row = [];
        for (let c = 0; c < col; c++) {
            let random = digit[Math.floor(Math.random() * 2)];

            if (random === 'X') {
                xCont++
            } else {
                oCont++
            }

            if (xCont > 5) {
                row.push('O');
            } else if (oCont > 5) {
                row.push('X');
            } else {
                row.push(random);
            }
        }
        hasil.push(row);
    }
    return hasil
}

ticTacToe(3, 3);
console.log(ticTacToe(3, 3));