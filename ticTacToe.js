function ticTacToe(rowTotal,colTotal){
	var xo = "XO";
	var arr = [];
	var counterX = 0;
	var counterO = 0;
	var xoFilter = "";
	for(var r = 0; r < rowTotal; r++){
		var row = [];
		for(var col = 0; col < colTotal; col++){
			xoFilter = (xo.charAt(Math.floor(Math.random() * xo.length)));
			if(xoFilter === "X"){
				counterX++;
				if(counterX === 5){
					xoFilter = "O"
				}
			}
			else if(xoFilter === "O"){
				counterO++;
				if(counterO === 5){
					xoFilter = "X"
				}
			}
			row.push(xoFilter);
		}
		arr.push(row);
	}
	return arr
}
console.log(ticTacToe(3,3))
