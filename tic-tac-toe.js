function generateRandomTicTacToeElements() {
	let randomTicTacToeElements = [];
	let xCounts = 0;
	let oCounts = 0;

	while (randomTicTacToeElements.length < 9) {
		let randomNumber = Math.round(Math.random() * (1 - 0) + 0);
		let randomize = randomNumber === 1 ? 'X' : 'O';

		if (randomize === 'X' && xCounts < 5) {
			randomTicTacToeElements.push(randomize);
			xCounts += 1;
		} else if (randomize === 'O' && oCounts < 5) {
			randomTicTacToeElements.push(randomize);
			oCounts += 1;
		} else if (xCounts === 4 && oCounts === 4) {
			randomTicTacToeElements.push(randomize);
		}
	}

	return randomTicTacToeElements;
}

function randomTicTacToe() {
	let result = [];
	let randomTicTacToeElements = generateRandomTicTacToeElements();

	for (let i = 0; i < 3; i++) {
		let row = [];

		for (let j = 0; j < 3; j++) {
			row.push(...randomTicTacToeElements.splice(0, 1));
		}

		result.push(row);
	}

	return result;
}

console.log(randomTicTacToe());