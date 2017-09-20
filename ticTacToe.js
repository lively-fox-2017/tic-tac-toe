function generateTicTacToePosisiton(){
  //create array
  //random 4 or 5
  //make arr x and arr o
  //random even or odd even pop x odd pop o
  //fill array with x
  //fill array with o
  'use strict'
  var resArr=[];
  var xArr=[];
  var oArr=[];

  for(let i=0; i<4; i++){
    xArr.push('x');
    oArr.push('o');
  }
  if(Math.round(Math.random())==1){xArr.push('x')}else{oArr.push('o')};

  for(let i=0;i<3;i++){
    resArr.push([])
    for(let j=0;j<3;j++){
      //if odd pop x
      //if even pop o
      //if length>0 pop
      if(xArr.length>0 && oArr.length>0){
        if(Math.round(Math.random())==1){
            resArr[i].push(xArr.pop());
        }else{
            resArr[i].push(oArr.pop());
        }
      }else{
        if(xArr.length>0){
          resArr[i].push(xArr.pop());
        }else{
          resArr[i].push(oArr.pop());
        }
      }
    }
  }
  return resArr;

}

console.log(generateTicTacToePosisiton());
