/*
    [[X, X, O],
     [X, O, O],
     [O, X, X]]
*/

let randomAlph = () => {
	var text = '';
	const input = 'XO';
    return text = input.charAt(Math.floor(Math.random() * input.length));
}

let tictactoe = () => {
  let arr = [];
  let Oks = 0;
  let Xss = 0;
  for (let i = 0; i < 3; i++ ) {
    arr.push([]);
    for (let j = 0; j < 3; j++) {
      arr[i].push(randomAlph());
      if (arr[i][j] === 'X') {
        Xss++
      } 
    }
  }

  if (Xss === 5  || Xss === 4  ) {
    return arr;
  } else {
    return tictactoe();
  }
}

console.log(tictactoe());