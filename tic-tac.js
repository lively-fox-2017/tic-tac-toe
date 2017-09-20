function ticTac(kolom,row){
	var huruf = ['o','x']
	var tampung = [];
	var totalX = 0;
	var totalO = 0;

	for (var i = 0; i < row; i++){
		tampung.push([]);
		//console.log(tampung);
		for (var j = 0; j < kolom; j++){
			var random = huruf[Math.floor(Math.random() * huruf.length)];
			//console.log(random)
			// return random
			tampung[i].push(random)
		}
	}

  for (var i = 0; i < kolom; i++) {
    for (var j = 0; j < kolom; j++) {
      if (tampung[i][j] == 'x') {
        totalX++
        return tampung
      }else if(tampung[i][j] == 'o') {
        totalO++
        return tampung
      }
    }
  }
    ///console.log(totalO);
  if (totalX == 5 && totalO == 4) {
    return tampung;
  }else if(totalO == 5 && totalX == 4){
    return tampung;
  }

}

console.log(ticTac(3,3));
