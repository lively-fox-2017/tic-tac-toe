'use strict'

let XO = ['X','O'];

function tic_tac_tow(row,col){
    let arr = genRow(row);
    let countX = 0;//5
    let countO = 0;
    for(let i = 0; i < row ; i++){
        for(let j = 0; j < col ; j++){
            let actor = XO[genXO()];
            if(actor === 'X'){
                if(countX < 5){
                    arr[i].push(actor);
                    countX++;
                }else{
                    arr[i].push('O')
                    countO++;
                }
            }else{
                if(countO < 5){
                    arr[i].push(actor);
                    countO++;
                }else{
                    arr[i].push('X');
                    countX++;
                }
            }
        }
    }

    return arr;
}

function genRow(jumlahRow){
    let arr = [];
    for(let i = 0; i < jumlahRow; i++){
        arr.push([]);
    }
    console.log(arr);
    return arr;
}

function genXO(){
    return Math.round(Math.random()* (1 - 0) + 0);
}

console.log(tic_tac_tow(3,3));