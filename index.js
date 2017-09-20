function pemisah(row, col) {
	var text = "";
  	var possible = "XO";
	text += possible.charAt(Math.floor(Math.random() * possible.length));

	let temp = [];

	for (let i=0; i<col; i++) {
		let temp2 = [];
		for (let j=0; j<row; j++) {
			let text = possible.charAt(Math.floor(Math.random() * possible.length));
			// temp[i].push(text);
			temp2.push(text)
		}
		temp.push(temp2)
	}
	// console.log(temp);
	let countX = 0;
	let countO = 0;
	for (let k=0; k<col; k++) {
		for (let l=0; l<row; l++) {
			if (temp[k][l] === 'X') {
				countX +=1;
			} else if (temp[k][l] === 'O') {
				countO +=1;
			}
		}
	}
	if (countO == 5 || countO == 4) {
		return temp;

	} else {
		return pemisah(3,3);
	}

}



console.log(pemisah(3,3));
