function createNestedArr(){

	let temp=[]
	let temp1=[]
	let temp2=[]
	let a=0
	let countO=0
	let countX=0
	let max=3
	let min=1

	for(let i=0;i<9;i++){
		temp[i]=Math.floor(Math.random()*(max-min)+min);

		if(temp[i]==1){
			countO++
		}else{
			countX++
		}

		if(countO>4){
			min=2
		}

		if(countX>4){
			max=2
		}
	}


	for(let i=0;i<3;i++){
		for(let j=0;j<3;j++){
			if(temp[a]===2){
				temp1.push('X')
			}else{
				temp1.push('O')
			}
			a++
		}
		temp2.push(temp1)
		temp1=[]
	}

	return temp2;
}

console.log(createNestedArr())