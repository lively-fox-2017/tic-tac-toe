function tictactoe(){
	let str = "XO";
	let arrLuar = [];
	let countX = 1;
	let countO = 1;
	for(let row=0;row<3;row++){
		let arrDalem = [];
		for(let col=0;col<3;col++){
			let penentuan = Math.floor(Math.random()*2);
			if(penentuan === 0){
				if(countX <=5){
					arrDalem.push("X");
					countX++;
				}else{
					arrDalem.push("O");
					countO++;
				}
			}else if(penentuan === 1){
				if(countO <=5){
					arrDalem.push("O");
					countO++;
				}else{
					arrDalem.push("X");
					countX++;
				}
			}
		}
		arrLuar.push(arrDalem);
	}
	
	return arrLuar;
}

console.log(tictactoe());