'use strict';

function randomXO(){
  let X = 0;
  let O = 0;
  let acak = '';
  let arrXO=[];

  for (let i=0;i<9;i++){
    acak='XO'[Math.floor(Math.random()*2)];    ;
    if (acak=='X'){ X++;}
    else {  O++;}

    if (X>=5){ arrXO.push('O');}
    else if(O>=5){ arrXO.push('X'); }
    else{ arrXO.push(acak);}
  }
  return arrXO ;
}

function tictactoe(){
  let XO = randomXO();
  let arr=[];
  let i=0;
  for(let r=0 ; r < 3; r++){
    let row=[];
    for(let c=0;c<3;c++){
      row.push(XO[i]);
      i++;
    }
    arr.push(row);
  }
  return arr;
}

console.log(tictactoe());
