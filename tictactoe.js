function tictactoe(row,column){
  var xo='xo'
  let result_x=0
  //awal x 0 untuk nampung isian
  let result_o=0
  //awal o 0 untuk menampung hasil randoman
  let kosong=[]
  for (let i = 0; i < row; i++) {
    //looping untuk mebuat row sepanjang 3
    let board=[]
    for (let j = 0; j < column; j++) {
      //loooping untuk membuat kolom sepanjang 3
      if(((Math.floor(Math.random()*xo.length))==0 && result_o<5||result_x==5)){
        //isi randoman untuk mengisi board seesuai dengan panjang xo yaitu 2 dan hrus 4 atau 5
        result_o++
        board.push('o')
        // hasil random di masukkan ke array
        // console.log(board);
      }else{
        result_x++
        board.push('x')
      }
    }
    kosong.push(board)
  }
  return kosong
}

console.log(tictactoe(3,3))
