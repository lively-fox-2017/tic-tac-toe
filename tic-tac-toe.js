function tic_tac_toe(row,col){
	let board = []
	let xo = 'XO'
	let txt = ''
	let x = 0;
	let o = 0;

	for(let i=0;i < col;i++){
		board.push([])
		for(let j=0;j < row;j++){
			txt = xo.charAt(Math.floor(Math.random() * xo.length))
			// JIKA txt == X
			if(txt == 'X'){
				if(x >= 5){
					txt = 'O'
					board[i].push(txt)
				}
				else{
					board[i].push(txt)
					x++
				}
			}
			// JIKA txt == O
			else if(txt == 'O'){
				if(o >= 5){
					txt = 'X'
					board[i].push(txt)
				}
				else{
					board[i].push(txt)
					o++
				}
			}
		}
	}
	console.log(o)
	return board
}
console.log(tic_tac_toe(3,3))