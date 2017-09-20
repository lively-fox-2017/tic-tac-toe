function tic_tac_toe(col, row){
  var tic = [];
  let x = 0 ;
  let o = 0;

  for (let i =0; i<row; i++){
    let tac = [];
    for (let j = 0; j < col; j++){
      let xo = Math.floor(Math.random()*2);

      if ((x <= 5 && xo % 2 == 0) || o >=5) {
        x ++;
        tac.push('X');
      } else {
        o ++;
        tac.push("O");
      }
      }
      tic.push(tac)
      // console.log(tac);
    }
    return tic
  }

console.log(tic_tac_toe(3,3));
