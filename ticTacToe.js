function ticTacToe(row,col){
  const XO='XO';
  let xCount=0, oCount=0,result=[],maxCount=Math.floor(row*col/2);
  for (var i = 0; i < col; i++) {
    result.push([]);
    for (var j = 0; j < row; j++) {
      let temp=XO.charAt(Math.floor(Math.random()*XO.length));
      if (temp=='X' && xCount<maxCount) {
        result[i].push(temp)
        xCount++;
      } else
      if (temp=='O' && oCount<maxCount) {
        result[i].push(temp);
        oCount++;
      } else {
        if (xCount<maxCount) {
          result[i].push('X');
          xCount++;
        } else
        if (oCount<maxCount){
          result[i].push('O');
          oCount++;
        } else {
          result[i].push(temp)
        }
      }
    }
  }
  return result;
}

console.log(ticTacToe(3,3));
