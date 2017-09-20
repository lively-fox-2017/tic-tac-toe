'use strict'

function ticTac(){
let random = 'OX';
let result = '';
let X = 0, O = 0;
let row = [];


	for(var i = 0; i < 9; i++){
		result += random[Math.floor(Math.random() * random.length)]
		if(result[i] === 'X'){
			X++
		}
		else {
			O++;
		}
	}
	
if(X >=4 && X <= 5){
	let atas = 1;
	let bawah = 0;
	// console.log(result)
	for(var i = 0; i < 3; i++){
		let kolom = [];
			for(var j = 0; j < 3; j++){
				kolom.push(result.substring(bawah , atas))
				bawah++;
				atas++
			}
			row.push(kolom);
		}

	return row;
}
return ticTac();


}

console.log(ticTac())